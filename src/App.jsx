import { useState } from 'react'
import Hero from './components/hero/hero'
import ProjectsFeed from './components/projects/projects'
import Articles from './components/articles/articles'
import Footer from './components/footer/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <ProjectsFeed/>
      <Articles/>
      <Footer/>
    </>
  )
}

export default App
