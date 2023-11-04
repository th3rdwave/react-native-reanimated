"use strict";

var _core = require("../core");

var _styleAnimation = require("../animation/styleAnimation");

var _UpdateProps = require("../UpdateProps");

var _Colors = require("../Colors");

/* global _stopObservingProgress, _startObservingProgress */
(0, _core.runOnUI)(() => {
  'worklet';

  const configs = {};
  const enteringAnimationForTag = {};
  global.LayoutAnimationRepository = {
    configs,

    registerConfig(tag, config) {
      configs[tag] = config;
      enteringAnimationForTag[tag] = null;
    },

    removeConfig(tag) {
      delete configs[tag];
      delete enteringAnimationForTag[tag];
    },

    shouldAnimate(tag, type) {
      return configs[tag] != null;
    },

    startAnimationForTag(tag, type, yogaValues) {
      if (configs[tag] == null) {
        return; // :(
      }

      const style = configs[tag][type](yogaValues);
      let currentAnimation = style.animations;

      if (type === 'entering') {
        enteringAnimationForTag[tag] = style;
      } else if (type === 'layout' && enteringAnimationForTag[tag] !== null) {
        const entryAniamtion = enteringAnimationForTag[tag].animations;
        const layoutAnimation = style.animations;
        currentAnimation = {};

        for (const key in entryAniamtion) {
          currentAnimation[key] = entryAniamtion[key];
        }

        for (const key in layoutAnimation) {
          currentAnimation[key] = layoutAnimation[key];
        }
      }

      const sv = configs[tag].sv;

      _stopObservingProgress(tag, false);

      _startObservingProgress(tag, sv);

      const backupColor = {};

      for (const key in style.initialValues) {
        if (_UpdateProps.ColorProperties.includes(key)) {
          const value = style.initialValues[key];
          backupColor[key] = value;
          style.initialValues[key] = (0, _Colors.processColor)(value);
        }
      }

      sv.value = Object.assign({}, sv._value, style.initialValues);

      _stopObservingProgress(tag, false);

      const animation = (0, _styleAnimation.withStyleAnimation)(currentAnimation);

      animation.callback = finished => {
        if (finished) {
          _stopObservingProgress(tag, finished);
        }

        style.callback && style.callback(finished);
      };

      if (backupColor) {
        configs[tag].sv._value = { ...configs[tag].sv.value,
          ...backupColor
        };
      }

      configs[tag].sv.value = animation;

      _startObservingProgress(tag, sv);
    }

  };
})();
//# sourceMappingURL=LayoutAnimationRepository.js.map