import React from 'react';
import { Field, ErrorMessage } from 'formik';

import {
  InputContainerStyled,
  ErrorMessageStyled,
} from './LoginStyles';
import { InputStyle } from '../../Generales/InputStyles';

const LoginInput = ({ name, type, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainerStyled>
          <InputStyle
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />
          <ErrorMessage name={field.name}>
            {message => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
};

export default LoginInput;