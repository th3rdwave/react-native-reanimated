import { Component } from 'react';
import type { FlatListProps } from 'react-native';
import { FlatList } from 'react-native';
import type { ILayoutAnimationBuilder } from '../layoutReanimation/animationBuilder/commonTypes';
import type { AnimateProps } from '../helperTypes';
interface ReanimatedFlatListPropsWithLayout<T> extends FlatListProps<T> {
    itemLayoutAnimation?: ILayoutAnimationBuilder;
    skipEnteringExitingAnimations?: boolean;
}
export type FlatListPropsWithLayout<T> = ReanimatedFlatListPropsWithLayout<T>;
declare class ReanimatedFlatListClass<T> extends Component<AnimateProps<ReanimatedFlatListPropsWithLayout<T>>> {
    getNode(): FlatList;
}
export declare const ReanimatedFlatList: ReanimatedFlatList<any>;
export type ReanimatedFlatList<T> = typeof ReanimatedFlatListClass<T> & FlatList<T>;
export {};