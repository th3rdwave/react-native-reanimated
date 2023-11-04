"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDerivedValue = useDerivedValue;

var _react = require("react");

var _animation = require("../animation");

var _core = require("../core");

function useDerivedValue(processor, dependencies) {
  const initRef = (0, _react.useRef)(null);
  const inputs = Object.values(processor._closure ?? {}); // build dependencies

  if (dependencies === undefined) {
    dependencies = [...inputs, processor.__workletHash];
  } else {
    dependencies.push(processor.__workletHash);
  }

  if (initRef.current === null) {
    initRef.current = (0, _core.makeMutable)((0, _animation.initialUpdaterRun)(processor));
  } // eslint-disable-next-line @typescript-eslint/no-non-null-assertion


  const sharedValue = initRef.current;
  (0, _react.useEffect)(() => {
    const fun = () => {
      'worklet';

      sharedValue.value = processor();
    };

    const mapperId = (0, _core.startMapper)(fun, inputs, [sharedValue]);
    return () => {
      (0, _core.stopMapper)(mapperId);
    };
  }, dependencies);
  (0, _react.useEffect)(() => {
    return () => {
      initRef.current = null;
    };
  }, []);
  return sharedValue;
}
//# sourceMappingURL=useDerivedValue.js.map