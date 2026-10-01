import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'
import Information from './components/Information'
import Service from './components/Service'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
function App() {
  

  return (
    <div>
      <Navbar/>
      <MainBody/>
      <Information/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
