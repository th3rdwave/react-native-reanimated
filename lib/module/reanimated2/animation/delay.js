'use strict';

import { defineAnimation, getReduceMotionForAnimation } from './util';

// TODO TYPESCRIPT This is a temporary type to get rid of .d.ts file.

export const withDelay = function (delayMs, _nextAnimation, reduceMotion) {
  'worklet';

  return defineAnimation(_nextAnimation, () => {
    'worklet';

    const nextAnimation = typeof _nextAnimation === 'function' ? _nextAnimation() : _nextAnimation;
    function delay(animation, now) {
      const {
        startTime,
        started,
        previousAnimation
      } = animation;
      const current = animation.current;
      if (now - startTime > delayMs || animation.reduceMotion) {
        if (!started) {
          nextAnimation.onStart(nextAnimation, current, now, previousAnimation);
          animation.previousAnimation = null;
          animation.started = true;
        }
        const finished = nextAnimation.onFrame(nextAnimation, now);
        animation.current = nextAnimation.current;
        return finished;
      } else if (previousAnimation) {
        const finished = previousAnimation.finished || previousAnimation.onFrame(previousAnimation, now);
        animation.current = previousAnimation.current;
        if (finished) {
          animation.previousAnimation = null;
        }
      }
      return false;
    }
    function onStart(animation, value, now, previousAnimation) {
      animation.startTime = now;
      animation.started = false;
      animation.current = value;
      if (previousAnimation === animation) {
        animation.previousAnimation = previousAnimation.previousAnimation;
      } else {
        animation.previousAnimation = previousAnimation;
      }

      // child animations inherit the setting, unless they already have it defined
      // they will have it defined only if the user used the `reduceMotion` prop
      if (nextAnimation.reduceMotion === undefined) {
        nextAnimation.reduceMotion = animation.reduceMotion;
      }
    }
    const callback = finished => {
      if (nextAnimation.callback) {
        nextAnimation.callback(finished);
      }
    };
    return {
      isHigherOrder: true,
      onFrame: delay,
      onStart,
      current: nextAnimation.current,
      callback,
      previousAnimation: null,
      startTime: 0,
      started: false,
      reduceMotion: getReduceMotionForAnimation(reduceMotion)
    };
  });
};
//# sourceMappingURL=delay.js.map