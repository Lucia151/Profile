import React from 'react'
import About from "./Components/About"
import Home from "./Components/Landing";
// import NavBar from './Components/NavBar'
// import "tailwindcss/tailwind.css"
import Experience from './Components/Experience';
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";



function App() {

  return (
    <>
    {/* <NavBar/> */}
    <Home />
    <About />
    <Experience />
    <Projects/>
    <Contact/>

    </>
  );
};




export default App
