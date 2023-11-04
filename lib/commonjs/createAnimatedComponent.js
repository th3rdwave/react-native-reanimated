"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createAnimatedComponent;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _WorkletEventHandler = _interopRequireDefault(require("./reanimated2/WorkletEventHandler"));

var _setAndForwardRef = _interopRequireDefault(require("./setAndForwardRef"));

require("./reanimated2/layoutReanimation/LayoutAnimationRepository");

var _invariant = _interopRequireDefault(require("invariant"));

var _ConfigHelper = require("./ConfigHelper");

var _RNRenderer = require("./reanimated2/platform-specific/RNRenderer");

var _core = require("./reanimated2/core");

var _Default = require("./reanimated2/layoutReanimation/defaultAnimations/Default");

var _PlatformChecker = require("./reanimated2/PlatformChecker");

var _animation = require("./reanimated2/animation");

var _fabricUtils = require("./reanimated2/fabricUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function dummyListener() {// empty listener we use to assign to listener properties for which animated
  // event is used.
}

function flattenArray(array) {
  if (!Array.isArray(array)) {
    return [array];
  }

  const resultArr = [];

  const _flattenArray = arr => {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        _flattenArray(item);
      } else {
        resultArr.push(item);
      }
    });
  };

  _flattenArray(array);

  return resultArr;
}

function onlyAnimatedStyles(styles) {
  return styles.filter(style => style === null || style === void 0 ? void 0 : style.viewDescriptors);
}

function isSameAnimatedStyle(style1, style2) {
  // We cannot use equality check to compare useAnimatedStyle outputs directly.
  // Instead, we can compare its viewsRefs.
  return (style1 === null || style1 === void 0 ? void 0 : style1.viewsRef) === (style2 === null || style2 === void 0 ? void 0 : style2.viewsRef);
}

const isSameAnimatedProps = isSameAnimatedStyle;

const has = (key, x) => {
  if (typeof x === 'function' || typeof x === 'object') {
    if (x === null || x === undefined) {
      return false;
    } else {
      return key in x;
    }
  }

  return false;
};

