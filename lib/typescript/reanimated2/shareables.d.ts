import type { ShareableRef, FlatShareableRef } from './commonTypes';
export declare function registerShareableMapping(shareable: any, shareableRef?: ShareableRef<unknown>): void;
export declare function makeShareableCloneRecursive<T>(value: any, shouldPersistRemote?: boolean, depth?: number): ShareableRef<T>;
export declare function makeShareableCloneOnUIRecursive<T>(value: T): FlatShareableRef<T>;
export declare function makeShareable<T>(value: T): T;