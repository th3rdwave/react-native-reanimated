"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimatedRef = useAnimatedRef;

var _react = require("react");

var _useSharedValue = require("./useSharedValue");

var _NativeMethods = require("../NativeMethods");

var _fabricUtils = require("../fabricUtils");

function useAnimatedRef() {
  const tag = (0, _useSharedValue.useSharedValue)(-1);
  const ref = (0, _react.useRef)();
  const isFabric = global._IS_FABRIC;

  if (!ref.current) {
    const fun = component => {
      'worklet'; // enters when ref is set by attaching to a component

      if (component) {
        tag.value = isFabric ? (0, _fabricUtils.getShadowNodeWrapperFromHostInstance)(component) : (0, _NativeMethods.getTag)(component);
        fun.current = component;
      }

      return tag.value;
    };

    Object.defineProperty(fun, 'current', {
      value: null,
      writable: true,
      enumerable: false
    });
    ref.current = fun;
  }

  return ref.current;
}
//# sourceMappingURL=useAnimatedRef.js.map