import React from 'react'
import NavbarSection from '../NavbarSection'
import { VideoLibrary, History, WatchLater } from '@mui/icons-material'

const sectionElements = [
  {
    icon: <VideoLibrary />,
    text: 'Library',
  },
  {
    icon: <History />,
    text: 'History',
  },
  {
    icon: <WatchLater />,
    text: 'Watch Later',
  },
]

const SecondSection = () => <NavbarSection elements={sectionElements} />

export default SecondSection
