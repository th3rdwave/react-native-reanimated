/// <reference types="react" />
import type { IAnimatedComponentInternal, IPropsFilter } from './commonTypes';
export declare class PropsFilter implements IPropsFilter {
    private _initialStyle;
    private _isFirstRender;
    filterNonAnimatedProps(component: React.Component<unknown, unknown> & IAnimatedComponentInternal): Record<string, unknown>;
    onRender(): void;
}
