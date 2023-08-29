import React, {useState} from 'react'
import "../style.css"
import { collection, addDoc} from "firebase/firestore/lite";
import { db } from "./firebase";
import github from '../assets/images/github.png';
import Linkedin from '../assets/images/linkedin.png';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendButton = async (e) => {
    
    await addDoc(collection(db, "Data"), {
      name,
      email,
      message,
    });
    //clear form
    setName("");
    setEmail("");
    setMessage("");

  }
  return (
    
    <div className="contact">
    <div className="overlap-group">
      <form onSubmit={sendButton} >
      <div className="text-wrapper-2">Name</div>
        <input type="text" className="rectangle-2" placeholder="Your Name" value ={name}  onchange={(e)=> setName(e.target.value)} required/>

        <div className="div">Email</div>
        <input type="email" className="rectangle" placeholder="Your Email" value ={email}  onchange={(e)=> setEmail(e.target.value)}required/>

        <div className="overlap">
          <div className="text-wrapper">Send</div>
        </div>
    
        <div className="text-wrapper-3">Send a message</div>
        <textarea type= "text" 
        rows={5}
        className="rectangle-3" placeholder="Your Message" name="subject"
        value={message}
        onChange = {(e) => setMessage(e.target.value)}>
          </textarea>
      </form>
    </div>
    <p className="p">Get in touch with me via media and email</p>
  </div>
  
      );
    };
    
 

