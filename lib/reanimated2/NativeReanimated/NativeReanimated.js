import { NativeModules } from 'react-native';
export class NativeReanimated {
    constructor(native = true) {
        if (global.__reanimatedModuleProxy === undefined) {
            const { ReanimatedModule } = NativeModules;
            ReanimatedModule === null || ReanimatedModule === void 0 ? void 0 : ReanimatedModule.installTurboModule();
        }
        this.InnerNativeModule = global.__reanimatedModuleProxy;
        this.native = native;
    }
    installCoreFunctions(valueSetter) {
        return this.InnerNativeModule.installCoreFunctions(valueSetter);
    }
    makeShareable(value) {
        return this.InnerNativeModule.makeShareable(value);
    }
    makeMutable(value) {
        return this.InnerNativeModule.makeMutable(value);
    }
    makeRemote(object = {}) {
        return this.InnerNativeModule.makeRemote(object);
    }
    startMapper(mapper, inputs = [], outputs = [], updater, viewDescriptors) {
        return this.InnerNativeModule.startMapper(mapper, inputs, outputs, updater, viewDescriptors);
    }
    stopMapper(mapperId) {
        return this.InnerNativeModule.stopMapper(mapperId);
    }
    registerEventHandler(eventHash, eventHandler) {
        return this.InnerNativeModule.registerEventHandler(eventHash, eventHandler);
    }
    unregisterEventHandler(id) {
        return this.InnerNativeModule.unregisterEventHandler(id);
    }
    getViewProp(viewTag, propName, callback) {
        return this.InnerNativeModule.getViewProp(viewTag, propName, callback);
    }
    enableLayoutAnimations(flag) {
        this.InnerNativeModule.enableLayoutAnimations(flag);
    }
}
