"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _ReanimatedModuleCompat = _interopRequireDefault(require("./ReanimatedModuleCompat"));

var _PlatformChecker = require("./reanimated2/PlatformChecker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let exportedModule;

if ((0, _PlatformChecker.nativeShouldBeMock)()) {
  exportedModule = _ReanimatedModuleCompat.default;
} else {
  const {
    ReanimatedModule
  } = _reactNative.NativeModules;
  exportedModule = ReanimatedModule;
}

var _default = exportedModule;
exports.default = _default;
//# sourceMappingURL=ReanimatedModule.native.js.map