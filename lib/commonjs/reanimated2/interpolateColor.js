"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolateSharableColor = exports.interpolateColor = exports.Extrapolate = exports.ColorSpace = void 0;
exports.useInterpolateConfig = useInterpolateConfig;

var _Colors = require("./Colors");

var _core = require("./core");

var _interpolation = require("./interpolation");

var _useSharedValue = require("./hook/useSharedValue");

const Extrapolate = {
  EXTEND: 'extend',
  CLAMP: 'clamp',
  IDENTITY: 'identity'
};
exports.Extrapolate = Extrapolate;

const interpolateColorsHSV = (value, inputRange, colors) => {
  'worklet';

  const h = (0, _interpolation.interpolate)(value, inputRange, colors.h, Extrapolate.CLAMP);
  const s = (0, _interpolation.interpolate)(value, inputRange, colors.s, Extrapolate.CLAMP);
  const v = (0, _interpolation.interpolate)(value, inputRange, colors.v, Extrapolate.CLAMP);
  return (0, _Colors.hsvToColor)(h, s, v);
};

const interpolateColorsRGB = (value, inputRange, colors) => {
  'worklet';

  const r = (0, _interpolation.interpolate)(value, inputRange, colors.r, Extrapolate.CLAMP);
  const g = (0, _interpolation.interpolate)(value, inputRange, colors.g, Extrapolate.CLAMP);
  const b = (0, _interpolation.interpolate)(value, inputRange, colors.b, Extrapolate.CLAMP);
  const a = (0, _interpolation.interpolate)(value, inputRange, colors.a, Extrapolate.CLAMP);
  return (0, _Colors.rgbaColor)(r, g, b, a);
};

const getInterpolateRGB = colors => {
  'worklet';

  const r = [];
  const g = [];
  const b = [];
  const a = [];

  for (let i = 0; i < colors.length; ++i) {
    const color = colors[i];
    const processedColor = (0, _Colors.processColor)(color); // explicit check in case if processedColor is 0

    if (processedColor !== null && processedColor !== undefined) {
      r.push((0, _Colors.red)(processedColor));
      g.push((0, _Colors.green)(processedColor));
      b.push((0, _Colors.blue)(processedColor));
      a.push((0, _Colors.opacity)(processedColor));
    }
  }

  return {
    r,
    g,
    b,
    a
  };
};

const getInterpolateHSV = colors => {
  'worklet';

  const h = [];
  const s = [];
  const v = [];

  for (let i = 0; i < colors.length; ++i) {
    const color = colors[i];
    const processedColor = (0, _Colors.RGBtoHSV)((0, _Colors.processColor)(color));

    if (processedColor) {
      h.push(processedColor.h);
      s.push(processedColor.s);
      v.push(processedColor.v);
    }
  }

  return {
    h,
    s,
    v
  };
};

const interpolateColor = function (value, inputRange, outputRange) {
  'worklet';

  let colorSpace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'RGB';

  if (colorSpace === 'HSV') {
    return interpolateColorsHSV(value, inputRange, getInterpolateHSV(outputRange));
  } else if (colorSpace === 'RGB') {
    return interpolateColorsRGB(value, inputRange, getInterpolateRGB(outputRange));
  }

  throw new Error(`Invalid color space provided: ${colorSpace}. Supported values are: ['RGB', 'HSV']`);
};

exports.interpolateColor = interpolateColor;
let ColorSpace;
exports.ColorSpace = ColorSpace;

(function (ColorSpace) {
  ColorSpace[ColorSpace["RGB"] = 0] = "RGB";
  ColorSpace[ColorSpace["HSV"] = 1] = "HSV";
})(ColorSpace || (exports.ColorSpace = ColorSpace = {}));

function useInterpolateConfig(inputRange, outputRange) {
  let colorSpace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ColorSpace.RGB;
  return (0, _useSharedValue.useSharedValue)({
    inputRange,
    outputRange,
    colorSpace,
    cache: (0, _core.makeMutable)(null)
  });
}

const interpolateSharableColor = (value, interpolateConfig) => {
  'worklet';

  let colors = interpolateConfig.value.cache.value;

  if (interpolateConfig.value.colorSpace === ColorSpace.RGB) {
    if (!colors) {
      colors = getInterpolateRGB(interpolateConfig.value.outputRange);
      interpolateConfig.value.cache.value = colors;
    }

    return interpolateColorsRGB(value, interpolateConfig.value.inputRange, colors);
  } else if (interpolateConfig.value.colorSpace === ColorSpace.HSV) {
    if (!colors) {
      colors = getInterpolateHSV(interpolateConfig.value.outputRange);
      interpolateConfig.value.cache.value = colors;
    }

    return interpolateColorsHSV(value, interpolateConfig.value.inputRange, colors);
  }

  throw new Error(`Invalid color space provided: ${interpolateConfig.value.colorSpace}. Supported values are: ['RGB', 'HSV']`);
};

exports.interpolateSharableColor = interpolateSharableColor;
//# sourceMappingURL=interpolateColor.js.map