import React from 'react';
import PropTypes from 'prop-types';

var SelectInput = function SelectInput(_ref) {
  var options = _ref.options,
      value = _ref.value,
      onChange = _ref.onChange;
  return React.createElement("select", {
    value: value,
    onChange: onChange
  }, options.map(function (option) {
    return React.createElement("option", {
      value: option.value
    }, option.text);
  }));
};

SelectInput.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func
};
SelectInput.defaultProps = {
  options: [],
  value: ''
};
export default SelectInput;