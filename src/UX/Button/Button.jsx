import React from 'react'
import { ButtonStyles } from './ButtonStyles'

const Button = ({children}) => {
  return (
    <ButtonStyles>
        {children}
    </ButtonStyles>
  )
}

export default Button