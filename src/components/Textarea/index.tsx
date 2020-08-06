/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { TextareaHTMLAttributes } from 'react';

import { TextareaDefault } from './style';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <TextareaDefault className="textarea-block">
      <label htmlFor={name}>
        {label}
        <textarea id={name} {...rest} />
      </label>
    </TextareaDefault>
  );
};

export default Textarea;
