"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimatedReaction = useAnimatedReaction;

var _react = require("react");

var _core = require("../core");

var _useSharedValue = require("./useSharedValue");

/**
 * @param prepare - worklet used for data preparation for the second parameter
 * @param react - worklet which takes data prepared by the one in the first parameter and performs certain actions
 * the first worklet defines the inputs, in other words on which shared values change will it be called.
 * the second one can modify any shared values but those which are mentioned in the first worklet. Beware of that, because this may result in endless loop and high cpu usage.
 */
function useAnimatedReaction(prepare, react, dependencies) {
  const previous = (0, _useSharedValue.useSharedValue)(null);

  if (dependencies === undefined) {
    dependencies = [Object.values(prepare._closure ?? {}), Object.values(react._closure ?? {}), prepare.__workletHash, react.__workletHash];
  } else {
    dependencies.push(prepare.__workletHash, react.__workletHash);
  }

  (0, _react.useEffect)(() => {
    const fun = () => {
      'worklet';

      const input = prepare();
      react(input, previous.value);
      previous.value = input;
    };

    const mapperId = (0, _core.startMapper)(fun, Object.values(prepare._closure ?? {}), []);
    return () => {
      (0, _core.stopMapper)(mapperId);
    };
  }, dependencies);
}
//# sourceMappingURL=useAnimatedReaction.js.map