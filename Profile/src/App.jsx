import React from 'react'
import About from "./Components/About"
import Home from "./Components/Landing";
// import NavBar from './Components/NavBar'
import Experience from './Components/Experience';
import Projects from "./Components/Projects";
import "tailwindcss/tailwind.css"


function App() {

  return (
    <>
    {/* <NavBar/> */}
    <Home />
    <About />
    <Experience />
    <Projects/>

    </>
  );
};




export default App
