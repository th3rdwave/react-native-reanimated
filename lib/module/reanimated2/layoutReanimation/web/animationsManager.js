'use strict';

import { Animations } from './config';
import { LayoutAnimationType } from '../animationBuilder/commonTypes';
import { createAnimationWithExistingTransform } from './createAnimation';
import { extractTransformFromStyle, getProcessedConfig, handleEnteringAnimation, handleExitingAnimation, handleLayoutTransition, makeElementVisible } from './componentUtils';
import { areDOMRectsEqual } from './domUtils';
function chooseConfig(animationType, props) {
  const config = animationType === LayoutAnimationType.ENTERING ? props.entering : animationType === LayoutAnimationType.EXITING ? props.exiting : animationType === LayoutAnimationType.LAYOUT ? props.layout : null;
  return config;
}
function checkUndefinedAnimationFail(initialAnimationName, isLayoutTransition, hasEnteringAnimation, element) {
  // This prevents crashes if we try to set animations that are not defined.
  // We don't care about layout transitions since they're created dynamically
  if (initialAnimationName in Animations || isLayoutTransition) {
    return false;
  }
  if (hasEnteringAnimation) {
    makeElementVisible(element);
  }
  console.warn("[Reanimated] Couldn't load entering/exiting animation. Current version supports only predefined animations with modifiers: duration, delay, easing, randomizeDelay, wtihCallback, reducedMotion.");
  return true;
}
function checkReduceMotionFail(animationConfig, hasEnteringAnimation, element) {
  if (!animationConfig.reduceMotion) {
    return false;
  }
  if (hasEnteringAnimation) {
    makeElementVisible(element);
  }
  return true;
}
function chooseAction(animationType, animationConfig, element, transitionData, transform) {
  switch (animationType) {
    case LayoutAnimationType.ENTERING:
      handleEnteringAnimation(element, animationConfig);
      break;
    case LayoutAnimationType.LAYOUT:
      transitionData.reversed = animationConfig.reversed;
      handleLayoutTransition(element, animationConfig, transitionData, transform);
      break;
    case LayoutAnimationType.EXITING:
      handleExitingAnimation(element, animationConfig);
      break;
  }
}
export function startWebLayoutAnimation(props, element, animationType, transitionData) {
  const config = chooseConfig(animationType, props);
  if (!config) {
    return;
  }
  const hasEnteringAnimation = props.entering !== undefined;
  const isLayoutTransition = animationType === LayoutAnimationType.LAYOUT;
  const initialAnimationName = typeof config === 'function' ? config.name : config.constructor.name;
  const shouldFail = checkUndefinedAnimationFail(initialAnimationName, isLayoutTransition, hasEnteringAnimation, element);
  if (shouldFail) {
    return;
  }
  const transform = extractTransformFromStyle(props.style);
  const animationName = transform ? createAnimationWithExistingTransform(initialAnimationName, transform) : initialAnimationName;
  const animationConfig = getProcessedConfig(animationName, config, isLayoutTransition, initialAnimationName);
  if (checkReduceMotionFail(animationConfig, hasEnteringAnimation, element)) {
    return;
  }
  chooseAction(animationType, animationConfig, element, transitionData, transform);
}
export function tryActivateLayoutTransition(props, element, snapshot) {
  if (!props.layout) {
    return;
  }
  const rect = element.getBoundingClientRect();
  if (areDOMRectsEqual(rect, snapshot)) {
    return;
  }
  const transitionData = {
    translateX: snapshot.x - rect.x,
    translateY: snapshot.y - rect.y,
    scaleX: snapshot.width / rect.width,
    scaleY: snapshot.height / rect.height,
    reversed: false // This field is used only in `SequencedTransition`, so by default it will be false
  };

  startWebLayoutAnimation(props, element, LayoutAnimationType.LAYOUT, transitionData);
}
//# sourceMappingURL=animationsManager.js.map