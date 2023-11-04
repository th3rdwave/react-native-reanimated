"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SensorType = void 0;
exports.useAnimatedSensor = useAnimatedSensor;

var _react = require("react");

var _core = require("../core");

var _NativeReanimated = _interopRequireDefault(require("../NativeReanimated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let SensorType;
exports.SensorType = SensorType;

(function (SensorType) {
  SensorType[SensorType["ACCELEROMETER"] = 1] = "ACCELEROMETER";
  SensorType[SensorType["GYROSCOPE"] = 2] = "GYROSCOPE";
  SensorType[SensorType["GRAVITY"] = 3] = "GRAVITY";
  SensorType[SensorType["MAGNETIC_FIELD"] = 4] = "MAGNETIC_FIELD";
  SensorType[SensorType["ROTATION"] = 5] = "ROTATION";
})(SensorType || (exports.SensorType = SensorType = {}));

function useAnimatedSensor(sensorType, userConfig) {
  const ref = (0, _react.useRef)({
    sensor: null,
    unregister: () => {// NOOP
    },
    isAvailable: false,
    config: {
      interval: 0
    }
  });

  if (ref.current.sensor === null) {
    ref.current.config = {
      interval: 'auto',
      ...userConfig
    };
    let sensorData;

    if (sensorType === SensorType.ROTATION) {
      sensorData = {
        qw: 0,
        qx: 0,
        qy: 0,
        qz: 0,
        yaw: 0,
        pitch: 0,
        roll: 0
      };
    } else {
      sensorData = {
        x: 0,
        y: 0,
        z: 0
      };
    }

    ref.current.sensor = (0, _core.makeMutable)(sensorData);
  }

  (0, _react.useEffect)(() => {
    ref.current.config = {
      interval: 'auto',
      ...userConfig
    };

    const id = _NativeReanimated.default.registerSensor(sensorType, ref.current.config.interval === 'auto' ? -1 : ref.current.config.interval, ref.current.sensor);

    if (id !== -1) {
      // if sensor is available
      ref.current.unregister = () => _NativeReanimated.default.unregisterSensor(id);

      ref.current.isAvailable = true;
    } else {
      // if sensor is unavailable
      ref.current.unregister = () => {// NOOP
      };

      ref.current.isAvailable = false;
    }

    return () => {
      ref.current.unregister();
    };
  }, [sensorType, userConfig]);
  return ref.current;
}
//# sourceMappingURL=useAnimatedSensor.js.map