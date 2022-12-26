import React from 'react'
import './AboutMe.css'
import photo from '../assets/photo_2022-10-19_11-37-00.jpg'
const AboutMe = () => {
  return (
    <div className='aboutMe-container'>
        <div className='profilePicture-container'>
        {/* <img  className='profilePicture' src={''} alt="Profile picture" /> */}
        <img  className='profilePicture' src={photo} alt="Profile picture" />
            
        </div>
        <div className='aboutMe-info--container'>
            <h2>Sobre mi</h2>
            <ul className='list-aboutMe'>
                <li>Perfil</li>
                <li>Estudios</li>
                <li>Skills</li>
            </ul>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis, magnam minima fugit quod tenetur saepe, doloremque, a corporis dolore dignissimos pariatur totam maxime? Excepturi laborum adipisci debitis earum eius.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe