"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchCommand = dispatchCommand;
exports.getTag = getTag;
exports.measure = measure;
exports.scrollTo = void 0;
exports.setGestureState = setGestureState;

var _reactNative = require("react-native");

var _PlatformChecker = require("./PlatformChecker");

/* global _WORKLET _measure _scrollTo _dispatchCommand _setGestureState */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
function getTag(view) {
  return (0, _reactNative.findNodeHandle)(view);
}

const isNativeIndefined = (0, _PlatformChecker.shouldBeUseWeb)();

function measure(animatedRef) {
  'worklet';

  if (!_WORKLET || isNativeIndefined) {
    console.warn('[reanimated.measure] method cannot be used for web or Chrome Debugger');
    return {
      x: NaN,
      y: NaN,
      width: NaN,
      height: NaN,
      pageX: NaN,
      pageY: NaN
    };
  }

  const viewTag = animatedRef();

  const result = _measure(viewTag);

  if (result.x === -1234567) {
    throw new Error(`The view with tag ${viewTag} could not be measured`);
  }

  return result;
}

function dispatchCommand(animatedRef, commandName, args) {
  'worklet';

  if (!_WORKLET || isNativeIndefined) {
    return;
  }

  const shadowNodeWrapper = animatedRef();

  _dispatchCommand(shadowNodeWrapper, commandName, args);
}

let scrollTo;
exports.scrollTo = scrollTo;

if (global._IS_FABRIC) {
  exports.scrollTo = scrollTo = (animatedRef, x, y, animated) => {
    'worklet';

    dispatchCommand(animatedRef, 'scrollTo', [x, y, animated]);
  };
} else {
  exports.scrollTo = scrollTo = (animatedRef, x, y, animated) => {
    'worklet';

    if (!_WORKLET || isNativeIndefined) {
      return;
    }

    const viewTag = animatedRef();

    _scrollTo(viewTag, x, y, animated);
  };
}

function setGestureState(handlerTag, newState) {
  'worklet';

  if (!_WORKLET || isNativeIndefined) {
    console.warn('[Reanimated] You can not use setGestureState in non-worklet function.');
    return;
  }

  _setGestureState(handlerTag, newState);
}
//# sourceMappingURL=NativeMethods.js.map