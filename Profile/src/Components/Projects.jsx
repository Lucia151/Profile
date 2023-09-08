import React from 'react'
import "../App.css"
import imageb from "../assets/images/bank.png";
import imageC from "../assets/images/chatApp.png";
import imageT from "../assets/images/calculator.png";
import Myfooter from "../Components/myfooter";


export default function Projects() {
  return (
    
    <div className="projects">
  {/* Card 1 */}
  <div className="card">
    <a href="https://github.com/Lucia151/TaxCalculation" rel=" " target="_blank">
      <img className="card-image" alt="Tax Calculator" src={imageT} />
    </a>
    <div className="card-text">
      <div className="text-wrapper">Java</div>
      <div className="text-wrapper-9">Tax Calculator</div>
      <div className="div-wrapper">
        <div className="text-wrapper-10">HTML</div>
      </div>
      <div className="overlap-9">
        <div className="text-wrapper-11">CSS</div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="card">
    <a href="https://github.com/Lucia151/Bank-app" rel="noopener noreferrer" target="_blank">
      <img className="card-image" alt="Bank App" src={imageb} />
    </a>
    <div className="card-text">
      <div className="text-wrapper">Java</div>
      <div className="text-wrapper-2">Bank App</div>
      <div className="div-wrapper">
        <div className="text-wrapper-10">HTML</div>
      </div>
      <div className="overlap-2">
        <div className="text-wrapper-3">CSS</div>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="card">
    <a href="#" rel="noopener noreferrer" target="_blank">
      <img className="card-image" alt="Chat App" src={imageC} />
    </a>
    <div className="card-text">
      <div className="text-wrapper-5">JavaScript</div>
      <div className="text-wrapper-6">HTML</div>
      <div className="overlap-6">
        <div className="text-wrapper-7">CSS</div>
      </div>
    </div>
  </div>
</div>

 
  )
}

