import React from 'react';
import PropTypes from 'prop-types';

var TextInput = function TextInput(_ref) {
  var type = _ref.type,
      value = _ref.value,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder;
  return React.createElement("input", {
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder
  });
};

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};
TextInput.defaultProps = {
  type: 'text',
  value: ''
};
export default TextInput;