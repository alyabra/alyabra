import React from 'react'
import './AboutMe.css'
// import photo from '../assets/photo_2022-10-19_11-37-00.jpg'
import { useState } from 'react'
import ListAboutMe from './ListAboutMe'
import AboutMeDescription from './AboutMeDescription'
import AboutMeBook from './AboutMeBook'


const AboutMe = () => {
  const [state, setState] = useState('perfil')
  const change = (stateOn) => {
      setState(stateOn)
  }  
  const photo = 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674931329/briefcase/photo_2022-10-19_11-37-00_pzes6q.jpg'
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