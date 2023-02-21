import React from 'react'
import NavbarSection from '../NavbarSection'
import { Home, Whatshot, Subscriptions } from '@mui/icons-material'

const sectionElements = [
  {
    icon: <Home />,
    text: 'Home',
  },
  {
    icon: <Whatshot />,
    text: 'Whats Hot',
  },
  {
    icon: <Subscriptions />,
    text: 'Subscriptions',
  },
]

const FirstSection = () => <NavbarSection elements={sectionElements} />

export default FirstSection
