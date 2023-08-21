import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import background from './/assets/images/home.png'
import git from './/assets/images/github.png'
import link from './/assets/images/linkedin.png'
import Logo from './/assets/images/logo.png'

function App() {

  return (
    <div className="home">

      <div className="nav">
        <img className="logo" alt="Logo" src={Logo} />
        <ul className="navigation">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#experience" class="nav-link">Experience</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="mailto:zizile.ngcem@younglings.Africa" class="email">Contact</a></li>
        </ul>
      </div>
      <img className="image" alt="Rectangle" src={background} />
      <div className="Zizi"><h1> hi, I’m Zizile Ngcem</h1>
        <p>A junior Software Developer
          At Younglings</p>
      </div>


      <div className="overlap-group">
        <div className="text-wrapper">Download cv</div>
      </div>
      <img className="linked-in" alt="Linked in" src={link} />
      <a href="https://github.com/Lucia151?tab=repositories" rel="noopener noreferrer" target="_blank">
        <img className="git-hub" alt="Git hub" src={git} />
      </a>
    </div>
  );
};




export default App
