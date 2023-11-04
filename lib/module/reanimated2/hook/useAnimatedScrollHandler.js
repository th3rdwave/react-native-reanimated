'use strict';

import { useHandler } from './useHandler';
import { useEvent } from './useEvent';

// @ts-expect-error This overload is required by our API.

export function useAnimatedScrollHandler(handlers, dependencies) {
  // case when handlers is a function
  const scrollHandlers = typeof handlers === 'function' ? {
    onScroll: handlers
  } : handlers;
  const {
    context,
    doDependenciesDiffer
  } = useHandler(scrollHandlers, dependencies);

  // build event subscription array
  const subscribeForEvents = ['onScroll'];
  if (scrollHandlers.onBeginDrag !== undefined) {
    subscribeForEvents.push('onScrollBeginDrag');
  }
  if (scrollHandlers.onEndDrag !== undefined) {
    subscribeForEvents.push('onScrollEndDrag');
  }
  if (scrollHandlers.onMomentumBegin !== undefined) {
    subscribeForEvents.push('onMomentumScrollBegin');
  }
  if (scrollHandlers.onMomentumEnd !== undefined) {
    subscribeForEvents.push('onMomentumScrollEnd');
  }
  return useEvent(event => {
    'worklet';

    const {
      onScroll,
      onBeginDrag,
      onEndDrag,
      onMomentumBegin,
      onMomentumEnd
    } = scrollHandlers;
    if (onScroll && event.eventName.endsWith('onScroll')) {
      onScroll(event, context);
    } else if (onBeginDrag && event.eventName.endsWith('onScrollBeginDrag')) {
      onBeginDrag(event, context);
    } else if (onEndDrag && event.eventName.endsWith('onScrollEndDrag')) {
      onEndDrag(event, context);
    } else if (onMomentumBegin && event.eventName.endsWith('onMomentumScrollBegin')) {
      onMomentumBegin(event, context);
    } else if (onMomentumEnd && event.eventName.endsWith('onMomentumScrollEnd')) {
      onMomentumEnd(event, context);
    }
  }, subscribeForEvents, doDependenciesDiffer
  // Read https://github.com/software-mansion/react-native-reanimated/pull/5056
  // for more information about this cast.
  );
}
//# sourceMappingURL=useAnimatedScrollHandler.js.map