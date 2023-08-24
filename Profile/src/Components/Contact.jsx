import React from 'react'
import "../style.css"
import github from '../assets/images/github.png';
import Linkedin from '../assets/images/linkedin.png';
export default function Contact() {
  return (
    
    <div className="contact">
    <div className="overlap-group">
      <form>
        <div className="overlap">
          <div className="text-wrapper">Send</div>
        </div>
        <div className="div">Email</div>
        <input type="email" className="rectangle" placeholder="Your Email" />
        <div className="text-wrapper-2">Name</div>
        <input type="text" className="rectangle-2" placeholder="Your Name" />
        <div className="text-wrapper-3">Send a message</div>
        <textarea className="rectangle-3" placeholder="Your Message"></textarea>
      </form>
    </div>
    <p className="p">Get in touch with me via media and email</p>
  </div>
  
      );
    };
    
 

