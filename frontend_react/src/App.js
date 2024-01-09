import React from 'react'
import { About, Brands, Contact, Experiences, Footer, Header, Skills, Testimonials, Works } from './container'
import {Navbar} from './components'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Experiences />
      <Footer />
    </div>
  )
}

export default App