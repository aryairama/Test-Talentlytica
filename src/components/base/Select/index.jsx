import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { styleSelect } from './style';
import DropdownIndicator from './DropdownIndicator ';

const Select = ({ options, value, onChange, onBlur, placeholder, ...props }) => {
  return (
    <ReactSelect
      components={{ DropdownIndicator }}
      styles={styleSelect}
      options={options}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      {...props}
    />
  );
};

Select.defaultProps = {
  options: [],
  id: '',
  placeholder: '',
};

Select.propTypes = {
  options: PropTypes.array,
  id: PropTypes.string.isRequired,
};

export default Select;
