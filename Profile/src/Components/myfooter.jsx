import React from 'react'
import git from '../assets/images/github.png'
import link from '../assets/images/linkedin.png'
import '../App.css'

export default function myfooter() {
  return (
    <div className='footer'>
         <img className="linked-in" alt="Linked in" src={link} />
    <a href="https://github.com/Lucia151?tab=repositories" rel="noopener noreferrer" target="_blank">
      <img className="git-hub" alt="Git hub" src={git} />
    </a>
    </div>
  )
}
