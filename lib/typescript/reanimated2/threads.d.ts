import type { WorkletFunction } from './commonTypes';
export declare function setupMicrotasks(): void;
export declare const callMicrotasks: () => void;
export declare function runOnUI<Args extends unknown[], ReturnValue>(worklet: (...args: Args) => ReturnValue): (...args: Args) => void;
export declare function runOnUIImmediately<Args extends unknown[], ReturnValue>(worklet: (...args: Args) => ReturnValue): WorkletFunction<Args, ReturnValue>;
type ReleaseRemoteFunction<Args extends unknown[], ReturnValue> = {
    (...args: Args): ReturnValue;
};
type DevRemoteFunction<Args extends unknown[], ReturnValue> = {
    __remoteFunction: (...args: Args) => ReturnValue;
};
type RemoteFunction<Args extends unknown[], ReturnValue> = ReleaseRemoteFunction<Args, ReturnValue> | DevRemoteFunction<Args, ReturnValue>;
/**
 * Returns a function that can be called to be executed asynchronously on both
 * UI and JS threads.
 */
export declare function runOnJS<Args extends unknown[], ReturnValue>(fun: ((...args: Args) => ReturnValue) | RemoteFunction<Args, ReturnValue> | WorkletFunction<Args, ReturnValue>): (...args: Args) => void;
export {};
