(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(346)),o={id:"measure",title:"measure",sidebar_label:"measure"},s={unversionedId:"api/nativeMethods/measure",id:"version-2.2.0/api/nativeMethods/measure",isDocsHomePage:!1,title:"measure",description:"Determines the location on screen, width, and height of the given view. Note that these measurements are not available until after the rendering has been completed in native. If you need the measurements as soon as possible, consider using onLayout instead.",source:"@site/versioned_docs/version-2.2.0/api/nativeMethods/measure.md",slug:"/api/nativeMethods/measure",permalink:"/react-native-reanimated/docs/2.2.0/api/nativeMethods/measure",version:"2.2.0",sidebar_label:"measure",sidebar:"version-2.2.0/docs",previous:{title:"withRepeat",permalink:"/react-native-reanimated/docs/2.2.0/api/withRepeat"},next:{title:"scrollTo",permalink:"/react-native-reanimated/docs/2.2.0/api/nativeMethods/scrollTo"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]},{value:"Note",id:"note",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Determines the location on screen, width, and height of the given view. Note that these measurements are not available until after the rendering has been completed in native. If you need the measurements as soon as possible, consider using ",Object(i.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#onlayout"},Object(i.b)("inlineCode",{parentName:"a"},"onLayout"))," instead."),Object(i.b)("p",null,"This function is implemented on native platforms only. On the web, it's sufficient to use a standard version of the ",Object(i.b)("inlineCode",{parentName:"p"},"measure")," which is available on most of the default components provided by React Native(it's ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/65975dd28de0a7b8b8c4eef6479bf7eee5fcfb93/Libraries/Renderer/shims/ReactNativeTypes.js#L105"},"here"),"). In such a case it should be invoked in the following way(note it's asynchronous so if you want to make it synchronous you should use ",Object(i.b)("inlineCode",{parentName:"p"},"Promise"),"):"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"const aref = useAnimatedRef();\nnew Promise((resolve, reject) => {\n  if (aref && aref.current) {\n    aref.current.measure((x, y, width, height, pageX, pageY) => {\n      resolve({ x, y, width, height, pageX, pageY });\n    });\n  } else {\n    reject(new Error('measure: animated ref not ready'));\n  }\n});\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"animatedref"},"animatedRef"),Object(i.b)("p",null,"The product of ",Object(i.b)("a",{parentName:"p",href:"../useAnimatedRef"},Object(i.b)("inlineCode",{parentName:"a"},"useAnimatedRef"))," which is a Reanimated's extension of a standard React's ref(delivers view tag on the UI thread)."),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"Object which contains following fields"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"x")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"y")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"width")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"height")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pageX")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pageY"))),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const Comp = () => {\n  const aref = useAnimatedRef();\n\n  useDerivedValue(() => {\n    const measured = measure(aref);\n    // ...\n  });\n\n  return <View ref={aref} />;\n};\n")),Object(i.b)("h3",{id:"note"},"Note"),Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"measure()")," only on rendered components. Good practice is to wrap function call with ",Object(i.b)("inlineCode",{parentName:"p"},"try{} catch{}")," if there is a possibility to call function on item which is not rendered, for example: invisible item on screen from FlatList."))}u.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);