import React from 'react';
import { ButtonSubmitStyled } from './SubmitStyles';
import { Button } from '@nextui-org/react';

const Submit = ({ children, onClick, disabled = false }) => {
  return (
    <Button
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      onClick={onClick}
      type='submit'
    >
      {children}
    </Button>
  );
};

export default Submit;