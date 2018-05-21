import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ type, value, onChange }) => (
  <input type={type} value={value} onChange={onChange} />
);

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

TextInput.defaultProps = {
  type: 'text',
  value: ''
};

export default TextInput;
