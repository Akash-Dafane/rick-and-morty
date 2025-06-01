import React from 'react'
import Button from '@mui/material/Button'
import type { ButtonProps } from '@mui/material/Button'

type CustomButtonProps = {
  label: string
  color: string
  variant: string
} & ButtonProps

const CustomButton: React.FC<CustomButtonProps> = ({ label, color, variant, ...props }) => {
  return (
    <Button variant={variant} color={color} {...props}>
      {label}
    </Button>
  )
}

export default CustomButton
