"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NativeReanimated = void 0;

var _reactNative = require("react-native");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class NativeReanimated {
  constructor() {
    let native = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _defineProperty(this, "native", void 0);

    _defineProperty(this, "InnerNativeModule", void 0);

    if (global.__reanimatedModuleProxy === undefined && native) {
      const {
        ReanimatedModule
      } = _reactNative.NativeModules;
      ReanimatedModule === null || ReanimatedModule === void 0 ? void 0 : ReanimatedModule.installTurboModule();
    }

    this.InnerNativeModule = global.__reanimatedModuleProxy;
    this.native = native;
  }

  installCoreFunctions(valueSetter) {
    return this.InnerNativeModule.installCoreFunctions(valueSetter);
  }

  makeShareable(value) {
    return this.InnerNativeModule.makeShareable(value);
  }

  makeMutable(value) {
    return this.InnerNativeModule.makeMutable(value);
  }

  makeRemote() {
    let object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return this.InnerNativeModule.makeRemote(object);
  }

  registerSensor(sensorType, interval, sensorData) {
    return this.InnerNativeModule.registerSensor(sensorType, interval, sensorData);
  }

  unregisterSensor(sensorId) {
    return this.InnerNativeModule.unregisterSensor(sensorId);
  }

  startMapper(mapper) {
    let inputs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let outputs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    let updater = arguments.length > 3 ? arguments[3] : undefined;
    let viewDescriptors = arguments.length > 4 ? arguments[4] : undefined;
    return this.InnerNativeModule.startMapper(mapper, inputs, outputs, updater, viewDescriptors);
  }

  stopMapper(mapperId) {
    return this.InnerNativeModule.stopMapper(mapperId);
  }

  registerEventHandler(eventHash, eventHandler) {
    return this.InnerNativeModule.registerEventHandler(eventHash, eventHandler);
  }

  unregisterEventHandler(id) {
    return this.InnerNativeModule.unregisterEventHandler(id);
  }

  getViewProp(viewTag, propName, callback) {
    return this.InnerNativeModule.getViewProp(viewTag, propName, callback);
  }

  enableLayoutAnimations(flag) {
    this.InnerNativeModule.enableLayoutAnimations(flag);
  }

  configureProps(uiProps, nativeProps) {
    this.InnerNativeModule.configureProps(uiProps, nativeProps);
  }

  subscribeForKeyboardEvents(keyboardEventData) {
    return this.InnerNativeModule.subscribeForKeyboardEvents(keyboardEventData);
  }

  unsubscribeFromKeyboardEvents(listenerId) {
    this.InnerNativeModule.unsubscribeFromKeyboardEvents(listenerId);
  }

}

exports.NativeReanimated = NativeReanimated;
//# sourceMappingURL=NativeReanimated.js.map