import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Container } from './components/Container'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <Container>
      <NavBar />
    </Container>
  )
}

export default App