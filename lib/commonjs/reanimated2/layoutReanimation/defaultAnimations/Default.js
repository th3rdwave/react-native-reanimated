"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultLayout = exports.DefaultExiting = exports.DefaultEntering = void 0;

const DefaultLayout = values => {
  'worklet';

  return {
    initialValues: {
      originX: values.targetOriginX,
      originY: values.targetOriginY,
      width: values.targetWidth,
      height: values.targetHeight
    },
    animations: {}
  };
};

exports.DefaultLayout = DefaultLayout;

const DefaultEntering = values => {
  'worklet';

  return {
    initialValues: {
      originX: values.targetOriginX,
      originY: values.targetOriginY,
      width: values.targetWidth,
      height: values.targetHeight
    },
    animations: {}
  };
};

exports.DefaultEntering = DefaultEntering;

const DefaultExiting = values => {
  'worklet';

  return {
    initialValues: {
      originX: values.currentOriginX,
      originY: values.currentOriginY,
      width: values.currentWidth,
      height: values.currentHeight
    },
    animations: {}
  };
};

exports.DefaultExiting = DefaultExiting;
//# sourceMappingURL=Default.js.map