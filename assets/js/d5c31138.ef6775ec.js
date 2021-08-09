(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{289:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return b})),i.d(t,"metadata",(function(){return o})),i.d(t,"toc",(function(){return r})),i.d(t,"default",(function(){return m}));var a=i(3),n=i(8),l=(i(0),i(346)),b={id:"exitAnimations",title:"Exiting Animations",sidebar_label:"Exiting Animations"},o={unversionedId:"api/LayoutAnimations/exitAnimations",id:"api/LayoutAnimations/exitAnimations",isDocsHomePage:!1,title:"Exiting Animations",description:"In React Native during unmounting of components from the hierarchy of views, it just disappears in the next frame. However you can beautify this process using Exiting Animations. Reanimated make a pretty animation of disappearing of component for you.",source:"@site/docs/api/LayoutAnimations/ExitAnimations.md",slug:"/api/LayoutAnimations/exitAnimations",permalink:"/react-native-reanimated/docs/next/api/LayoutAnimations/exitAnimations",version:"current",sidebar_label:"Exiting Animations",sidebar:"docs",previous:{title:"Entering Animations",permalink:"/react-native-reanimated/docs/next/api/LayoutAnimations/entryAnimations"},next:{title:"Keyframe Animations",permalink:"/react-native-reanimated/docs/next/api/LayoutAnimations/keyframeAnimations"}},r=[{value:"How to use predefined exiting animation?",id:"how-to-use-predefined-exiting-animation",children:[{value:"1. Import chosen animation",id:"1-import-chosen-animation",children:[]},{value:"2. Choose Animated Component which exiting you want to animate",id:"2-choose-animated-component-which-exiting-you-want-to-animate",children:[]},{value:"3. Customize the animation",id:"3-customize-the-animation",children:[]},{value:"4. Make sure that your animated component is under an AnimatedLayout. If it&#39;s not then add AnimatedLayout somewhere above the component.",id:"4-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component",children:[]}]},{value:"Predefined Animations",id:"predefined-animations",children:[{value:"Fade",id:"fade",children:[]},{value:"Bounce",id:"bounce",children:[]},{value:"Flip",id:"flip",children:[]},{value:"Stretch",id:"stretch",children:[]},{value:"Zoom",id:"zoom",children:[]},{value:"Slide",id:"slide",children:[]},{value:"LightSpeed",id:"lightspeed",children:[]},{value:"Pinwheel",id:"pinwheel",children:[]},{value:"Roll",id:"roll",children:[]},{value:"Rotate",id:"rotate",children:[]}]}],c={toc:r};function m(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In React Native during unmounting of components from the hierarchy of views, it just disappears in the next frame. However you can beautify this process using ",Object(l.b)("inlineCode",{parentName:"p"},"Exiting Animations"),". Reanimated make a pretty animation of disappearing of component for you."),Object(l.b)("h4",{id:"how-it-is-possible"},"How it is possible?"),Object(l.b)("p",null,"Reanimated listen on changes in tree of views and if detect that some of component should disappear in next frame, It replaces this process with exiting animation. It is easy and fast. You can use predefined animations - examples below or you can define your own custom animation. If you want to create more complex animation you can use ",Object(l.b)("a",{parentName:"p",href:"keyframeAnimations"},"Keyframes"),"."),Object(l.b)("h2",{id:"how-to-use-predefined-exiting-animation"},"How to use predefined exiting animation?"),Object(l.b)("h3",{id:"1-import-chosen-animation"},"1. Import chosen animation"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"    // AnimationName is just an example and should be replaced by real animation. For Instance FadeOut\n    import { AnimationName } from 'react-native-reanimated';\n")),Object(l.b)("h3",{id:"2-choose-animated-component-which-exiting-you-want-to-animate"},"2. Choose Animated Component which exiting you want to animate"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"    // AnimatedComponent - component created by createAnimatedComponent or imported from Reanimated\n    <AnimatedComponent exiting={AnimationName} >\n")),Object(l.b)("h3",{id:"3-customize-the-animation"},"3. Customize the animation"),Object(l.b)("p",null,"Different type of entering animations can be customized differently. For the complete list of option please refer to the paragraph specific to the particulr animation type."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"    <AnimatedComponent exiting={AnimationName.duration(3000).otherModifier()} >\n")),Object(l.b)("h3",{id:"4-make-sure-that-your-animated-component-is-under-an-animatedlayout-if-its-not-then-add-animatedlayout-somewhere-above-the-component"},"4. Make sure that your animated component is under an AnimatedLayout. If it's not then add AnimatedLayout somewhere above the component."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"    <AnimatedLayout> // +\n        <View> sth </View>\n        <View> \n            <AnimatedComponent exiting={AnimationName}>\n        </View>\n    </AnimatedLayout> // +\n")),Object(l.b)("h2",{id:"predefined-animations"},"Predefined Animations"),Object(l.b)("p",null,"Below we listed all of the currently available predefined entering animations grouped by their type. Each group contains all of its modifiers and a video presenting what it looks like when applied to a simple button."),Object(l.b)("p",null,"If you cannot find an animation that suits you then you can create a custom one. If you think that the animation should be here, please open an issue or create a pull request.  "),Object(l.b)("h3",{id:"fade"},"Fade"),Object(l.b)("p",null,"Simple animation based on changing of opacity."),Object(l.b)("h4",{id:"animations"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"FadeOut"),Object(l.b)("li",{parentName:"ul"},"FadeOutRight"),Object(l.b)("li",{parentName:"ul"},"FadeOutLeft"),Object(l.b)("li",{parentName:"ul"},"FadeOutUp"),Object(l.b)("li",{parentName:"ul"},"FadeOutDown")),Object(l.b)("h4",{id:"modifiers"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends")),Object(l.b)("h4",{id:"example"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317304-c1824380-c2de-11eb-8aed-4c83cfe2f2cc.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"bounce"},"Bounce"),Object(l.b)("p",null,"Animation based on smoothly shaking of component."),Object(l.b)("h4",{id:"animations-1"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"BounceOut"),Object(l.b)("li",{parentName:"ul"},"BounceOutRight"),Object(l.b)("li",{parentName:"ul"},"BounceOutLeft"),Object(l.b)("li",{parentName:"ul"},"BounceOutUp"),Object(l.b)("li",{parentName:"ul"},"BounceOutDown")),Object(l.b)("h4",{id:"modifiers-1"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends")),Object(l.b)("h4",{id:"example-1"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317374-d52daa00-c2de-11eb-9fc5-320dfaf50440.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"flip"},"Flip"),Object(l.b)("p",null,"3D animation based on flipping object over specific axis."),Object(l.b)("h4",{id:"animations-2"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"FlipOutYRight"),Object(l.b)("li",{parentName:"ul"},"FlipOutYLeft"),Object(l.b)("li",{parentName:"ul"},"FlipOutXUp"),Object(l.b)("li",{parentName:"ul"},"FlipOutXDown"),Object(l.b)("li",{parentName:"ul"},"FlipOutEasyX"),Object(l.b)("li",{parentName:"ul"},"FlipOutEasyY")),Object(l.b)("h4",{id:"modifiers-2"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends")),Object(l.b)("h4",{id:"example-2"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317439-e971a700-c2de-11eb-89d7-1a934922b7fd.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"stretch"},"Stretch"),Object(l.b)("p",null,"Animation based on changing width or height of object."),Object(l.b)("h4",{id:"animations-3"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"StretchOutX"),Object(l.b)("li",{parentName:"ul"},"StretchOutY")),Object(l.b)("h4",{id:"modifiers-3"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends")),Object(l.b)("h4",{id:"example-3"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317500-fbebe080-c2de-11eb-9901-693aa4ad0ba0.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"zoom"},"Zoom"),Object(l.b)("p",null,"Animation based on changing scale of object."),Object(l.b)("h4",{id:"animations-4"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ZoomOut"),Object(l.b)("li",{parentName:"ul"},"ZoomOutRotate"),Object(l.b)("li",{parentName:"ul"},"ZoomOutRight"),Object(l.b)("li",{parentName:"ul"},"ZoomOutLeft"),Object(l.b)("li",{parentName:"ul"},"ZoomOutUp"),Object(l.b)("li",{parentName:"ul"},"ZoomOutDown"),Object(l.b)("li",{parentName:"ul"},"ZoomOutEasyUp"),Object(l.b)("li",{parentName:"ul"},"ZoomOutEadyDown")),Object(l.b)("h4",{id:"modifiers-4"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends")),Object(l.b)("h4",{id:"example-4"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317554-0efeb080-c2df-11eb-88cf-6ec47778dccb.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"slide"},"Slide"),Object(l.b)("p",null,"Animation based on horizontal or vertical moving of object."),Object(l.b)("h4",{id:"animations-5"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"SlideOutRight"),Object(l.b)("li",{parentName:"ul"},"SlideOutLeft"),Object(l.b)("li",{parentName:"ul"},"SlideOutUp"),Object(l.b)("li",{parentName:"ul"},"SlideOutDown")),Object(l.b)("h4",{id:"modifiers-5"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends")),Object(l.b)("h4",{id:"example-5"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120317603-22118080-c2df-11eb-9083-b5ba3f043dbc.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"lightspeed"},"LightSpeed"),Object(l.b)("p",null,"Animation based on horizontal moving of object with changing of opacity and skew."),Object(l.b)("h4",{id:"animations-6"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"LightSpeedOutRight"),Object(l.b)("li",{parentName:"ul"},"LightSpeedOutLeft")),Object(l.b)("h4",{id:"modifiers-6"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends")),Object(l.b)("h4",{id:"example-6"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/48885911/125058070-2e40e880-e0aa-11eb-98eb-326a34f23f39.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"pinwheel"},"Pinwheel"),Object(l.b)("p",null,"Animation based on rotation with scale and opacity change."),Object(l.b)("h4",{id:"animations-7"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"PinwheelOut")),Object(l.b)("h4",{id:"modifiers-7"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends")),Object(l.b)("h4",{id:"example-7"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/48885911/125058201-57617900-e0aa-11eb-951f-46ac27787d3e.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"roll"},"Roll"),Object(l.b)("p",null,"Animation based on horizontal moving of object with rotation."),Object(l.b)("h4",{id:"animations-8"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"RollOutLeft"),Object(l.b)("li",{parentName:"ul"},"RollOutRight")),Object(l.b)("h4",{id:"modifiers-8"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends")),Object(l.b)("h4",{id:"example-8"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/48885911/125058307-6e07d000-e0aa-11eb-8379-4536c0806aee.mov",controls:"controls",muted:"muted"}),Object(l.b)("h3",{id:"rotate"},"Rotate"),Object(l.b)("p",null,"Animation based on rotation of object."),Object(l.b)("h4",{id:"animations-9"},"Animations"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"RotateOutDownLeft"),Object(l.b)("li",{parentName:"ul"},"RotateOutDownRight"),Object(l.b)("li",{parentName:"ul"},"RotateOutUpLeft"),Object(l.b)("li",{parentName:"ul"},"RotateOutUpRight")),Object(l.b)("h4",{id:"modifiers-9"},"Modifiers"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",Object(l.b)("inlineCode",{parentName:"li"},"withTiming")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping ")," default: 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass")," default: 1"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the exit animation ends")),Object(l.b)("h4",{id:"example-9"},"Example"),Object(l.b)("video",{src:"https://user-images.githubusercontent.com/48885911/125058418-8841ae00-e0aa-11eb-9ac1-39df437512c4.mov",controls:"controls",muted:"muted"}))}m.isMDXComponent=!0},346:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return s}));var a=i(0),n=i.n(a);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=n.a.createContext({}),m=function(e){var t=n.a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=m(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=m(i),p=a,s=d["".concat(b,".").concat(p)]||d[p]||u[p]||l;return i?n.a.createElement(s,o(o({ref:t},c),{},{components:i})):n.a.createElement(s,o({ref:t},c))}));function s(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,b=new Array(l);b[0]=p;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var c=2;c<l;c++)b[c]=i[c];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);