import React from 'react'
import Header from './components/header/header.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Footer from './components/footer/footer.jsx'


const App = () => {
  return (
    <>
      <Header id='header' />
      <Home id='home' />
      <About id='about' />
      <Portfolio id='portfolio' />
      <Footer id='footer' />
      
    </>

  )
}

export default App