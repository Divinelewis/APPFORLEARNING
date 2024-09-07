import { useRef } from 'react';
import './App.css'
import Aboutus from './components/Aboutus.jsx'
import Hero from './components/Hero.jsx'
import NavBar from './components/Navbar.jsx'

function App() {
  const aboutSectionRef = useRef(null);


  
  return (
    <>
      <NavBar aboutSectionRef={aboutSectionRef} />
      <Hero />
      <Aboutus aboutSectionRef={aboutSectionRef} />
    </>
  )
}

export default App