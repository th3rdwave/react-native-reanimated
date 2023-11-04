"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loop = loop;
exports.repeat = repeat;
exports.withRepeat = withRepeat;

var _util = require("./util");

function withRepeat(_nextAnimation) {
  'worklet';

  let numberOfReps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  let reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let callback = arguments.length > 3 ? arguments[3] : undefined;
  return (0, _util.defineAnimation)(_nextAnimation, () => {
    'worklet';

    const nextAnimation = typeof _nextAnimation === 'function' ? _nextAnimation() : _nextAnimation;

    function repeat(animation, now) {
      const finished = nextAnimation.onFrame(nextAnimation, now);
      animation.current = nextAnimation.current;

      if (finished) {
        animation.reps += 1; // call inner animation's callback on every repetition
        // as the second argument the animation's current value is passed

        if (nextAnimation.callback) {
          nextAnimation.callback(true
          /* finished */
          , animation.current);
        }

        if (numberOfReps > 0 && animation.reps >= numberOfReps) {
          return true;
        }

        const startValue = reverse ? nextAnimation.current : animation.startValue;

        if (reverse) {
          nextAnimation.toValue = animation.startValue;
          animation.startValue = startValue;
        }

        nextAnimation.onStart(nextAnimation, startValue, now, nextAnimation.previousAnimation);
        return false;
      }

      return false;
    }

    const repCallback = finished => {
      if (callback) {
        callback(finished);
      } // when cancelled call inner animation's callback


      if (!finished && nextAnimation.callback) {
        nextAnimation.callback(false
        /* finished */
        );
      }
    };

    function onStart(animation, value, now, previousAnimation) {
      animation.startValue = value;
      animation.reps = 0;
      nextAnimation.onStart(nextAnimation, value, now, previousAnimation);
    }

    return {
      isHigherOrder: true,
      onFrame: repeat,
      onStart,
      reps: 0,
      current: nextAnimation.current,
      callback: repCallback,
      startValue: 0
    };
  });
}
/**
 * @deprecated Kept for backward compatibility. Will be removed soon.
 */


function repeat(_nextAnimation) {
  'worklet';

  let numberOfReps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  let reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let callback = arguments.length > 3 ? arguments[3] : undefined;
  console.warn('Method `repeat` is deprecated. Please use `withRepeat` instead');
  return withRepeat(_nextAnimation, numberOfReps, reverse, callback);
}

function loop(nextAnimation) {
  'worklet';

  let numberOfLoops = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  console.warn('Method `loop` is deprecated. Please use `withRepeat` instead');
  return repeat(nextAnimation, Math.round(numberOfLoops * 2), true);
}
//# sourceMappingURL=repeat.js.map