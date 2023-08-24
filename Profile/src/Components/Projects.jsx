import React from 'react'
import "../App.css"
import imageb from "../assets/images/bank.png";
import imageC from "../assets/images/chatApp.png";
import imageT from "../assets/images/calculator.png";

export default function Projects() {
  return (
    
    <div className="projects">
      <a href="https://github.com/Lucia151/TaxCalculation" rel="noopener noreferrer" target="_blank">
        
        <img className="Tax" alt="Rectangle" src={imageT}/>
      </a>
      <div className="frame">
        <img className="chat" alt="Rectangle" src={imageC} />
      </div>
      <a href="https://github.com/Lucia151/Bank-app" rel="noopener noreferrer" target="_blank">
      <img className="bank" alt="Rectangle" src={imageb} />
      </a>
      <div className="overlap">
        <div className="overlap-group">
          <div className="text-wrapper">Java</div>
        </div>
        <div className="div">Bank App</div>
        <div className="div-wrapper">
          <div className="text-wrapper-2">HTML</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-3">CSS</div>
        </div>
      </div>
      <div className="overlap-3">
        <div className="text-wrapper-4">Chat App</div>
        <div className="overlap-4">
          <div className="text-wrapper-5">JavaScript</div>
        </div>
        <div className="overlap-5">
          <div className="text-wrapper-6">HTML</div>
        </div>
        <div className="overlap-6">
          <div className="text-wrapper-7">CSS</div>
        </div>
      </div>
      <div className="overlap-group-2">
        <div className="overlap-7">
          <div className="text-wrapper-8">Python</div>
        </div>
        <div className="text-wrapper-9">Tax Calculator</div>
        <div className="overlap-8">
          <div className="text-wrapper-10">HTML</div>
        </div>
        <div className="overlap-9">
          <div className="text-wrapper-11">CSS</div>
        </div>
      </div>
      <img className="download-removebg" alt="Download removebg" src="download-1-removebg-preview-4.png" />
      <img className="download-removebg-2" alt="Download removebg" src="download-1-removebg-preview-3.png" />
    </div>
 
  )
}
