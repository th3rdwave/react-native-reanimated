import { useRef } from 'react';
import WorkletEventHandler from '../WorkletEventHandler';

/**
 * Worklet to provide as an argument to `useEvent` hook.
 */

/**
 * Return type of `useEvent` hook.
 */

/**
 * Real return type of `useEvent` hook - only meant to be used internally.
 */

// @ts-expect-error This overload is required by our API.
// We don't know which properites of a component that is made into
// an AnimatedComponent are event handlers and we don't want to force the user to define it.
// Therefore we disguise `useEvent` return type as a simple function and we handle
// it being a React Ref in `createAnimatedComponent`.
export function useEvent(handler) {
  let eventNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let rebuild = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const initRef = useRef(null);
  if (initRef.current === null) {
    initRef.current = new WorkletEventHandler(handler, eventNames);
  } else if (rebuild) {
    initRef.current.updateWorklet(handler);
  }

  // We cast it since we don't want to expose initial null value outside.
  return initRef;
}
//# sourceMappingURL=useEvent.js.map