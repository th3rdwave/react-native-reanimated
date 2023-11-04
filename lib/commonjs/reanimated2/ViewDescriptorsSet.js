"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeViewDescriptorsSet = makeViewDescriptorsSet;
exports.makeViewsRefSet = makeViewsRefSet;

var _react = require("react");

var _core = require("./core");

var _PlatformChecker = require("./PlatformChecker");

const scheduleUpdates = (0, _PlatformChecker.shouldBeUseWeb)() ? requestAnimationFrame : setImmediate;

function makeViewDescriptorsSet() {
  const ref = (0, _react.useRef)(null);

  if (ref.current === null) {
    const data = {
      batchToRemove: new Set(),
      tags: new Set(),
      waitForInsertSync: false,
      waitForRemoveSync: false,
      sharableViewDescriptors: (0, _core.makeMutable)([]),
      items: [],
      add: item => {
        if (data.tags.has(item.tag)) {
          return;
        }

        data.tags.add(item.tag);
        data.items.push(item);

        if (!data.waitForInsertSync) {
          data.waitForInsertSync = true;
          scheduleUpdates(() => {
            data.sharableViewDescriptors.value = data.items;
            data.waitForInsertSync = false;
          });
        }
      },
      remove: viewTag => {
        data.batchToRemove.add(viewTag);

        if (!data.waitForRemoveSync) {
          data.waitForRemoveSync = true;
          scheduleUpdates(() => {
            const items = [];

            for (const item of data.items) {
              if (data.batchToRemove.has(item.tag)) {
                data.tags.delete(item.tag);
              } else {
                items.push(item);
              }
            }

            data.items = items;
            data.sharableViewDescriptors.value = items;
            data.batchToRemove = new Set();
            data.waitForRemoveSync = false;
          });
        }
      },
      rebuildsharableViewDescriptors: sharableViewDescriptors => {
        data.sharableViewDescriptors = sharableViewDescriptors;
      }
    };
    ref.current = data;
  }

  return ref.current;
}

function makeViewsRefSet() {
  const ref = (0, _react.useRef)(null);

  if (ref.current === null) {
    const data = {
      items: new Set(),
      add: item => {
        if (data.items.has(item)) return;
        data.items.add(item);
      },
      remove: item => {
        data.items.delete(item);
      }
    };
    ref.current = data;
  }

  return ref.current;
}
//# sourceMappingURL=ViewDescriptorsSet.js.map