/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { SelectHTMLAttributes } from 'react';

import { SelectDefault } from './style';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <SelectDefault className="select-block">
      <label htmlFor={name}>
        {label}
        <select id={name} {...rest}>
          <option value="" disabled selected hidden>
            Selecione uma opção
          </option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </label>
    </SelectDefault>
  );
};

export default Select;
