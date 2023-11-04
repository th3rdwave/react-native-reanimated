"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class FrameCallbackRegistry {
  constructor() {
    _defineProperty(this, "nextCallbackId", 0);

    _defineProperty(this, "frameCallbackRegistry", new Map());

    _defineProperty(this, "frameCallbackActive", new Set());

    _defineProperty(this, "isFrameCallbackRunning", false);
  }

  runAnimation() {
    const loop = () => {
      this.frameCallbackActive.forEach(key => {
        const callback = this.frameCallbackRegistry.get(key);
        callback();
      });

      if (this.frameCallbackActive.size > 0) {
        requestAnimationFrame(loop);
      } else {
        this.isFrameCallbackRunning = false;
      }
    };

    if (!this.isFrameCallbackRunning) {
      requestAnimationFrame(loop);
      this.isFrameCallbackRunning = true;
    }
  }

  registerFrameCallback(callback) {
    if (!callback) {
      return -1;
    }

    const callbackId = this.nextCallbackId;
    this.nextCallbackId++;
    this.frameCallbackRegistry.set(callbackId, callback);
    return callbackId;
  }

  unregisterFrameCallback(frameCallbackId) {
    this.manageStateFrameCallback(frameCallbackId, false);
    this.frameCallbackRegistry.delete(frameCallbackId);
  }

  manageStateFrameCallback(frameCallbackId, state) {
    if (frameCallbackId === -1) {
      return;
    }

    if (state) {
      this.frameCallbackActive.add(frameCallbackId);
      this.runAnimation();
    } else {
      this.frameCallbackActive.delete(frameCallbackId);
    }
  }

}

exports.default = FrameCallbackRegistry;
//# sourceMappingURL=FrameCallbackRegistry.js.map