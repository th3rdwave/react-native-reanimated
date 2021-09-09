"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[1859],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8454:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i={id:"runOnUI",title:"runOnUI",sidebar_label:"runOnUI"},u=void 0,l={unversionedId:"api/miscellaneous/runOnUI",id:"version-2.3.0-alpha.1/api/miscellaneous/runOnUI",isDocsHomePage:!1,title:"runOnUI",description:"Enables executing worklet function on the UI thread. Note that UI execution is asynchronous from the caller\u2019s perspective. When you pass arguments, they will be copied to the UI JS context.",source:"@site/versioned_docs/version-2.3.0-alpha.1/api/miscellaneous/runOnUI.md",sourceDirName:"api/miscellaneous",slug:"/api/miscellaneous/runOnUI",permalink:"/react-native-reanimated/docs/2.3.0-alpha.1/api/miscellaneous/runOnUI",version:"2.3.0-alpha.1",frontMatter:{id:"runOnUI",title:"runOnUI",sidebar_label:"runOnUI"},sidebar:"version-2.3.0-alpha.1/docs",previous:{title:"runOnJS",permalink:"/react-native-reanimated/docs/2.3.0-alpha.1/api/miscellaneous/runOnJS"},next:{title:"Interpolate",permalink:"/react-native-reanimated/docs/2.3.0-alpha.1/api/miscellaneous/interpolate"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Enables executing worklet function on the UI thread. Note that UI execution is asynchronous from the caller\u2019s perspective. When you pass arguments, they will be copied to the UI JS context."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"fn-function"},(0,a.kt)("inlineCode",{parentName:"h4"},"fn")," ","[function]"),(0,a.kt)("p",null,"The first and the only argument is a worklet function that is supposed to be run."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"runOnUI")," returns a function which will be executed on UI thread."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{12}","{12}":!0},"import { runOnUI } from 'react-native-reanimated';\nimport { View, Button } from 'react-native';\nimport React from 'react';\n\nexport default function App() {\n\n    const someWorklet = (greeting) => {\n        'worklet';\n        console.log(greeting, 'From the UI thread');\n    }\n\n    const onPress = () => {\n        runOnUI(someWorklet)('Howdy');\n    }\n\n  return (\n    <View>\n      <Button\n        title=\"toggle\"\n        onPress={onPress}\n      />\n    </View>\n  );\n}\n")))}p.isMDXComponent=!0}}]);