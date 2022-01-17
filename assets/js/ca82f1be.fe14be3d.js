"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[3517],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=s(n),y=r,f=p["".concat(c,".").concat(y)]||p[y]||l[y]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2794:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i={id:"layout_animations",title:"Layout Animations",sidebar_label:"Layout Animations"},u=void 0,c={unversionedId:"fundamentals/layout_animations",id:"version-2.3.0/fundamentals/layout_animations",isDocsHomePage:!1,title:"Layout Animations",description:"Layout Animation - the easiest way to animate entering/exiting/layout of your components.",source:"@site/versioned_docs/version-2.3.0/fundamentals/layout_animations.md",sourceDirName:"fundamentals",slug:"/fundamentals/layout_animations",permalink:"/react-native-reanimated/docs/fundamentals/layout_animations",version:"2.3.0",frontMatter:{id:"layout_animations",title:"Layout Animations",sidebar_label:"Layout Animations"},sidebar:"version-2.3.0/docs",previous:{title:"Custom Events",permalink:"/react-native-reanimated/docs/fundamentals/custom_events"},next:{title:"Architecture",permalink:"/react-native-reanimated/docs/fundamentals/architecture"}},s=[{value:"Read more about LayoutAnimation",id:"read-more-about-layoutanimation",children:[]}],m={toc:s};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"layout-animation---the-easiest-way-to-animate-enteringexitinglayout-of-your-components"},"Layout Animation - the easiest way to animate entering/exiting/layout of your components."),(0,o.kt)("p",null,"In React Native every component appears instantly whenever you add it to the component hierarchy. It's not something we are used to in the real world. Layout Animations are here to address the problem and help you animate an appearance of any view."),(0,o.kt)("p",null,"During unmounting of components from the hierarchy of views, it just disappears in the next frame. However you can beautify this process using Exiting Animations. Reanimated make a pretty animation of disappearing of component for you."),(0,o.kt)("h3",{id:"read-more-about-layoutanimation"},(0,o.kt)("a",{parentName:"h3",href:"./../api/LayoutAnimations/entryAnimations"},"Read more about LayoutAnimation")),(0,o.kt)("iframe",{width:"940px",height:"557px",src:"https://www.youtube.com/embed/6UXfS6FI674",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}l.isMDXComponent=!0}}]);