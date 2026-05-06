import { useState } from 'react'
import './App.css'
import { Home } from './Page'

function App() {
  return (
    <div className='antialiased [--pattern-fg:var(--color-neutral-950)]/5'>
      <div className="bg-background text-foreground h-screen">
        <Home />
      </div>
    </div>
  )
}

export default App