import type { ShareableRef, ShareableSyncDataHolderRef, Value3D, ValueRotation } from '../commonTypes';
import { SensorType } from '../commonTypes';
import type { WorkletRuntime } from '../runtimes';
import type { WebSensor } from './WebSensor';
export default class JSReanimated {
    nextSensorId: number;
    sensors: Map<number, WebSensor>;
    platform?: Platform;
    makeShareableClone<T>(): ShareableRef<T>;
    scheduleOnUI<T>(worklet: ShareableRef<T>): void;
    createWorkletRuntime(_name: string, _initializer: ShareableRef<() => void>): WorkletRuntime;
    registerEventHandler<T>(_eventHandler: ShareableRef<T>, _eventName: string, _emitterReactTag: number): number;
    unregisterEventHandler(_: number): void;
    enableLayoutAnimations(): void;
    configureLayoutAnimation(): void;
    setShouldAnimateExitingForTag(): void;
    registerSensor(sensorType: SensorType, interval: number, _iosReferenceFrame: number, eventHandler: ShareableRef<(data: Value3D | ValueRotation) => void>): number;
    getSensorCallback: (sensor: WebSensor, sensorType: SensorType, eventHandler: ShareableRef<(data: Value3D | ValueRotation) => void>) => () => void;
    unregisterSensor(id: number): void;
    subscribeForKeyboardEvents(_: ShareableRef<number>): number;
    unsubscribeFromKeyboardEvents(_: number): void;
    initializeSensor(sensorType: SensorType, interval: number): WebSensor;
    getSensorName(sensorType: SensorType): string;
    detectPlatform(): void;
    makeSynchronizedDataHolder<T>(_valueRef: ShareableRef<T>): ShareableSyncDataHolderRef<T>;
    getDataSynchronously<T>(_ref: ShareableSyncDataHolderRef<T>): T;
    getViewProp<T>(_viewTag: number, _propName: string, _callback?: (result: T) => void): Promise<T>;
    configureProps(): void;
}
declare enum Platform {
    WEB_IOS = "web iOS",
    WEB_ANDROID = "web Android",
    WEB = "web",
    UNKNOWN = "unknown"
}
declare global {
    interface Navigator {
        userAgent?: string;
        vendor?: string;
    }
}
export {};