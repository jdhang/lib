import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({ options, value, onChange }) => (
  <select value={value} onChange={onChange} >
    {options.map(option => <option value={option.value}>{option.text}</option>)}
  </select>
);

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
