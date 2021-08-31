"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[9099],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,g=s["".concat(u,".").concat(d)]||s[d]||c[d]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8638:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l={id:"withTiming",title:"withTiming",sidebar_label:"withTiming"},o=void 0,u={unversionedId:"api/withTiming",id:"api/withTiming",isDocsHomePage:!1,title:"withTiming",description:"Starts a time based animation.",source:"@site/docs/api/withTiming.md",sourceDirName:"api",slug:"/api/withTiming",permalink:"/react-native-reanimated/docs/next/api/withTiming",version:"current",frontMatter:{id:"withTiming",title:"withTiming",sidebar_label:"withTiming"},sidebar:"docs",previous:{title:"useEvent",permalink:"/react-native-reanimated/docs/next/api/useEvent"},next:{title:"withSpring",permalink:"/react-native-reanimated/docs/next/api/withSpring"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Starts a time based animation."),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"tovalue-number--string"},(0,i.kt)("inlineCode",{parentName:"h4"},"toValue")," ","[number | string]"),(0,i.kt)("p",null,"The target value at which the animation should conclude.\nIt can be specified as a color value by providing string like: ",(0,i.kt)("inlineCode",{parentName:"p"},"rgba(255, 105, 180, 0)"),"."),(0,i.kt)("p",null,"Currently supported formats are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"rgb(r, g, b)"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"rgba(r, g, b, a)"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"hsl(h, s, l)"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"hsla(h, s, l, a)"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"#rgb"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"#rgba"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"#rrggbb"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"#rrggbbaa"'))),(0,i.kt)("h4",{id:"options-object"},(0,i.kt)("inlineCode",{parentName:"h4"},"options")," ","[object]"),(0,i.kt)("p",null,"Object containing animation configuration.\nAllowed parameters are listed below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Options"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"300"),(0,i.kt)("td",{parentName:"tr",align:null},"How long the animation should last")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"easing"),(0,i.kt)("td",{parentName:"tr",align:null},"in-out quad easing"),(0,i.kt)("td",{parentName:"tr",align:null},"Worklet that drives the easing curve for the animation")))),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"easing")," parameter we recommend using one of the pre-configured worklets defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"Easing")," module."),(0,i.kt)("h4",{id:"callback-functionoptional"},(0,i.kt)("inlineCode",{parentName:"h4"},"callback")," ","[function]","(","optional",")"),(0,i.kt)("p",null,"The provided function will be called when the animation is complete.\nIn case the animation is cancelled, the callback will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,i.kt)("a",{parentName:"p",href:"useAnimatedStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Button } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n  Easing,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const width = useSharedValue(50);\n\n  const style = useAnimatedStyle(() => {\n    return {\n      width: withTiming(width.value, {\n        duration: 500,\n        easing: Easing.bezier(0.25, 0.1, 0.25, 1),\n      }),\n    };\n  });\n\n  return (\n    <View>\n      <Animated.View style={[styles.box, style]} />\n      <Button onPress={() => (width.value = Math.random() * 300)} title=\"Hey\" />\n    </View>\n  );\n}\n")))}c.isMDXComponent=!0}}]);