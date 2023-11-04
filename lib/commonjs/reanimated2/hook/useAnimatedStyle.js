"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimatedStyle = useAnimatedStyle;

var _react = require("react");

var _core = require("../core");

var _UpdateProps = _interopRequireWildcard(require("../UpdateProps"));

var _animation = require("../animation");

var _NativeReanimated = _interopRequireDefault(require("../NativeReanimated"));

var _useSharedValue = require("./useSharedValue");

var _utils = require("./utils");

var _ViewDescriptorsSet = require("../ViewDescriptorsSet");

var _PlatformChecker = require("../PlatformChecker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* global _frameTimestamp */
function prepareAnimation(animatedProp, lastAnimation, lastValue) {
  'worklet';

  if (Array.isArray(animatedProp)) {
    animatedProp.forEach((prop, index) => prepareAnimation(prop, lastAnimation && lastAnimation[index], lastValue && lastValue[index])); // return animatedProp;
  }

  if (typeof animatedProp === 'object' && animatedProp.onFrame) {
    const animation = animatedProp;
    let value = animation.current;

    if (lastValue !== undefined) {
      if (typeof lastValue === 'object') {
        if (lastValue.value !== undefined) {
          // previously it was a shared value
          value = lastValue.value;
        } else if (lastValue.onFrame !== undefined) {
          if ((lastAnimation === null || lastAnimation === void 0 ? void 0 : lastAnimation.current) !== undefined) {
            // it was an animation before, copy its state
            value = lastAnimation.current;
          } else if ((lastValue === null || lastValue === void 0 ? void 0 : lastValue.current) !== undefined) {
            // it was initialized
            value = lastValue.current;
          }
        }
      } else {
        // previously it was a plain value, just set it as starting point
        value = lastValue;
      }
    }

    animation.callStart = timestamp => {
      animation.onStart(animation, value, timestamp, lastAnimation);
    };

    animation.callStart((0, _core.getTimestamp)());
    animation.callStart = null;
  } else if (typeof animatedProp === 'object') {
    // it is an object
    Object.keys(animatedProp).forEach(key => prepareAnimation(animatedProp[key], lastAnimation && lastAnimation[key], lastValue && lastValue[key]));
  }
}

function runAnimations(animation, timestamp, key, result, animationsActive) {
  'worklet';

  if (!animationsActive.value) {
    return true;
  }

  if (Array.isArray(animation)) {
    result[key] = [];
    let allFinished = true;
    animation.forEach((entry, index) => {
      if (!runAnimations(entry, timestamp, index, result[key], animationsActive)) {
        allFinished = false;
      }
    });
    return allFinished;
  } else if (typeof animation === 'object' && animation.onFrame) {
    let finished = true;

    if (!animation.finished) {
      if (animation.callStart) {
        animation.callStart(timestamp);
        animation.callStart = null;
      }

      finished = animation.onFrame(animation, timestamp);
      animation.timestamp = timestamp;

      if (finished) {
        animation.finished = true;
        animation.callback && animation.callback(true
        /* finished */
        );
      }
    }

    result[key] = animation.current;
    return finished;
  } else if (typeof animation === 'object') {
    result[key] = {};
    let allFinished = true;
    Object.keys(animation).forEach(k => {
      if (!runAnimations(animation[k], timestamp, k, result[key], animationsActive)) {
        allFinished = false;
      }
    });
    return allFinished;
  } else {
    result[key] = animation;
    return true;
  }
}

function styleUpdater(viewDescriptors, updater, state, maybeViewRef, animationsActive) {
  'worklet';

  const animations = state.animations ?? {};
  const newValues = updater() ?? {};
  const oldValues = state.last;
  let hasAnimations = false;

  for (const key in newValues) {
    const value = newValues[key];

    if ((0, _utils.isAnimated)(value)) {
      prepareAnimation(value, animations[key], oldValues[key]);
      animations[key] = value;
      hasAnimations = true;
    } else {
      delete animations[key];
    }
  }

  if (hasAnimations) {
    const frame = timestamp => {
      const {
        animations,
        last,
        isAnimationCancelled
      } = state;

      if (isAnimationCancelled) {
        state.isAnimationRunning = false;
        return;
      }

      const updates = {};
      let allFinished = true;

      for (const propName in animations) {
        const finished = runAnimations(animations[propName], timestamp, propName, updates, animationsActive);

        if (finished) {
          last[propName] = updates[propName];
          delete animations[propName];
        } else {
          allFinished = false;
        }
      }

      if (updates) {
        (0, _UpdateProps.default)(viewDescriptors, updates, maybeViewRef);
      }

      if (!allFinished) {
        (0, _core.requestFrame)(frame);
      } else {
        state.isAnimationRunning = false;
      }
    };

    state.animations = animations;

    if (!state.isAnimationRunning) {
      state.isAnimationCancelled = false;
      state.isAnimationRunning = true;

      if (_frameTimestamp) {
        frame(_frameTimestamp);
      } else {
        (0, _core.requestFrame)(frame);
      }
    }

    state.last = Object.assign({}, oldValues, newValues);
    const style = (0, _utils.getStyleWithoutAnimations)(state.last);

    if (style) {
      (0, _UpdateProps.default)(viewDescriptors, style, maybeViewRef);
    }
  } else {
    state.isAnimationCancelled = true;
    state.animations = [];
    const diff = (0, _utils.styleDiff)(oldValues, newValues);
    state.last = Object.assign({}, oldValues, newValues);

    if (diff) {
      (0, _UpdateProps.default)(viewDescriptors, newValues, maybeViewRef);
    }
  }
}

function jestStyleUpdater(viewDescriptors, updater, state, maybeViewRef, animationsActive, animatedStyle) {
  'worklet';

  let adapters = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];
  const animations = state.animations ?? {};
  const newValues = updater() ?? {};
  const oldValues = state.last; // extract animated props

  let hasAnimations = false;
  Object.keys(animations).forEach(key => {
    const value = newValues[key];

    if (!(0, _utils.isAnimated)(value)) {
      delete animations[key];
    }
  });
  Object.keys(newValues).forEach(key => {
    const value = newValues[key];

    if ((0, _utils.isAnimated)(value)) {
      prepareAnimation(value, animations[key], oldValues[key]);
      animations[key] = value;
      hasAnimations = true;
    }
  });

  function frame(timestamp) {
    const {
      animations,
      last,
      isAnimationCancelled
    } = state;

    if (isAnimationCancelled) {
      state.isAnimationRunning = false;
      return;
    }

    const updates = {};
    let allFinished = true;
    Object.keys(animations).forEach(propName => {
      const finished = runAnimations(animations[propName], timestamp, propName, updates, animationsActive);

      if (finished) {
        last[propName] = updates[propName];
        delete animations[propName];
      } else {
        allFinished = false;
      }
    });

    if (Object.keys(updates).length) {
      (0, _UpdateProps.updatePropsJestWrapper)(viewDescriptors, updates, maybeViewRef, animatedStyle, adapters);
    }

    if (!allFinished) {
      (0, _core.requestFrame)(frame);
    } else {
      state.isAnimationRunning = false;
    }
  }

  if (hasAnimations) {
    state.animations = animations;

    if (!state.isAnimationRunning) {
      state.isAnimationCancelled = false;
      state.isAnimationRunning = true;

      if (_frameTimestamp) {
        frame(_frameTimestamp);
      } else {
        (0, _core.requestFrame)(frame);
      }
    }
  } else {
    state.isAnimationCancelled = true;
    state.animations = [];
  } // calculate diff


  const diff = (0, _utils.styleDiff)(oldValues, newValues);
  state.last = Object.assign({}, oldValues, newValues);

  if (Object.keys(diff).length !== 0) {
    (0, _UpdateProps.updatePropsJestWrapper)(viewDescriptors, diff, maybeViewRef, animatedStyle, adapters);
  }
} // check for invalid usage of shared values in returned object


