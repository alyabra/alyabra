import React from 'react'
import './AboutMe.css'
// import photo from '../assets/photo_2022-10-19_11-37-00.jpg'
import { useState } from 'react'
import ListAboutMe from './ListAboutMe'
import AboutMeDescription from './AboutMeDescription'


const AboutMe = () => {
  const [state, setState] = useState('perfil')
  const change = (stateOn) => {
      setState(stateOn)
  }  
  const photo = 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674931329/briefcase/photo_2022-10-19_11-37-00_pzes6q.jpg'
  return (
    <section className='aboutMe-container' id='aboutMe'>
        <div className='profilePicture-container'>
        <img  className='profilePicture' src={photo} alt="Profile picture" />
            
        </div>
        <div className='aboutMe-info--container'>
            <h2>Sobre mi</h2>
            <ListAboutMe state={state} change={change} />
            <AboutMeDescription state={state}/>
        </div>
    </section>
  )
}

export default AboutMe