import React from 'react'
import './AboutMeDescription.css'
import SkillGrid from './SkillGrid'

const AboutMeDescription = ({state}) => {
  return (
    <div className='aboutMe-description'>
              {state === 'perfil' && 
                <div className='aboutMe-description-text aboutMe-description-text--initial' >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis, magnam minima fugit quod tenetur saepe, doloremque, a corporis dolore dignissimos pariatur totam maxime? Excepturi laborum adipisci debitis earum eius.
                </p>                
                </div>
              }
              {
                state === 'estudios' && 
                <div className='aboutMe-description-text'>
  
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quis, magnam minima fugit quod tenetur saepe, doloremque, a corporis dolore dignissimos pariatur totam maxime? Excepturi laborum adipisci debitis earum eius.
                  </p>
                  <p>aa</p>
                </div>
              }
              {
                state === 'skills' && 
                <div className='aboutMe-description-text'>
                  <SkillGrid />
                </div>
              }
            </div>
  )
}

export default AboutMeDescription