function checkSharedValueUsage(prop, currentKey) {
  if (Array.isArray(prop)) {
    // if it's an array (i.ex. transform) validate all its elements
    for (const element of prop) {
      checkSharedValueUsage(element, currentKey);
    }
  } else if (typeof prop === 'object' && prop.value === undefined) {
    // if it's a nested object, run validation for all its props
    for (const key of Object.keys(prop)) {
      checkSharedValueUsage(prop[key], key);
    }
  } else if (currentKey !== undefined && typeof prop === 'object' && prop.value !== undefined) {
    // if shared value is passed insted of its value, throw an error
    throw new Error(`invalid value passed to \`${currentKey}\`, maybe you forgot to use \`.value\`?`);
  }
}

function useAnimatedStyle(updater, dependencies, adapters) {
  var _initRef$current;

  const viewsRef = (0, _ViewDescriptorsSet.makeViewsRefSet)();
  const viewDescriptors = (0, _ViewDescriptorsSet.makeViewDescriptorsSet)();
  const initRef = (0, _react.useRef)();
  const inputs = Object.values(updater._closure ?? {});
  const adaptersArray = adapters ? Array.isArray(adapters) ? adapters : [adapters] : [];
  const adaptersHash = adapters ? (0, _utils.buildWorkletsHash)(adaptersArray) : null;
  const animationsActive = (0, _useSharedValue.useSharedValue)(true);
  const animatedStyle = (0, _react.useRef)({}); // build dependencies

  if (!dependencies) {
    dependencies = [...inputs, updater.__workletHash];
  } else {
    dependencies.push(updater.__workletHash);
  }

  adaptersHash && dependencies.push(adaptersHash);

  if (!initRef.current) {
    const initialStyle = (0, _animation.initialUpdaterRun)(updater);
    (0, _utils.validateAnimatedStyles)(initialStyle);
    initRef.current = {
      initial: {
        value: initialStyle,
        updater: updater
      },
      remoteState: (0, _core.makeRemote)({
        last: initialStyle
      }),
      sharableViewDescriptors: (0, _core.makeMutable)([])
    };
    viewDescriptors.rebuildsharableViewDescriptors( // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    initRef.current.sharableViewDescriptors);
  }

  dependencies.push((_initRef$current = initRef.current) === null || _initRef$current === void 0 ? void 0 : _initRef$current.sharableViewDescriptors.value); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

  const {
    initial,
    remoteState,
    sharableViewDescriptors
  } = initRef.current;
  const maybeViewRef = _NativeReanimated.default.native ? undefined : viewsRef;
  (0, _react.useEffect)(() => {
    let fun;
    let updaterFn = updater;
    let optimalization = updater.__optimalization;

    if (adapters) {
      updaterFn = () => {
        'worklet';

        const newValues = updater();
        adaptersArray.forEach(adapter => {
          adapter(newValues);
        });
        return newValues;
      };
    }

    if ((0, _utils.canApplyOptimalisation)(updaterFn) && !(0, _PlatformChecker.shouldBeUseWeb)()) {
      if ((0, _utils.hasColorProps)(updaterFn())) {
        updaterFn = () => {
          'worklet';

          const newValues = updaterFn();
          const oldValues = remoteState.last;
          const diff = (0, _utils.styleDiff)(oldValues, newValues);
          remoteState.last = Object.assign({}, oldValues, newValues);
          (0, _utils.parseColors)(diff);
          return diff;
        };
      } else {
        updaterFn = () => {
          'worklet';

          const newValues = updaterFn();
          const oldValues = remoteState.last;
          const diff = (0, _utils.styleDiff)(oldValues, newValues);
          remoteState.last = Object.assign({}, oldValues, newValues);
          return diff;
        };
      }
    } else if (!(0, _PlatformChecker.shouldBeUseWeb)()) {
      optimalization = 0;

      updaterFn = () => {
        'worklet';

        const style = updaterFn();
        (0, _utils.parseColors)(style);
        return style;
      };
    }

    if (typeof updater.__optimalization !== undefined) {
      updaterFn.__optimalization = optimalization;
    }

    if ((0, _PlatformChecker.isJest)()) {
      fun = () => {
        'worklet';

        jestStyleUpdater(sharableViewDescriptors, updater, remoteState, maybeViewRef, animationsActive, animatedStyle, adaptersArray);
      };
    } else {
      fun = () => {
        'worklet';

        styleUpdater(sharableViewDescriptors, updaterFn, remoteState, maybeViewRef, animationsActive);
      };
    }

    const mapperId = (0, _core.startMapper)(fun, inputs, [], updaterFn, // TODO fix this
    sharableViewDescriptors);
    return () => {
      (0, _core.stopMapper)(mapperId);
    };
  }, dependencies);
  (0, _react.useEffect)(() => {
    animationsActive.value = true;
    return () => {
      // initRef.current = null;
      // viewsRef = null;
      animationsActive.value = false;
    };
  }, []);
  checkSharedValueUsage(initial.value);

  if (process.env.JEST_WORKER_ID) {
    return {
      viewDescriptors,
      initial: initial,
      viewsRef,
      animatedStyle
    };
  } else {
    return {
      viewDescriptors,
      initial: initial,
      viewsRef
    };
  }
}
//# sourceMappingURL=useAnimatedStyle.js.map