import type { ViewStyle, TextStyle } from 'react-native';
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;
export interface StyleProps extends ViewStyle, TextStyle {
    originX?: number;
    originY?: number;
    [key: string]: any;
}
export interface SharedValue<Value> {
    value: Value;
    addListener: (listenerID: number, listener: (value: any) => void) => void;
    removeListener: (listenerID: number) => void;
    modify: (modifier?: (value: any) => any) => void;
}
export type ShareableRef<T> = {
    __hostObjectShareableJSRef: T;
};
export type FlatShareableRef<T> = T extends ShareableRef<infer U> ? ShareableRef<U> : ShareableRef<T>;
export type ShareableSyncDataHolderRef<T> = {
    __hostObjectShareableJSRefSyncDataHolder: T;
};
export type MapperRegistry = {
    start: (mapperID: number, worklet: () => void, inputs: SharedValue<any>[], outputs?: SharedValue<any>[]) => void;
    stop: (mapperID: number) => void;
};
type WorkletClosure = Record<string, unknown>;
interface WorkletInitDataCommon {
    code: string;
}
type WorkletInitDataRelease = WorkletInitDataCommon;
interface WorkletInitDataDev extends WorkletInitDataCommon {
    location: string;
    sourceMap: string;
    version: string;
}
interface WorkletBaseCommon {
    __closure: WorkletClosure;
    __workletHash: number;
}
interface WorkletBaseRelease extends WorkletBaseCommon {
    __initData: WorkletInitDataRelease;
}
interface WorkletBaseDev extends WorkletBaseCommon {
    __initData: WorkletInitDataDev;
    __stackDetails: Error;
}
export type WorkletFunction<Args extends unknown[] = unknown[], ReturnValue = unknown> = ((...args: Args) => ReturnValue) & (WorkletBaseRelease | WorkletBaseDev);
export interface NestedObject<T> {
    [key: string]: NestedObjectValues<T>;
}
export type NestedObjectValues<T> = T | Array<NestedObjectValues<T>> | NestedObject<T>;
type Animatable = number | string | Array<number>;
export type AnimatableValueObject = {
    [key: string]: Animatable;
};
export type AnimatableValue = Animatable | AnimatableValueObject;
export interface AnimationObject {
    [key: string]: any;
    callback?: AnimationCallback;
    current?: AnimatableValue;
    toValue?: AnimationObject['current'];
    startValue?: AnimationObject['current'];
    finished?: boolean;
    strippedCurrent?: number;
    cancelled?: boolean;
    reduceMotion?: boolean;
    __prefix?: string;
    __suffix?: string;
    onFrame: (animation: any, timestamp: Timestamp) => boolean;
    onStart: (nextAnimation: any, current: any, timestamp: Timestamp, previousAnimation: any) => void;
}
export interface Animation<T extends AnimationObject> extends AnimationObject {
    onFrame: (animation: T, timestamp: Timestamp) => boolean;
    onStart: (nextAnimation: T, current: AnimatableValue, timestamp: Timestamp, previousAnimation: Animation<any> | null | T) => void;
}
export declare enum SensorType {
    ACCELEROMETER = 1,
    GYROSCOPE = 2,
    GRAVITY = 3,
    MAGNETIC_FIELD = 4,
    ROTATION = 5
}
export declare enum IOSReferenceFrame {
    XArbitraryZVertical = 0,
    XArbitraryCorrectedZVertical = 1,
    XMagneticNorthZVertical = 2,
    XTrueNorthZVertical = 3,
    Auto = 4
}
export type SensorConfig = {
    interval: number | 'auto';
    adjustToInterfaceOrientation: boolean;
    iosReferenceFrame: IOSReferenceFrame;
};
export type AnimatedSensor<T extends Value3D | ValueRotation> = {
    sensor: SharedValue<T>;
    unregister: () => void;
    isAvailable: boolean;
    config: SensorConfig;
};
export type AnimationCallback = (finished?: boolean, current?: AnimatableValue) => void;
export type Timestamp = number;
export type Value3D = {
    x: number;
    y: number;
    z: number;
    interfaceOrientation: InterfaceOrientation;
};
export type ValueRotation = {
    qw: number;
    qx: number;
    qy: number;
    qz: number;
    yaw: number;
    pitch: number;
    roll: number;
    interfaceOrientation: InterfaceOrientation;
};
export declare enum InterfaceOrientation {
    ROTATION_0 = 0,
    ROTATION_90 = 90,
    ROTATION_180 = 180,
    ROTATION_270 = 270
}
export type ShadowNodeWrapper = {
    __hostObjectShadowNodeWrapper: never;
};
export declare enum KeyboardState {
    UNKNOWN = 0,
    OPENING = 1,
    OPEN = 2,
    CLOSING = 3,
    CLOSED = 4
}
export type AnimatedKeyboardInfo = {
    height: SharedValue<number>;
    state: SharedValue<KeyboardState>;
};
export interface MeasuredDimensions {
    x: number;
    y: number;
    width: number;
    height: number;
    pageX: number;
    pageY: number;
}
export interface AnimatedKeyboardOptions {
    isStatusBarTranslucentAndroid?: boolean;
}
/**
 * - `System` - If the `Reduce motion` accessibility setting is enabled on the device, disable the animation. Otherwise, enable the animation.
 * - `Always` - Disable the animation.
 * - `Never` - Enable the animation.
 */
export declare enum ReduceMotion {
    System = "system",
    Always = "always",
    Never = "never"
}
/**
 * @deprecated
 */
export interface __WorkletFunction {
    __closure?: Record<string, unknown>;
    __workletHash?: number;
}
/**
 * @deprecated
 */
export interface __BasicWorkletFunction<T> extends __WorkletFunction {
    (): T;
}
/**
 * @deprecated
 */
export interface __ComplexWorkletFunction<A extends any[], R> extends __WorkletFunction {
    (...args: A): R;
    __remoteFunction?: (...args: A) => R;
}
/**
 * @deprecated
 */
export interface __AdapterWorkletFunction extends __WorkletFunction {
    (value: NestedObject<string | number | AnimationObject>): void;
}
export {};
