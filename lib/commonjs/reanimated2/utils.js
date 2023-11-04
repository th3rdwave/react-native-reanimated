"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRelativeCoords = getRelativeCoords;

var _NativeMethods = require("./NativeMethods");

function getRelativeCoords(parentRef, x, y) {
  'worklet';

  const parentCoords = (0, _NativeMethods.measure)(parentRef);
  return {
    x: x - parentCoords.x,
    y: y - parentCoords.y
  };
}
//# sourceMappingURL=utils.js.map