"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPluginState = void 0;
exports.configureProps = configureProps;
exports.enableLayoutAnimations = enableLayoutAnimations;
exports.getTimestamp = getTimestamp;
exports.getViewProp = getViewProp;
exports.isConfiguredCheck = exports.isConfigured = void 0;
exports.jestResetJsReanimatedModule = jestResetJsReanimatedModule;
exports.makeMutable = makeMutable;
exports.makeRemote = makeRemote;
exports.makeShareable = makeShareable;
exports.requestFrame = requestFrame;
exports.runOnJS = runOnJS;
exports.runOnUI = runOnUI;
exports.startMapper = startMapper;
exports.stopMapper = stopMapper;

var _NativeReanimated = _interopRequireDefault(require("./NativeReanimated"));

var _reactNative = require("react-native");

var _PlatformChecker = require("./PlatformChecker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global _WORKLET _getCurrentTime _frameTimestamp _eventTimestamp _setGlobalConsole */
if (global._setGlobalConsole === undefined) {
  // it can happen when Reanimated plugin wasn't added, but the user uses the only API from version 1
  global._setGlobalConsole = () => {// noop
  };
}

const testWorklet = () => {
  'worklet';
};

const checkPluginState = function () {
  let throwError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (!testWorklet.__workletHash && !(0, _PlatformChecker.shouldBeUseWeb)()) {
    if (throwError) {
      throw new Error("Reanimated 2 failed to create a worklet, maybe you forgot to add Reanimated's babel plugin?");
    }

    return false;
  }

  return true;
};

exports.checkPluginState = checkPluginState;

const isConfigured = function () {
  let throwError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return checkPluginState(throwError);
};

exports.isConfigured = isConfigured;

const isConfiguredCheck = () => {
  if (!isConfigured(true)) {
    throw new Error('If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation');
  }
};

exports.isConfiguredCheck = isConfiguredCheck;

function pushFrame(frame) {
  _NativeReanimated.default.pushFrame(frame);
}

function requestFrame(frame) {
  'worklet';

  if (_NativeReanimated.default.native) {
    requestAnimationFrame(frame);
  } else {
    pushFrame(frame);
  }
}

global._WORKLET = false;

global._log = function (s) {
  console.log(s);
};

function runOnUI(worklet) {
  return makeShareable(worklet);
}

function makeShareable(value) {
  isConfiguredCheck();
  return _NativeReanimated.default.makeShareable(value);
}

function getViewProp(viewTag, propName) {
  if (global._IS_FABRIC) {
    throw new Error('[react-native-reanimated] `getViewProp` is not supported on Fabric yet');
  }

  return new Promise((resolve, reject) => {
    return _NativeReanimated.default.getViewProp(viewTag, propName, result => {
      if (typeof result === 'string' && result.substr(0, 6) === 'error:') {
        reject(result);
      } else {
        resolve(result);
      }
    });
  });
}

let _getTimestamp;

if ((0, _PlatformChecker.nativeShouldBeMock)()) {
  _getTimestamp = () => {
    return _NativeReanimated.default.getTimestamp();
  };
} else {
  _getTimestamp = () => {
    'worklet';

    if (_frameTimestamp) {
      return _frameTimestamp;
    }

    if (_eventTimestamp) {
      return _eventTimestamp;
    }

    return _getCurrentTime();
  };
}

function getTimestamp() {
  'worklet';

  if (_reactNative.Platform.OS === 'web') {
    return _NativeReanimated.default.getTimestamp();
  }

  return _getTimestamp();
}

function workletValueSetter(value) {
  'worklet';

  const previousAnimation = this._animation;

  if (previousAnimation) {
    previousAnimation.cancelled = true;
    this._animation = null;
  }

  if (typeof value === 'function' || value !== null && typeof value === 'object' && value.onFrame !== undefined) {
    const animation = typeof value === 'function' ? value() : value; // prevent setting again to the same value
    // and triggering the mappers that treat this value as an input
    // this happens when the animation's target value(stored in animation.current until animation.onStart is called) is set to the same value as a current one(this._value)
    // built in animations that are not higher order(withTiming, withSpring) hold target value in .current

    if (this._value === animation.current && !animation.isHigherOrder) {
      animation.callback && animation.callback(true);
      return;
    } // animated set


    const initializeAnimation = timestamp => {
      animation.onStart(animation, this.value, timestamp, previousAnimation);
    };

    initializeAnimation(getTimestamp());

    const step = timestamp => {
      if (animation.cancelled) {
        animation.callback && animation.callback(false
        /* finished */
        );
        return;
      }

      const finished = animation.onFrame(animation, timestamp);
      animation.finished = true;
      animation.timestamp = timestamp;
      this._value = animation.current;

      if (finished) {
        animation.callback && animation.callback(true
        /* finished */
        );
      } else {
        requestAnimationFrame(step);
      }
    };

    this._animation = animation;

    if (_frameTimestamp) {
      // frame
      step(_frameTimestamp);
    } else {
      requestAnimationFrame(step);
    }
  } else {
    // prevent setting again to the same value
    // and triggering the mappers that treat this value as an input
    if (this._value === value) {
      return;
    }

    this._value = value;
  }
} // We cannot use pushFrame
// so we use own implementation for js


function workletValueSetterJS(value) {
  const previousAnimation = this._animation;

  if (previousAnimation) {
    previousAnimation.cancelled = true;
    this._animation = null;
  }

  if (typeof value === 'function' || value !== null && typeof value === 'object' && value.onFrame) {
    // animated set
    const animation = typeof value === 'function' ? value() : value;

    let initializeAnimation = timestamp => {
      animation.onStart(animation, this.value, timestamp, previousAnimation);
    };

    const step = timestamp => {
      if (animation.cancelled) {
        animation.callback && animation.callback(false
        /* finished */
        );
        return;
      }

      if (initializeAnimation) {
        initializeAnimation(timestamp);
        initializeAnimation = null; // prevent closure from keeping ref to previous animation
      }

      const finished = animation.onFrame(animation, timestamp);
      animation.timestamp = timestamp;
      this._setValue && this._setValue(animation.current);

      if (finished) {
        animation.callback && animation.callback(true
        /* finished */
        );
      } else {
        requestFrame(step);
      }
    };

    this._animation = animation;
    requestFrame(step);
  } else {
    this._setValue && this._setValue(value);
  }
}

function makeMutable(value) {
  isConfiguredCheck();
  return _NativeReanimated.default.makeMutable(value);
}

function makeRemote() {
  let object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  isConfiguredCheck();
  return _NativeReanimated.default.makeRemote(object);
}

function startMapper(mapper) {
  let inputs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let outputs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  let updater = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : () => {// noop
  };
  let viewDescriptors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  isConfiguredCheck();
  return _NativeReanimated.default.startMapper(mapper, inputs, outputs, updater, viewDescriptors);
}

function stopMapper(mapperId) {
  _NativeReanimated.default.stopMapper(mapperId);
}

function runOnJS(fun) {
  'worklet';

  if (!_WORKLET) {
    return fun;
  }

  if (!fun.__callAsync) {
    throw new Error("Attempting to call runOnJS with an object that is not a host function. Using runOnJS is only possible with methods that are defined on the main React-Native Javascript thread and that aren't marked as worklets");
  } else {
    return fun.__callAsync;
  }
}

_NativeReanimated.default.installCoreFunctions(_NativeReanimated.default.native ? workletValueSetter : workletValueSetterJS);

if (!(0, _PlatformChecker.isWeb)() && isConfigured()) {
  const capturableConsole = console;
  runOnUI(() => {
    'worklet';

    const console = {
      debug: runOnJS(capturableConsole.debug),
      log: runOnJS(capturableConsole.log),
      warn: runOnJS(capturableConsole.warn),
      error: runOnJS(capturableConsole.error),
      info: runOnJS(capturableConsole.info)
    };

    _setGlobalConsole(console);
  })();
}

let featuresConfig = {
  enableLayoutAnimations: false,
  setByUser: false
};

function enableLayoutAnimations(flag) {
  let isCallByUser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (isCallByUser) {
    featuresConfig = {
      enableLayoutAnimations: flag,
      setByUser: true
    };

    _NativeReanimated.default.enableLayoutAnimations(flag);
  } else if (!featuresConfig.setByUser && featuresConfig.enableLayoutAnimations !== flag) {
    featuresConfig.enableLayoutAnimations = flag;

    _NativeReanimated.default.enableLayoutAnimations(flag);
  }
}

function configureProps(uiProps, nativeProps) {
  if (!(0, _PlatformChecker.nativeShouldBeMock)()) {
    _NativeReanimated.default.configureProps(uiProps, nativeProps);
  }
}

function jestResetJsReanimatedModule() {
  _NativeReanimated.default.jestResetModule();
}
//# sourceMappingURL=core.js.map