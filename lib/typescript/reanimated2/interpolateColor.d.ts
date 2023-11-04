import { Extrapolation } from './interpolation';
import type { SharedValue } from './commonTypes';
/**
 * @deprecated Please use Extrapolation instead
 */
export declare const Extrapolate: typeof Extrapolation;
export type InterpolationOptions = {
    gamma?: number;
    useCorrectedHSVInterpolation?: boolean;
};
export interface InterpolateRGB {
    r: number[];
    g: number[];
    b: number[];
    a: number[];
}
export interface InterpolateHSV {
    h: number[];
    s: number[];
    v: number[];
    a: number[];
}
export declare function interpolateColor(value: number, inputRange: readonly number[], outputRange: readonly string[], colorSpace?: 'RGB' | 'HSV', options?: InterpolationOptions): string;
export declare function interpolateColor(value: number, inputRange: readonly number[], outputRange: readonly number[], colorSpace?: 'RGB' | 'HSV', options?: InterpolationOptions): number;
export declare enum ColorSpace {
    RGB = 0,
    HSV = 1
}
export interface InterpolateConfig {
    inputRange: readonly number[];
    outputRange: readonly (string | number)[];
    colorSpace: ColorSpace;
    cache: SharedValue<InterpolateRGB | InterpolateHSV | null>;
    options: InterpolationOptions;
}
export declare function useInterpolateConfig(inputRange: readonly number[], outputRange: readonly (string | number)[], colorSpace?: ColorSpace, options?: InterpolationOptions): SharedValue<InterpolateConfig>;