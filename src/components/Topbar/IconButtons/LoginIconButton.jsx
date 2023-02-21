import React from 'react'
import Button from '@mui/material/Button'
import { AccountCircle } from '@mui/icons-material'

const LoginIconButton = () => (
  <Button startIcon={<AccountCircle />} variant="outlined" color="primary">
    Fazer Login
  </Button>
)

export default LoginIconButton
