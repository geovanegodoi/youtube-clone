import { IconButton } from '@mui/material'
import React from 'react'

const TopbarIconButton = ({ icon }) => (
  <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
    {icon}
  </IconButton>
)

export default TopbarIconButton
