"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MutableValue = _interopRequireDefault(require("./MutableValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Mapper {
  constructor(module, mapper) {
    let inputs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    let outputs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "inputs", void 0);

    _defineProperty(this, "outputs", void 0);

    _defineProperty(this, "mapper", void 0);

    _defineProperty(this, "dirty", true);

    this.id = Mapper.MAPPER_ID++;
    this.inputs = this.extractMutablesFromArray(inputs);
    this.outputs = this.extractMutablesFromArray(outputs);
    this.mapper = mapper;

    const markDirty = () => {
      this.dirty = true;
      module.maybeRequestRender();
    };

    this.inputs.forEach(input => {
      input.addListener(markDirty);
    });
  }

  execute() {
    this.dirty = false;
    this.mapper();
  }

  extractMutablesFromArray(array) {
    const res = [];

    function extractMutables(value) {
      if (value == null) {// return;
      } else if (value instanceof _MutableValue.default) {
        res.push(value);
      } else if (Array.isArray(value)) {
        value.forEach(v => extractMutables(v));
      } else if (typeof value === 'object') {
        Object.keys(value).forEach(key => {
          extractMutables(value[key]);
        });
      }
    }

    extractMutables(array);
    return res;
  }

}

exports.default = Mapper;

_defineProperty(Mapper, "MAPPER_ID", 1);
//# sourceMappingURL=Mapper.js.map