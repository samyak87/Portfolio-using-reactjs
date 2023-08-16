import React from 'react'
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Projects from './components/projects/Projects'
const App = () => {
  return (
   <>
    <Header />
    <Nav/>
    <About />
    <Experience/>
    {/* <Projects/> */}
   </>
    )
}

export default App
