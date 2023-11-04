'use strict';

import { useAnimatedStyle } from './useAnimatedStyle';
import { shouldBeUseWeb } from '../PlatformChecker';

// TODO: we should make sure that when useAP is used we are not assigning styles
// when you need styles to animated you should always use useAS
// TODO TYPESCRIPT This is a temporary cast to get rid of .d.ts file.

export let useAnimatedProps;
if (shouldBeUseWeb()) {
  useAnimatedProps = function (updater, deps, adapters) {
    return useAnimatedStyle(updater, deps, adapters, true);
  };
} else {
  useAnimatedProps = useAnimatedStyle;
}
//# sourceMappingURL=useAnimatedProps.js.map