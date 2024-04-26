import { useState } from 'react'
import Hero from './components/hero/hero'
import ProjectsFeed from './components/projects-feed/projects'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <ProjectsFeed/>
    </>
  )
}

export default App
