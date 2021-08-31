"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[5489],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3292:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o={id:"measure",title:"measure",sidebar_label:"measure"},s=void 0,l={unversionedId:"api/nativeMethods/measure",id:"version-2.3.0-alpha.2/api/nativeMethods/measure",isDocsHomePage:!1,title:"measure",description:"Determines the location on screen, width, and height of the given view. Note that these measurements are not available until after the rendering has been completed in native. If you need the measurements as soon as possible, consider using onLayout instead.",source:"@site/versioned_docs/version-2.3.0-alpha.2/api/nativeMethods/measure.md",sourceDirName:"api/nativeMethods",slug:"/api/nativeMethods/measure",permalink:"/react-native-reanimated/docs/2.3.0-alpha.2/api/nativeMethods/measure",version:"2.3.0-alpha.2",frontMatter:{id:"measure",title:"measure",sidebar_label:"measure"},sidebar:"version-2.3.0-alpha.1/docs",previous:{title:"withRepeat",permalink:"/react-native-reanimated/docs/2.3.0-alpha.2/api/withRepeat"},next:{title:"scrollTo",permalink:"/react-native-reanimated/docs/2.3.0-alpha.2/api/nativeMethods/scrollTo"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]},{value:"Note",id:"note",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Determines the location on screen, width, and height of the given view. Note that these measurements are not available until after the rendering has been completed in native. If you need the measurements as soon as possible, consider using ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#onlayout"},(0,i.kt)("inlineCode",{parentName:"a"},"onLayout"))," instead."),(0,i.kt)("p",null,"This function is implemented on native platforms only. On the web, it's sufficient to use a standard version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"measure")," which is available on most of the default components provided by React Native(it's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/65975dd28de0a7b8b8c4eef6479bf7eee5fcfb93/Libraries/Renderer/shims/ReactNativeTypes.js#L105"},"here"),"). In such a case it should be invoked in the following way(note it's asynchronous so if you want to make it synchronous you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const aref = useAnimatedRef();\nnew Promise((resolve, reject) => {\n  if (aref && aref.current) {\n    aref.current.measure((x, y, width, height, pageX, pageY) => {\n      resolve({ x, y, width, height, pageX, pageY });\n    });\n  } else {\n    reject(new Error('measure: animated ref not ready'));\n  }\n});\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"animatedref"},"animatedRef"),(0,i.kt)("p",null,"The product of ",(0,i.kt)("a",{parentName:"p",href:"../useAnimatedRef"},(0,i.kt)("inlineCode",{parentName:"a"},"useAnimatedRef"))," which is a Reanimated's extension of a standard React's ref(delivers view tag on the UI thread)."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"Object which contains following fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"width")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"height")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageX")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pageY"))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef();\n\n  useDerivedValue(() => {\n    const measured = measure(aref);\n    // ...\n  });\n\n  return <View ref={aref} />;\n};\n")),(0,i.kt)("h3",{id:"note"},"Note"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"measure()")," only on rendered components. Good practice is to wrap function call with ",(0,i.kt)("inlineCode",{parentName:"p"},"try{} catch{}")," if there is a possibility to call function on item which is not rendered, for example: invisible item on screen from FlatList."))}p.isMDXComponent=!0}}]);