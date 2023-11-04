"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimatedKeyboard = useAnimatedKeyboard;

var _react = require("react");

var _NativeReanimated = _interopRequireDefault(require("../NativeReanimated"));

var _core = require("../core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useAnimatedKeyboard() {
  const ref = (0, _react.useRef)(null);
  const listenerId = (0, _react.useRef)(-1);
  const isSubscribed = (0, _react.useRef)(false);

  if (ref.current === null) {
    const keyboardEventData = {
      isShown: (0, _core.makeMutable)(false),
      isAnimating: (0, _core.makeMutable)(false),
      height: (0, _core.makeMutable)(0)
    };
    listenerId.current = _NativeReanimated.default.subscribeForKeyboardEvents(keyboardEventData);
    ref.current = keyboardEventData;
    isSubscribed.current = true;
  }

  (0, _react.useEffect)(() => {
    if (isSubscribed.current === false && ref.current !== null) {
      // subscribe again after Fast Refresh
      listenerId.current = _NativeReanimated.default.subscribeForKeyboardEvents(ref.current);
      isSubscribed.current = true;
    }

    return () => {
      _NativeReanimated.default.unsubscribeFromKeyboardEvents(listenerId.current);

      isSubscribed.current = false;
    };
  }, []);
  return ref.current;
}
//# sourceMappingURL=useAnimatedKeyboard.js.map