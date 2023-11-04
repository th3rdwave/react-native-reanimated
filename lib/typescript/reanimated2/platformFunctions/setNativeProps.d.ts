import type { StyleProps } from '../commonTypes';
import type { AnimatedRef } from '../hook/commonTypes';
import type { Component } from 'react';
export declare let setNativeProps: <T extends Component>(animatedRef: AnimatedRef<T>, updates: StyleProps) => void;