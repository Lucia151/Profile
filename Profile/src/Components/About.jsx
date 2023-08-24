import React from 'react'
import Image1 from "../assets/images/mee.png"
import "../App.css"
import Myfooter from "../Components/myfooter";
// import ReadMore from "../Components/Readmore"
// import { Link, Router } from "react-router-dom";
// import ReadMore from './Readmore';

export default function About() {
  return (
    
        <div className="about-me">
          <img className="mee" alt="Rectangle" src={Image1} />
          <p className="my-name-is-zizile">
            My name is Zizile Ngcem, I'm a young and motivated software developer intern with a strong desire to
            transform innovative ideas into tangible digital solutions. Currently, I am pursuing a degree in IRM at
            Unisa. The opportunity of embarking on this internship journey excites me as it presents a chance to refine my
            skills and contribute to advanced projects.
          </p>
          <div className="overlap-group">
            <a href="Readmore()" className="text-wrapper">Read more</a>
            
              
         
               
          </div>
          <Myfooter />
        </div>
     
  )
}