function createAnimatedComponent(Component, options) {
  (0, _invariant.default)(typeof Component !== 'function' || Component.prototype && Component.prototype.isReactComponent, '`createAnimatedComponent` does not support stateless functional components; ' + 'use a class component instead.');

  class AnimatedComponent extends _react.default.Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "_styles", null);

      _defineProperty(this, "_animatedProps", void 0);

      _defineProperty(this, "_viewTag", -1);

      _defineProperty(this, "_isFirstRender", true);

      _defineProperty(this, "animatedStyle", {
        value: {}
      });

      _defineProperty(this, "initialStyle", {});

      _defineProperty(this, "sv", void 0);

      _defineProperty(this, "_component", null);

      _defineProperty(this, "_setComponentRef", (0, _setAndForwardRef.default)({
        getForwardedRef: () => this.props.forwardedRef,
        setLocalRef: ref => {
          // TODO update config
          const tag = (0, _reactNative.findNodeHandle)(ref);

          if ((this.props.layout || this.props.entering || this.props.exiting) && tag != null) {
            if (!(0, _PlatformChecker.shouldBeUseWeb)()) {
              (0, _core.enableLayoutAnimations)(true, false);
            }

            let layout = this.props.layout ? this.props.layout : _Default.DefaultLayout;
            let entering = this.props.entering ? this.props.entering : _Default.DefaultEntering;
            let exiting = this.props.exiting ? this.props.exiting : _Default.DefaultExiting;

            if (has('build', layout)) {
              layout = layout.build();
            }

            if (has('build', entering)) {
              entering = entering.build();
            }

            if (has('build', exiting)) {
              exiting = exiting.build();
            }

            const config = {
              layout,
              entering,
              exiting,
              sv: this.sv
            };
            (0, _core.runOnUI)(() => {
              'worklet';

              global.LayoutAnimationRepository.registerConfig(tag, config);
            })();
          }

          if (ref !== this._component) {
            this._component = ref;
          }
        }
      }));

      if ((0, _PlatformChecker.isJest)()) {
        this.animatedStyle = {
          value: {}
        };
      }

      this.sv = (0, _core.makeMutable)({});
    }

    componentWillUnmount() {
      this._detachNativeEvents();

      this._detachStyles();

      this.sv = null;
    }

    componentDidMount() {
      this._attachNativeEvents();

      this._attachAnimatedStyles();
    }

    _attachNativeEvents() {
      const viewTag = (0, _reactNative.findNodeHandle)(this);

      for (const key in this.props) {
        const prop = this.props[key];

        if (has('current', prop) && prop.current instanceof _WorkletEventHandler.default) {
          prop.current.registerForEvents(viewTag, key);
        }
      }
    }

    _detachNativeEvents() {
      for (const key in this.props) {
        const prop = this.props[key];

        if (has('current', prop) && prop.current instanceof _WorkletEventHandler.default) {
          prop.current.unregisterFromEvents();
        }
      }
    }

    _detachStyles() {
      if (_reactNative.Platform.OS === 'web' && this._styles !== null) {
        for (const style of this._styles) {
          if (style !== null && style !== void 0 && style.viewsRef) {
            style.viewsRef.remove(this);
          }
        }
      } else if (this._viewTag !== -1 && this._styles !== null) {
        var _this$props$animatedP;

        for (const style of this._styles) {
          style.viewDescriptors.remove(this._viewTag);
        }

        if ((_this$props$animatedP = this.props.animatedProps) !== null && _this$props$animatedP !== void 0 && _this$props$animatedP.viewDescriptors) {
          this.props.animatedProps.viewDescriptors.remove(this._viewTag);
        }

        if (global._IS_FABRIC) {
          const shadowNodeWrapper = (0, _fabricUtils.getShadowNodeWrapperFromRef)(this);
          (0, _core.runOnUI)(() => {
            'worklet';

            _removeShadowNodeFromRegistry(shadowNodeWrapper);
          })();
        }
      }
    }

    _reattachNativeEvents(prevProps) {
      let viewTag;

      for (const key in this.props) {
        const prop = this.props[key];

        if (has('current', prop) && prop.current instanceof _WorkletEventHandler.default) {
          if (viewTag === undefined) {
            viewTag = prop.current.viewTag;
          }
        }
      }

      for (const key in prevProps) {
        const prop = this.props[key];

        if (has('current', prop) && prop.current instanceof _WorkletEventHandler.default && prop.current.reattachNeeded) {
          prop.current.unregisterFromEvents();
        }
      }

      for (const key in this.props) {
        const prop = this.props[key];

        if (has('current', prop) && prop.current instanceof _WorkletEventHandler.default && prop.current.reattachNeeded) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          prop.current.registerForEvents(viewTag, key);
          prop.current.reattachNeeded = false;
        }
      }
    }

    _updateFromNative(props) {
      if (options !== null && options !== void 0 && options.setNativeProps) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        options.setNativeProps(this._component, props);
      } else {
        var _this$_component, _this$_component$setN;

        // eslint-disable-next-line no-unused-expressions
        (_this$_component = this._component) === null || _this$_component === void 0 ? void 0 : (_this$_component$setN = _this$_component.setNativeProps) === null || _this$_component$setN === void 0 ? void 0 : _this$_component$setN.call(_this$_component, props);
      }
    }

    _attachAnimatedStyles() {
      var _this$props$animatedP3;

      const styles = this.props.style ? onlyAnimatedStyles(flattenArray(this.props.style)) : [];
      const prevStyles = this._styles;
      this._styles = styles;
      const prevAnimatedProps = this._animatedProps;
      this._animatedProps = this.props.animatedProps;
      let viewTag;
      let viewName;
      let shadowNodeWrapper = null;

      if (_reactNative.Platform.OS === 'web') {
        viewTag = (0, _reactNative.findNodeHandle)(this);
        viewName = null;
        shadowNodeWrapper = null;
      } else {
        var _hostInstance$viewCon, _this$props$animatedP2;

        // hostInstance can be null for a component that doesn't render anything (render function returns null). Example: svg Stop: https://github.com/react-native-svg/react-native-svg/blob/develop/src/elements/Stop.tsx
        const hostInstance = _RNRenderer.RNRenderer.findHostInstance_DEPRECATED(this);

        if (!hostInstance) {
          throw new Error('Cannot find host instance for this component. Maybe it renders nothing?');
        } // we can access view tag in the same way it's accessed here https://github.com/facebook/react/blob/e3f4eb7272d4ca0ee49f27577156b57eeb07cf73/packages/react-native-renderer/src/ReactFabric.js#L146


        viewTag = hostInstance === null || hostInstance === void 0 ? void 0 : hostInstance._nativeTag;
        /**
         * RN uses viewConfig for components for storing different properties of the component(example: https://github.com/facebook/react-native/blob/master/Libraries/Components/ScrollView/ScrollViewViewConfig.js#L16).
         * The name we're looking for is in the field named uiViewClassName.
         */

        viewName = hostInstance === null || hostInstance === void 0 ? void 0 : (_hostInstance$viewCon = hostInstance.viewConfig) === null || _hostInstance$viewCon === void 0 ? void 0 : _hostInstance$viewCon.uiViewClassName; // update UI props whitelist for this view

        const hasReanimated2Props = ((_this$props$animatedP2 = this.props.animatedProps) === null || _this$props$animatedP2 === void 0 ? void 0 : _this$props$animatedP2.viewDescriptors) || styles.length;

        if (hasReanimated2Props && hostInstance !== null && hostInstance !== void 0 && hostInstance.viewConfig) {
          (0, _ConfigHelper.adaptViewConfig)(hostInstance.viewConfig);
        }

        if (global._IS_FABRIC) {
          shadowNodeWrapper = (0, _fabricUtils.getShadowNodeWrapperFromRef)(this);
        }
      }

      this._viewTag = viewTag; // remove old styles

      if (prevStyles) {
        // in most of the cases, views have only a single animated style and it remains unchanged
        const hasOneSameStyle = styles.length === 1 && prevStyles.length === 1 && isSameAnimatedStyle(styles[0], prevStyles[0]);

        if (!hasOneSameStyle) {
          // otherwise, remove each style that is not present in new styles
          for (const prevStyle of prevStyles) {
            const isPresent = styles.some(style => isSameAnimatedStyle(style, prevStyle));

            if (!isPresent) {
              prevStyle.viewDescriptors.remove(viewTag);
            }
          }
        }
      }

      styles.forEach(style => {
        style.viewDescriptors.add({
          tag: viewTag,
          name: viewName,
          shadowNodeWrapper
        });

        if ((0, _PlatformChecker.isJest)()) {
          /**
           * We need to connect Jest's TestObject instance whose contains just props object
           * with the updateProps() function where we update the properties of the component.
           * We can't update props object directly because TestObject contains a copy of props - look at render function:
           * const props = this._filterNonAnimatedProps(this.props);
           */
          this.animatedStyle.value = { ...this.animatedStyle.value,
            ...style.initial.value
          };
          style.animatedStyle.current = this.animatedStyle;
        }
      }); // detach old animatedProps

      if (prevAnimatedProps && !isSameAnimatedProps(prevAnimatedProps, this.props.animatedProps)) {
        prevAnimatedProps.viewDescriptors.remove(viewTag);
      } // attach animatedProps property


      if ((_this$props$animatedP3 = this.props.animatedProps) !== null && _this$props$animatedP3 !== void 0 && _this$props$animatedP3.viewDescriptors) {
        this.props.animatedProps.viewDescriptors.add({
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          tag: viewTag,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          name: viewName,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          shadowNodeWrapper: shadowNodeWrapper
        });
      }
    }

    componentDidUpdate(prevProps) {
      this._reattachNativeEvents(prevProps);

      this._attachAnimatedStyles();
    }

    _filterNonAnimatedProps(inputProps) {
      const props = {};

      for (const key in inputProps) {
        const value = inputProps[key];

        if (key === 'style') {
          const styleProp = inputProps.style;
          const styles = flattenArray(styleProp ?? []);
          const processedStyle = styles.map(style => {
            if (style && style.viewDescriptors) {
              // this is how we recognize styles returned by useAnimatedStyle
              style.viewsRef.add(this);

              if (this._isFirstRender) {
                this.initialStyle = { ...style.initial.value,
                  ...(0, _animation.initialUpdaterRun)(style.initial.updater)
                };
              }

              return this.initialStyle;
            } else {
              return style;
            }
          });
          props[key] = _reactNative.StyleSheet.flatten(processedStyle);
        } else if (key === 'animatedProps') {
          const animatedProp = inputProps.animatedProps;

          if (animatedProp.initial !== undefined) {
            Object.keys(animatedProp.initial.value).forEach(key => {
              var _animatedProp$initial, _animatedProp$viewsRe;

              props[key] = (_animatedProp$initial = animatedProp.initial) === null || _animatedProp$initial === void 0 ? void 0 : _animatedProp$initial.value[key];
              (_animatedProp$viewsRe = animatedProp.viewsRef) === null || _animatedProp$viewsRe === void 0 ? void 0 : _animatedProp$viewsRe.add(this);
            });
          }
        } else if (has('current', value) && value.current instanceof _WorkletEventHandler.default) {
          if (value.current.eventNames.length > 0) {
            value.current.eventNames.forEach(eventName => {
              props[eventName] = has('listeners', value.current) ? value.current.listeners[eventName] : dummyListener;
            });
          } else {
            props[key] = dummyListener;
          }
        } else if (key !== 'onGestureHandlerStateChange' || !(0, _PlatformChecker.isChromeDebugger)()) {
          props[key] = value;
        }
      }

      return props;
    }

    render() {
      const props = this._filterNonAnimatedProps(this.props);

      if ((0, _PlatformChecker.isJest)()) {
        props.animatedStyle = this.animatedStyle;
      }

      if (this._isFirstRender) {
        this._isFirstRender = false;
      }

      const platformProps = _reactNative.Platform.select({
        web: {},
        default: {
          collapsable: false
        }
      });

      return /*#__PURE__*/_react.default.createElement(Component, _extends({}, props, {
        ref: this._setComponentRef
      }, platformProps));
    }

  }

  _defineProperty(AnimatedComponent, "displayName", void 0);

  AnimatedComponent.displayName = `AnimatedComponent(${Component.displayName || Component.name || 'Component'})`;
  return /*#__PURE__*/_react.default.forwardRef((props, ref) => {
    return /*#__PURE__*/_react.default.createElement(AnimatedComponent, _extends({}, props, ref === null ? null : {
      forwardedRef: ref
    }));
  });
}
//# sourceMappingURL=createAnimatedComponent.js.map