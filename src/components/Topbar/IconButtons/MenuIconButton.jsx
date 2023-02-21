import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import YouTubeLogo from '../../../assets/youtube.svg'
import TopbarIconButton from '../TopbarIconButton'
import { Box } from '@mui/material'

const MenuIconButton = ({ sx, toggleNavbar }) => (
  <Box sx={sx} onClick={() => toggleNavbar && toggleNavbar(true)}>
    <TopbarIconButton icon={<MenuIcon />} />
    <img src={YouTubeLogo} style={{ width: 90 }} />
  </Box>
)

export default MenuIconButton
