"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSharedValue = useSharedValue;

var _react = require("react");

var _animation = require("../animation");

var _core = require("../core");

function useSharedValue(init) {
  const ref = (0, _react.useRef)((0, _core.makeMutable)(init));

  if (ref.current === null) {
    ref.current = (0, _core.makeMutable)(init);
  }

  (0, _react.useEffect)(() => {
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (0, _animation.cancelAnimation)(ref.current);
    };
  }, []); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

  return ref.current;
}
//# sourceMappingURL=useSharedValue.js.map