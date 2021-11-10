"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[742],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=r.createContext({}),u=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(f.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,f=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),p=o,m=s["".concat(f,".").concat(p)]||s[p]||l[p]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},84457:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return u},default:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a={},c=void 0,f={unversionedId:"nodes/diff",id:"version-1.x.x/nodes/diff",isDocsHomePage:!1,title:"diff",description:"diff",source:"@site/versioned_docs/version-1.x.x/nodes/diff.md",sourceDirName:"nodes",slug:"/nodes/diff",permalink:"/react-native-reanimated/docs/1.x.x/nodes/diff",version:"1.x.x",frontMatter:{},sidebar:"version-1.x.x/docs",previous:{title:"defined",permalink:"/react-native-reanimated/docs/1.x.x/nodes/defined"},next:{title:"diffClamp",permalink:"/react-native-reanimated/docs/1.x.x/nodes/diffClamp"}},u=[{value:"<code>diff</code>",id:"diff",children:[]}],d={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"diff"},(0,i.kt)("inlineCode",{parentName:"h2"},"diff")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"diff(node);\n")),(0,i.kt)("p",null,"Evaluates node and returns a difference between value returned at the last time it was evaluated and its value at the current time. When evaluating for the first time it returns the node's value."))}l.isMDXComponent=!0}}]);