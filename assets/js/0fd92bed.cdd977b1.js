"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[5871],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return p}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),d=l(t),p=i,y=d["".concat(s,".").concat(p)]||d[p]||c[p]||o;return t?a.createElement(y,r(r({ref:n},m),{},{components:t})):a.createElement(y,r({ref:n},m))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,r[1]=u;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2758:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r={id:"animatedLayout",title:"<AnimatedLayout>",sidebar_label:"<AnimatedLayout>"},u=void 0,s={unversionedId:"api/LayoutAnimations/animatedLayout",id:"version-2.3.0-alpha.3/api/LayoutAnimations/animatedLayout",isDocsHomePage:!1,title:"<AnimatedLayout>",description:"The AnimatedLayout component is responsible for observing changes in its subtree AnimatedLayout. You can treat it as a View component because it takes the same set of properties. The component is essential for entering and exiting animations as well as layout transitions and each animated component that wants to make use of any layout animation has to be placed under an AnimatedLayout component. There are two important notes about this component that you should keep in mind:",source:"@site/versioned_docs/version-2.3.0-alpha.3/api/LayoutAnimations/AnimatedLayout.md",sourceDirName:"api/LayoutAnimations",slug:"/api/LayoutAnimations/animatedLayout",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/animatedLayout",version:"2.3.0-alpha.3",frontMatter:{id:"animatedLayout",title:"<AnimatedLayout>",sidebar_label:"<AnimatedLayout>"},sidebar:"version-2.3.0-alpha.3/docs",previous:{title:"scrollTo",permalink:"/react-native-reanimated/docs/api/nativeMethods/scrollTo"},next:{title:"Custom Animations",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/customAnimations"}},l=[{value:"Example",id:"example",children:[]}],m={toc:l};function c(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimatedLayout")," component is responsible for observing changes in its subtree ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimatedLayout"),". You can treat it as a ",(0,o.kt)("inlineCode",{parentName:"p"},"View")," component because it takes the same set of properties. The component is essential for entering and exiting animations as well as layout transitions and each animated component that wants to make use of any layout animation has to be placed under an ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimatedLayout")," component. There are two important notes about this component that you should keep in mind: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It will manage all its descendants' animations even if it's mounting and unmounting by itself."),(0,o.kt)("li",{parentName:"ul"},"There is no need to nest one ",(0,o.kt)("inlineCode",{parentName:"li"},"AnimatedLayout")," in another one because the higher one would already watch the subtree of the lower one. ")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"AnimatedLayout")," as regular React component and his children can use by transitions and mounting/unmounting animations."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    import { AnimatedLayout } from 'react-native-reanimated';\n    \n    function CustomFunctionComponent() {\n\n        return (\n            <AnimatedLayout>\n                // watched subtree\n            </AnimatedLayout>\n        );\n    }\n")),(0,o.kt)("p",null,"More advanced example with SWM's logo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    import { \n        AnimatedLayout,\n        SlideInRight,\n        SlideOutLeft,\n        SlideInDown,\n        SlideOutUp,\n        SlideInLeft,\n        SlideOutRight,\n        OpacityIn,\n        OpacityOut,\n    } from 'react-native-reanimated';\n    \n    const AnimatedText = Animated.createAnimatedComponent(Text);\n    \u200b\n    function SWMLogo() {\n    \u200b\n        return (\n            <AnimatedLayout>\n                <Animated.View \n                    entering={SlideInRight.delay(300)} \n                    exiting={SlideOutLeft.delay(300)} \n                    style={styles.left} \n                />\n                <Animated.View \n                    entering={SlideInDown} \n                    exiting={SlideOutUp} \n                    style={styles.top} \n                />\n                <Animated.View \n                    entering={SlideInLeft} \n                    exiting={SlideOutRight} \n                    style={styles.animatedView} \n                >\n                    <AnimatedText \n                        entering={OpacityIn.delay(600).duration(3000)} \n                        exiting={OpacityOut.duration(3000)}\n                    > \n                        SWM \n                    </AnimatedText>\n                </Animated.View>\n            </AnimatedLayout>\n        );\n    }\n")),(0,o.kt)("p",null,"See results:"),(0,o.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120326638-39ee0200-c2e9-11eb-8dca-3f3b999c5017.mov",controls:"controls",muted:"muted"}))}c.isMDXComponent=!0}}]);