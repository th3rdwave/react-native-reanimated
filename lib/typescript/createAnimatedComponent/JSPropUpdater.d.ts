/// <reference types="react" />
import type { AnimatedComponentProps, IAnimatedComponentInternal, IJSPropUpdater, InitialComponentProps } from './commonTypes';
export declare class JSPropUpdater implements IJSPropUpdater {
    private static _tagToComponentMapping;
    private _reanimatedEventEmitter;
    private static _reanimatedModuleMock;
    private static _listener;
    constructor();
    addOnJSPropsChangeListener(animatedComponent: React.Component<AnimatedComponentProps<InitialComponentProps>> & IAnimatedComponentInternal): void;
    removeOnJSPropsChangeListener(animatedComponent: React.Component<AnimatedComponentProps<InitialComponentProps>> & IAnimatedComponentInternal): void;
}
