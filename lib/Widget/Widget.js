"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Widget = function Widget() {
  var string = 'Widget';
  return _react.default.createElement("div", null, string, " Component");
};

Widget.propTypes = {};
var _default = Widget;
exports.default = _default;