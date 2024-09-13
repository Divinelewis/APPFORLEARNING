import { useRef } from 'react';
import './App.css'
import Aboutus from './components/Aboutus.jsx'
import Hero from './components/Hero.jsx'
import NavBar from './components/Navbar.jsx'
import Footer from './components/footer.jsx';

// Importing Fonts

function App() {
  const aboutSectionRef = useRef(null);


  
  return (
    <>
      <NavBar aboutSectionRef={aboutSectionRef} />
      <Hero />
      <Aboutus aboutSectionRef={aboutSectionRef} />
      <Footer />
    </>
  )
}

export default App