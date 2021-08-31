"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[6037],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7091:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o={id:"testing",title:"Testing with Jest",sidebar_label:"Testing with Jest"},l=void 0,s={unversionedId:"testing",id:"version-2.3.0-alpha.2/testing",isDocsHomePage:!1,title:"Testing with Jest",description:"Reanimated test mocks use web implementation of Reanimated2. Before you begin using Reanimated mocks you need some setup actions.",source:"@site/versioned_docs/version-2.3.0-alpha.2/testing.md",sourceDirName:".",slug:"/testing",permalink:"/react-native-reanimated/docs/2.3.0-alpha.2/testing",version:"2.3.0-alpha.2",frontMatter:{id:"testing",title:"Testing with Jest",sidebar_label:"Testing with Jest"},sidebar:"version-2.3.0-alpha.1/docs",previous:{title:"runOnJS",permalink:"/react-native-reanimated/docs/2.3.0-alpha.2/api/runOnJS"}},m=[{value:"Setup",id:"setup",children:[]},{value:"API",id:"api",children:[]},{value:"Example",id:"example",children:[]},{value:"Recommended testing library",id:"recommended-testing-library",children:[]}],p={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Reanimated test mocks use web implementation of Reanimated2. Before you begin using Reanimated mocks you need some setup actions."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Add the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},"jest-setup.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setUpTests()")," can take optional config argument. Default config is ",(0,r.kt)("inlineCode",{parentName:"p"},"{ fps: 60 }"),", setting framerate to 60fps."),(0,r.kt)("p",null,"To be sure, check if your ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file contains:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"...\npreset: 'react-native',\nsetupFiles: ['./jest-setup.js'],\n...\n")),(0,r.kt)("p",null,"If you have custom babel configuration for testing, make sure that Reanimated's babel plugin is enabled for that environment."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h4",{id:"style-checker"},"Style checker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Checking equality of selected styles with current component styles"),(0,r.kt)("h4",{parentName:"li",id:"expectcomponenttohaveanimatedstyleexpectedstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"expect(component).toHaveAnimatedStyle(expectedStyle)")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"component")," - tested component\n",(0,r.kt)("inlineCode",{parentName:"p"},"expectedStyle")," - contains expected styles of testing component, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"{ width: 100 }"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Checking equality of all current component styles with expected styles"),(0,r.kt)("h4",{parentName:"li",id:"expectcomponenttohaveanimatedstyleexpectedstyle-exact-true"},(0,r.kt)("inlineCode",{parentName:"h4"},"expect(component).toHaveAnimatedStyle(expectedStyle, {exact: true})"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can get all styles of tested component by using ",(0,r.kt)("inlineCode",{parentName:"p"},"getDefaultStyle")),(0,r.kt)("h4",{parentName:"li",id:"getdefaultstylecomponent"},(0,r.kt)("inlineCode",{parentName:"h4"},"getDefaultStyle(component)")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"component")," - tested component"))),(0,r.kt)("h4",{id:"timers"},"Timers"),(0,r.kt)("p",null,"You can use jest timers to control animation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"jest.useFakeTimers();\n// call animation\njest.runAllTimers();\n")),(0,r.kt)("p",null,"If you want more control over animation, you can use Reanimated wrapper for timers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"withReanimatedTimer(() => {\n  // call animation\n})\n")),(0,r.kt)("p",null,"Inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"withReanimatedTimer")," you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"advanceAnimationByTime(timeInMs)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"advanceAnimationByFrame(amountOfFrames)")," functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Advance animation by a specified number of frames. You can specify the running duration of the animation and check the value of styles afterward.",(0,r.kt)("h4",{parentName:"li",id:"advanceanimationbytimetimeinms"},(0,r.kt)("inlineCode",{parentName:"h4"},"advanceAnimationByTime(timeInMs)")),(0,r.kt)("inlineCode",{parentName:"li"},"timeInMs")," - the duration specifying for how long animation should be advanced forward. Should have an integer value."),(0,r.kt)("li",{parentName:"ul"},"Advance animation by specific amount of animation frame.",(0,r.kt)("h4",{parentName:"li",id:"advanceanimationbyframenumberofframes"},(0,r.kt)("inlineCode",{parentName:"h4"},"advanceAnimationByFrame(numberOfFrames)")),(0,r.kt)("inlineCode",{parentName:"li"},"numberOfFrames")," - number of animation frames to run. Should have an integer value.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Timer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"test('stop in a middle of animation', () => {\n  withReanimatedTimer(() => {\n    const style = { width: 0 };\n\n    const { getByTestId } = render(<AnimatedComponent />);\n    const view = getByTestId('view');\n    const button = getByTestId('button');\n\n    expect(view.props.style.width).toBe(0);\n    expect(view).toHaveAnimatedStyle(style);\n\n    fireEvent.press(button);\n    moveAnimationByTime(250); // if whole animation duration is a 500ms\n    style.width = 46.08; // value of component width after 250ms of animation\n    expect(view).toHaveAnimatedStyle(style);\n  });\n});\n")),(0,r.kt)("p",null,"More example tests you can see in our repository"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-reanimated/tree/master/__tests__/SharedValue.test.js"},"SharedValue.test.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-reanimated/tree/master/__tests__/Animation.test.js"},"Animation.test.js"))),(0,r.kt)("h2",{id:"recommended-testing-library"},"Recommended testing library"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://callstack.github.io/react-native-testing-library/"},"@testing-library/react-native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://react-hooks-testing-library.com/"},"@testing-library/react-hooks")," - for dealing with hooks")))}c.isMDXComponent=!0}}]);