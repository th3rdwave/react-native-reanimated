"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MapperRegistry = _interopRequireDefault(require("./MapperRegistry"));

var _Mapper = _interopRequireDefault(require("./Mapper"));

var _MutableValue = _interopRequireDefault(require("./MutableValue"));

var _NativeReanimated = require("../NativeReanimated/NativeReanimated");

var _PlatformChecker = require("../PlatformChecker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class JSReanimated extends _NativeReanimated.NativeReanimated {
  constructor() {
    super(false);

    _defineProperty(this, "_valueSetter", undefined);

    _defineProperty(this, "_renderRequested", false);

    _defineProperty(this, "_mapperRegistry", new _MapperRegistry.default(this));

    _defineProperty(this, "_frames", []);

    _defineProperty(this, "timeProvider", void 0);

    if ((0, _PlatformChecker.isJest)()) {
      this.timeProvider = {
        now: () => global.ReanimatedDataMock.now()
      };
    } else {
      this.timeProvider = {
        now: () => window.performance.now()
      };
    }
  }

  pushFrame(frame) {
    this._frames.push(frame);

    this.maybeRequestRender();
  }

  getTimestamp() {
    return this.timeProvider.now();
  }

  maybeRequestRender() {
    if (!this._renderRequested) {
      this._renderRequested = true;
      requestAnimationFrame(_timestampMs => {
        this._renderRequested = false;

        this._onRender(this.getTimestamp());
      });
    }
  }

  _onRender(timestampMs) {
    this._mapperRegistry.execute();

    const frames = [...this._frames];
    this._frames = [];

    for (let i = 0, len = frames.length; i < len; ++i) {
      frames[i](timestampMs);
    }

    if (this._mapperRegistry.needRunOnRender) {
      this._mapperRegistry.execute();
    }
  }

  installCoreFunctions(valueSetter) {
    this._valueSetter = valueSetter;
  }

  makeShareable(value) {
    return value;
  }

  makeMutable(value) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new _MutableValue.default(value, this._valueSetter);
  }

  makeRemote() {
    let object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return object;
  }

  startMapper(mapper) {
    let inputs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let outputs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    const instance = new _Mapper.default(this, mapper, inputs, outputs);

    const mapperId = this._mapperRegistry.startMapper(instance);

    this.maybeRequestRender();
    return mapperId;
  }

  stopMapper(mapperId) {
    this._mapperRegistry.stopMapper(mapperId);
  }

  registerEventHandler(_, __) {
    // noop
    return '';
  }

  unregisterEventHandler(_) {// noop
  }

  enableLayoutAnimations() {
    console.warn('[Reanimated] enableLayoutAnimations is not available for WEB yet');
  }

  registerSensor() {
    console.warn('[Reanimated] useAnimatedSensor is not available on web yet.');
    return -1;
  }

  unregisterSensor() {// noop
  }

  jestResetModule() {
    if ((0, _PlatformChecker.isJest)()) {
      /**
       * If someone used timers to stop animation before the end,
       * then _renderRequested was set as true
       * and any new update from another test wasn't applied.
       */
      this._renderRequested = false;
    } else {
      throw Error('This method can be only use in Jest testing.');
    }
  }

  subscribeForKeyboardEvents(_) {
    console.warn('[Reanimated] useAnimatedKeyboard is not available on web yet.');
    return -1;
  }

  unsubscribeFromKeyboardEvents(_) {// noop
  }

}

exports.default = JSReanimated;
//# sourceMappingURL=JSReanimated.js.map