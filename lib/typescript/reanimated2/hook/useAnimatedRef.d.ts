import type { Component } from 'react';
import type { AnimatedRef } from './commonTypes';
interface MaybeScrollableComponent extends Component {
    getNativeScrollRef?: any;
    getScrollableNode?: any;
    viewConfig?: {
        uiViewClassName?: string;
    };
}
export declare function useAnimatedRef<TComponent extends MaybeScrollableComponent>(): AnimatedRef<TComponent>;
export {};
