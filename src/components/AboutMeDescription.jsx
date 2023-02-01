import React from 'react'
import './AboutMeDescription.css'

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
                  <ul className='aboutMe-description-list'>
                    <li>HTML, CSS y JavaScript</li>
                    <li>
                      React
                      <ul>
                        <li>Hooks</li>
                        <li>React-router-dom</li>
                      </ul>
                    </li>
                    <li>Tailwind CSS</li>
                    <li>MySQL</li>
                    <li>Postgrest</li>
                    {/* <li>MongoDB</li>
                    <li>Docker</li> */}
                  
                  </ul>
                </div>
              }
            </div>
  )
}

export default AboutMeDescription