"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[5719],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7418:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o={id:"withDelay",title:"withDelay",sidebar_label:"withDelay"},l=void 0,c={unversionedId:"api/withDelay",id:"version-2.2.0/api/withDelay",isDocsHomePage:!1,title:"withDelay",description:"Allows for the provided animation to start with a specified delay.",source:"@site/versioned_docs/version-2.2.0/api/withDelay.md",sourceDirName:"api",slug:"/api/withDelay",permalink:"/react-native-reanimated/docs/2.2.0/api/withDelay",version:"2.2.0",frontMatter:{id:"withDelay",title:"withDelay",sidebar_label:"withDelay"},sidebar:"version-2.2.0/docs",previous:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/2.2.0/api/cancelAnimation"},next:{title:"withSequence",permalink:"/react-native-reanimated/docs/2.2.0/api/withSequence"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Allows for the provided animation to start with a specified delay."),(0,i.kt)("p",null,"In case the value for which we are starting the delayed animation is running a previous animation, that animation won't be cancelled until the new animation starts after the delay.\nIf you want the animation to cancel immediately, use ",(0,i.kt)("a",{parentName:"p",href:"cancelAnimation"},(0,i.kt)("inlineCode",{parentName:"a"},"cancelAnimation"))," method."),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"delayms-number"},(0,i.kt)("inlineCode",{parentName:"h4"},"delayMS")," ","[number]"),(0,i.kt)("p",null,"Delay in milliseconds after which we want the provided animation to start."),(0,i.kt)("h4",{id:"delayedanimation-animation"},(0,i.kt)("inlineCode",{parentName:"h4"},"delayedAnimation")," ","[animation]"),(0,i.kt)("p",null,"The animation that will be started after the delay."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,i.kt)("a",{parentName:"p",href:"useAnimatedStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Timing animation will start on the ",(0,i.kt)("inlineCode",{parentName:"p"},"sharedValue")," after one second."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"sharedValue.value = withDelay(1000, withTiming(70));\n")))}s.isMDXComponent=!0}}]);