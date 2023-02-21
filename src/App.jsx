import React from 'react'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'

const App = () => {
  const [navbarState, setNavbarState] = React.useState(false)

  function toggleNavbar(state) {
    setNavbarState(state)
  }

  return (
    <div className="App">
      <Topbar toggleNavbar={toggleNavbar} />
      <Navbar state={navbarState} toggleNavbar={toggleNavbar} />
    </div>
  )
}

export default App
