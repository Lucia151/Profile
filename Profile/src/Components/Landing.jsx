import background from '../assets/images/Home.png'
import Logo from '../assets/images/logo.png'
import "../App.css"
import React from 'react'
import Myfooter from "../Components/myfooter";


export default function index() {
  return (

    <div className="home1">
<div className='home'>
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
        <p className="para">A junior Software Developer
          At Younglings</p>

          
      {/* <div className="button">
        <div className="text-wrapper">Download cv</div>
      </div> */}
     
      </div>

</div>
      <Myfooter />
    </div>
  )
}
