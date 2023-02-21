import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import {
  MenuIconButton,
  VideoIconButton,
  AppsIconButton,
  MoreIconButton,
  LoginIconButton,
} from './IconButtons'

const Topbar = ({ toggleNavbar }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <MenuIconButton
            sx={{ display: 'inline-flex', flexGrow: 1 }}
            toggleNavbar={toggleNavbar}
          />
          <VideoIconButton />
          <AppsIconButton />
          <MoreIconButton />
          <LoginIconButton />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Topbar
