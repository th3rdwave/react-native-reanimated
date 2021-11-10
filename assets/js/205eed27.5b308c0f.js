"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[8646],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=l(t),p=i,f=c["".concat(s,".").concat(p)]||c[p]||u[p]||o;return t?a.createElement(f,r(r({ref:n},d),{},{components:t})):a.createElement(f,r({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var m={};for(var s in n)hasOwnProperty.call(n,s)&&(m[s]=n[s]);m.originalType=e,m.mdxType="string"==typeof e?e:i,r[1]=m;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1507:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r={id:"keyframeAnimations",title:"Keyframe Animations",sidebar_label:"Keyframe Animations"},m=void 0,s={unversionedId:"api/LayoutAnimations/keyframeAnimations",id:"version-2.3.0-alpha.2/api/LayoutAnimations/keyframeAnimations",isDocsHomePage:!1,title:"Keyframe Animations",description:"The document explains how you can define complex animation using simple and popular animation definitions schema - Keyframes.",source:"@site/versioned_docs/version-2.3.0-alpha.2/api/LayoutAnimations/KeyframeAnimations.md",sourceDirName:"api/LayoutAnimations",slug:"/api/LayoutAnimations/keyframeAnimations",permalink:"/react-native-reanimated/docs/2.3.0-alpha.2/api/LayoutAnimations/keyframeAnimations",version:"2.3.0-alpha.2",frontMatter:{id:"keyframeAnimations",title:"Keyframe Animations",sidebar_label:"Keyframe Animations"},sidebar:"version-2.3.0-alpha.1/docs",previous:{title:"Exiting Animations",permalink:"/react-native-reanimated/docs/2.3.0-alpha.2/api/LayoutAnimations/exitAnimations"},next:{title:"Layout Transitions",permalink:"/react-native-reanimated/docs/2.3.0-alpha.2/api/LayoutAnimations/layoutTransitions"}},l=[{value:"How to define Keyframe animation?",id:"how-to-define-keyframe-animation",children:[{value:"1. Import Keyframe",id:"1-import-keyframe",children:[]},{value:"2. Create Keyframe object, define initial and final state",id:"2-create-keyframe-object-define-initial-and-final-state",children:[]},{value:"3. Add middle points",id:"3-add-middle-points",children:[]},{value:"4. Customize transitions using an easing function",id:"4-customize-transitions-using-an-easing-function",children:[]}]},{value:"How to use keyframe animations?",id:"how-to-use-keyframe-animations",children:[{value:"1. Choose Animated Component which entering or exiting you want to animate",id:"1-choose-animated-component-which-entering-or-exiting-you-want-to-animate",children:[]},{value:"2. Customize the animation",id:"2-customize-the-animation",children:[]},{value:"3. Make sure that your animated component is under an AnimatedLayout. If it&#39;s not then add AnimatedLayout somewhere above the component.",id:"3-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component",children:[]}]},{value:"Available modifiers",id:"available-modifiers",children:[{value:"duration",id:"duration",children:[]},{value:"delay",id:"delay",children:[]},{value:"withCallback",id:"withcallback",children:[]}]},{value:"Example",id:"example",children:[]}],d={toc:l};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The document explains how you can define complex animation using simple and popular animation definitions schema - Keyframes."),(0,o.kt)("h2",{id:"how-to-define-keyframe-animation"},"How to define Keyframe animation?"),(0,o.kt)("h3",{id:"1-import-keyframe"},"1. Import Keyframe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Keyframe } from 'react-native-reanimated';\n")),(0,o.kt)("h3",{id:"2-create-keyframe-object-define-initial-and-final-state"},"2. Create Keyframe object, define initial and final state"),(0,o.kt)("p",null,"In Keyframe's constructor pass object with definitions of your animation. Object keys should be within range ",(0,o.kt)("inlineCode",{parentName:"p"},"0-100")," and correspond to animation progress,\nso to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," assign the style, you want for your object at the beginning of the animation and to ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," assign the style you want for your object to have at the end of the animation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Keyframe } from 'react-native-reanimated';\n\nconst keyframe = new Keyframe({\n    0: {\n      transform: [{ rotate: '0deg' }],\n    },\n    100: {\n      transform: [{ rotate: '45deg' }],\n    },\n  }\n")),(0,o.kt)("p",null,"Instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"100"),", you can define edge points using ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," keywords. The result will be the same."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Keyframe } from 'react-native-reanimated';\n\nconst keyframe = new Keyframe({\n    from: {\n      transform: [{ rotate: '0deg' }],\n    },\n    to: {\n      transform: [{ rotate: '45deg' }],\n    },\n  }\n")),(0,o.kt)("p",null,"Providing keyframe ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," is required as it contains the initial state of the object you want to animate.\nMake sure you provided the initial value for all style properties you want to animate in other keyframes.\nRemember not to provide both ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"from"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," keyframe as it will result in parsing conflict."),(0,o.kt)("h3",{id:"3-add-middle-points"},"3. Add middle points"),(0,o.kt)("p",null,"Between edge points, you can define middle points in which you want your object to have certain style properties.\nRemember that you can specify style only for those properties that you set the initial value in ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," keyframe.\nIf you want to animate transform style, make sure that all properties in the transformation array are in the same order in all keyframes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Keyframe } from 'react-native-reanimated';\n\nconst keyframe = new Keyframe({\n    0: {\n      transform: [{ rotate: '0deg' }],\n    },\n    45: {\n      transform: [{ rotate: '100deg' }]\n    },\n    100: {\n      transform: [{ rotate: '45deg' }],\n    },\n  }\n")),(0,o.kt)("h3",{id:"4-customize-transitions-using-an-easing-function"},"4. Customize transitions using an easing function"),(0,o.kt)("p",null,"If easing property is not provided, it defaults to linear easing function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Keyframe, Easing } from 'react-native-reanimated';\n\nconst keyframe = new Keyframe({\n    0: {\n      transform: [{ rotate: '0deg' }],\n    },\n    45: {\n      transform: [{ rotate: '100deg' }],\n      easing: Easing.exp,\n    },\n    100: {\n      transform: [{ rotate: '45deg' }],\n    },\n  }\n")),(0,o.kt)("h2",{id:"how-to-use-keyframe-animations"},"How to use keyframe animations?"),(0,o.kt)("p",null,"Currently, you can define animations using keyframes only for entry and exit animations. "),(0,o.kt)("h3",{id:"1-choose-animated-component-which-entering-or-exiting-you-want-to-animate"},"1. Choose Animated Component which entering or exiting you want to animate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    // AnimatedComponent - component created by createAnimatedComponent or imported from Reanimated\n    // keyframe - Keyframe object\n    <AnimatedComponent exiting={keyframe} />\n")),(0,o.kt)("h3",{id:"2-customize-the-animation"},"2. Customize the animation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    <AnimatedComponent exiting={keyframe.duration(3000).delay(200)} />\n")),(0,o.kt)("h3",{id:"3-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component"},"3. Make sure that your animated component is under an AnimatedLayout. If it's not then add AnimatedLayout somewhere above the component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"    <AnimatedLayout> // +\n        <Text> sth </Text>\n        <AnimatedComponent exiting={keyframe.duration(3000).delay(200)} />\n    </AnimatedLayout> // +\n")),(0,o.kt)("h2",{id:"available-modifiers"},"Available modifiers"),(0,o.kt)("p",null,"The order of modifiers doesn't matter."),(0,o.kt)("h3",{id:"duration"},"duration"),(0,o.kt)("p",null,"default: 500\nHow long the animation should last."),(0,o.kt)("h3",{id:"delay"},"delay"),(0,o.kt)("p",null,"default: 0\nAllows to start with a specified delay."),(0,o.kt)("h3",{id:"withcallback"},"withCallback"),(0,o.kt)("p",null,"Allows to execute code when keyframe animation ends."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function KeyframeAnimation(): React.ReactElement {\n  const [show, setShow] = useState(false);\n\n  const enteringAnimation = new Keyframe({\n    0: {\n      originX: 50,\n      transform: [{ rotate: '45deg' }],\n    },\n    30: {\n      originX: 10,\n      transform: [{ rotate: '-90deg' }],\n    },\n    100: {\n      originX: 0,\n      transform: [{ rotate: '0deg' }],\n      easing: Easing.quad,\n    },\n  }).duration(2000);\n\n  const exitingAnimation = new Keyframe({\n    0: {\n      opacity: 1,\n      transform: [{ skewX: '0deg' }],\n    },\n    30: {\n      opacity: 0.5,\n      transform: [{ skewX: '40deg' }],\n      easing: Easing.exp,\n    },\n    100: {\n      opacity: 0,\n      transform: [{ skewX: '-10deg' }],\n    },\n  }).duration(2000);\n  \n  return (\n    <View style={{ flexDirection: 'column-reverse' }}>\n      <Button\n        title=\"animate\"\n        onPress={() => {\n          setShow((last) => !last);\n        }}\n      />\n      <View\n        style={{ height: 400, alignItems: 'center', justifyContent: 'center' }}>\n        {show && (\n          <AnimatedLayout>\n            <Animated.View\n              entering={enteringAnimation}\n              exiting={exitingAnimation}\n              style={{\n                height: 100,\n                width: 200,\n                backgroundColor: 'blue',\n                alignItems: 'center',\n                justifyContent: 'center',\n              }}\n            />\n          </AnimatedLayout>\n        )}\n      </View>\n    </View>\n  );\n}\n")),(0,o.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125463255-04502655-3147-4d15-ae5b-f327666eadff.mov",controls:"controls",muted:"muted"}))}u.isMDXComponent=!0}}]);