"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = function TextInput(_ref) {
  var type = _ref.type,
      value = _ref.value,
      onChange = _ref.onChange;
  return _react.default.createElement("input", {
    type: type,
    value: value,
    onChange: onChange
  });
};

TextInput.propTypes = {
  type: _propTypes.default.string,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func
};
TextInput.defaultProps = {
  type: 'text',
  value: ''
};
var _default = TextInput;
exports.default = _default;