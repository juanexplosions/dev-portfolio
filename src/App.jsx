import { useState } from 'react'
import Hero from './components/hero/hero'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
    </>
  )
}

export default App
