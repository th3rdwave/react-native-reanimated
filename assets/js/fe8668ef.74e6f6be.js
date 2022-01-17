"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[9527],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return v}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),v=a,h=p["".concat(u,".").concat(v)]||p[v]||d[v]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6190:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i={id:"useEvent",title:"useEvent",sidebar_label:"useEvent"},l=void 0,u={unversionedId:"api/hooks/useEvent",id:"version-2.3.0/api/hooks/useEvent",isDocsHomePage:!1,title:"useEvent",description:"This is low-level hook returning event handler that will be invoked with native events, which should be used in order to create custom event handler hook like useAnimatedGestureHandler or useAnimatedScrollHandler.",source:"@site/versioned_docs/version-2.3.0/api/hooks/useEvent.md",sourceDirName:"api/hooks",slug:"/api/hooks/useEvent",permalink:"/react-native-reanimated/docs/api/hooks/useEvent",version:"2.3.0",frontMatter:{id:"useEvent",title:"useEvent",sidebar_label:"useEvent"},sidebar:"version-2.3.0/docs",previous:{title:"useHandler",permalink:"/react-native-reanimated/docs/api/hooks/useHandler"},next:{title:"withTiming",permalink:"/react-native-reanimated/docs/api/animations/withTiming"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],c={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is low-level hook returning event handler that will be invoked with native events, which should be used in order to create custom event handler hook like ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedGestureHandler")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedScrollHandler"),"."),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"handler-function"},(0,o.kt)("inlineCode",{parentName:"h4"},"handler")," ","[function]"),(0,o.kt)("p",null,"Handler will receive event object with native payload, that can be passed to custom handler hook's worklets."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event")," ","[object]"," - event object.\nThe payload can differ depending on the type of the event.")),(0,o.kt)("h4",{id:"eventnames-array"},(0,o.kt)("inlineCode",{parentName:"h4"},"eventNames")," ","[Array]"),(0,o.kt)("p",null,"Array of event names that will be handled by handler."),(0,o.kt)("h4",{id:"rebuilt-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"rebuilt")," ","[boolean]"),(0,o.kt)("p",null,"Value indicating whether handler shouldbe rebuilt."),(0,o.kt)("h3",{id:"returns"},"Returns"),(0,o.kt)("p",null,"The hook returns event handler that will be invoked when native event is dispatched."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function useAnimatedPagerScrollHandler(handlers, dependencies) {\n  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);\n\n  return useEvent(\n    (event) => {\n      'worklet';\n      const { onPageScroll } = handlers;\n\n      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {\n        onPageScroll(event, context);\n      }\n    },\n    ['onPageScroll'],\n    doDependenciesDiffer,\n  );\n")))}d.isMDXComponent=!0}}]);