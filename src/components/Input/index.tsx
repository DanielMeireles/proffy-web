/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { InputHTMLAttributes } from 'react';

import { InputDefault } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <InputDefault className="input-block">
      <label htmlFor={name}>
        {label}
        <input type="text" id={name} {...rest} />
      </label>
    </InputDefault>
  );
};

export default Input;
