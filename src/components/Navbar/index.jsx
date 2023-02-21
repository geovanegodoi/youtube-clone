import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { FirstSection, SecondSection, ThirdSection } from './Sections'
import { MenuIconButton } from '../Topbar/IconButtons'

const Navbar = ({ state, toggleNavbar }) => {
  return (
    <React.Fragment>
      <Drawer anchor="left" open={state} onClose={() => toggleNavbar(false)}>
        <Box
          onClick={() => toggleNavbar(false)}
          onKeyDown={() => toggleNavbar(false)}
          sx={{ width: 300 }}
        >
          <MenuIconButton
            sx={{
              display: 'inline-flex',
              paddingTop: 1,
              paddingLeft: 2,
            }}
          />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </Box>
      </Drawer>
    </React.Fragment>
  )
}

export default Navbar
