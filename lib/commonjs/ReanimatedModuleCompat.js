"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  async disconnectNodeFromView() {// noop
  },

  async attachEvent(_viewTag, _eventName, _nodeID) {// noop
  },

  async detachEvent(_viewTag, _eventName, _nodeID) {// noop
  },

  async createNode(_nodeID, _config) {// noop
  },

  async dropNode(_nodeID) {// noop
  },

  async configureProps(_nativeProps, _uiProps) {// noop
  },

  async disconnectNodes() {// noop
  },

  async addListener() {// noop
  },

  async removeListeners() {// noop
  },

  async removeAllListeners() {// noop
  },

  async animateNextTransition() {
    console.warn('Reanimated: animateNextTransition is unimplemented on current platform');
  }

};
exports.default = _default;
//# sourceMappingURL=ReanimatedModuleCompat.js.map