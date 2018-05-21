"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectInput = function SelectInput(_ref) {
  var options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange;
  return _react.default.createElement("select", {
    type: type,
    value: value,
    onChange: onChange
  }, options.map(function (option) {
    return _react.default.createElement("option", {
      value: option.value
    }, option.text);
  }));
};

SelectInput.propTypes = {
  options: _propTypes.default.array,
  value: _propTypes.default.string,
  onChange: _propTypes.default.func
};
SelectInput.defaultProps = {
  options: [],
  value: ''
};
var _default = SelectInput;
exports.default = _default;