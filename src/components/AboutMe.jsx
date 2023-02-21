import React from 'react'
import './AboutMe.css'
import photo from '/src/assets/images/photo_2022-10-19_11-37-00_pzes6q.jpg'
import { useState } from 'react'
import AboutMeBook from './AboutMeBook'


const AboutMe = () => {
  const [state, setState] = useState('perfil')
  const change = (stateOn) => {
      setState(stateOn)
  }  
  return (
    <section className='aboutMe-container' id='aboutMe'>
        <h2 className='section-title aboutMe-info--container-title'>Sobre mi</h2>
        <div className='profilePicture-container'>
        <img  className='profilePicture' src={photo} alt="Profile picture" />
        </div>
            <AboutMeBook />
    </section>
  )
}

export default AboutMe