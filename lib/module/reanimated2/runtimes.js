'use strict';

import { setupCallGuard, setupConsole } from './initializers';
import NativeReanimatedModule from './NativeReanimated';
import { makeShareableCloneRecursive } from './shareables';
export function createWorkletRuntime(name, initializer) {
  return NativeReanimatedModule.createWorkletRuntime(name, makeShareableCloneRecursive(() => {
    'worklet';

    setupCallGuard();
    setupConsole();
    initializer === null || initializer === void 0 ? void 0 : initializer();
  }));
}
//# sourceMappingURL=runtimes.js.map