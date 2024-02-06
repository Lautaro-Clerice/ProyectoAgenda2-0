import React from 'react';
import {
  ErrorStyled,
  InputBorderStyle,
  InputLabelStyled,
  InputStyle,
} from './InputStyles';
import { ErrorMessage, Field } from 'formik';

const Input = ({ name, type, isError,label, placeholder}) => {
  return (
    <InputBorderStyle >
      <InputLabelStyled htmlFor={label}>{label} </InputLabelStyled>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        error={isError}
        id={label}
        as={InputStyle}
      />
      <ErrorMessage name={name} component={ErrorStyled} />
    </InputBorderStyle>
  );
};

export default Input;