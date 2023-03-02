import React from 'react'
import './AboutMe.css'
// import photo from '/src/assets/images/photo_2022-10-19_11-37-00_pzes6q.jpg'
// import photo from 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674931329/briefcase/photo_2022-10-19_11-37-00_pzes6q.jpg'
// https://res.cloudinary.com/dxslrgshk/image/upload/v1674931329/briefcase/photo_2022-10-19_11-37-00_pzes6q.jpg

import AboutMeBook from '../components/AboutMeBook'
import { useEffect } from 'react'
useEffect

const AboutMe = ({ myref }) => { 
  const photo = 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674931329/briefcase/photo_2022-10-19_11-37-00_pzes6q.jpg'
  return (
    <section className='aboutMe-container' id='aboutMe' ref={myref} >
        <h2 className='section-title aboutMe-info--container-title'>Sobre mi</h2>
        <div className='aboutMe-content'>
          <div className='aboutMe-content--container'>
            <img  className='profilePicture' src={photo} alt="Foto de perfil" />
          </div>
          <div className='aboutMe-content--container'>
            <AboutMeBook />
          </div>
        </div>
    </section>
  )
}

export default AboutMe