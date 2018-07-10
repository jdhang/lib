import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ type, value, onChange, placeholder }) => (
  <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
);

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string<
  onChange: PropTypes.func
};

TextInput.defaultProps = {
  type: 'text',
  value: ''
};

export default TextInput;
