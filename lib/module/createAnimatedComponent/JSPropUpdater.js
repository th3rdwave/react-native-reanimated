'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { NativeEventEmitter, NativeModules, findNodeHandle } from 'react-native';
import { isWeb, nativeShouldBeMock } from '../reanimated2/PlatformChecker';
const IS_WEB = isWeb();
function getViewTagForComponent(animatedComponent) {
  return IS_WEB ? animatedComponent._component : findNodeHandle(animatedComponent);
}
export class JSPropUpdater {
  static _listener(data) {
    const component = JSPropUpdater._tagToComponentMapping.get(data.viewTag);
    component && component._updateFromNative(data.props);
  }
  constructor() {
    _defineProperty(this, "_reanimatedEventEmitter", void 0);
    const reanimatedModule = nativeShouldBeMock() ? JSPropUpdater._reanimatedModuleMock : NativeModules.ReanimatedModule;
    this._reanimatedEventEmitter = new NativeEventEmitter(reanimatedModule);
  }
  addOnJSPropsChangeListener(animatedComponent) {
    const viewTag = getViewTagForComponent(animatedComponent);
    JSPropUpdater._tagToComponentMapping.set(viewTag, animatedComponent);
    if (JSPropUpdater._tagToComponentMapping.size === 1) {
      this._reanimatedEventEmitter.addListener('onReanimatedPropsChange', JSPropUpdater._listener);
    }
  }
  removeOnJSPropsChangeListener(animatedComponent) {
    const viewTag = getViewTagForComponent(animatedComponent);
    JSPropUpdater._tagToComponentMapping.delete(viewTag);
    if (JSPropUpdater._tagToComponentMapping.size === 0) {
      this._reanimatedEventEmitter.removeAllListeners('onReanimatedPropsChange');
    }
  }
}
_defineProperty(JSPropUpdater, "_tagToComponentMapping", new Map());
_defineProperty(JSPropUpdater, "_reanimatedModuleMock", {
  async addListener() {
    // noop
  },
  async removeListeners() {
    // noop
  }
});
//# sourceMappingURL=JSPropUpdater.js.map