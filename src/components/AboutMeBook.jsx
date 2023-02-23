import React from 'react'
import { useState } from 'react'
import AboutMeDescription from './AboutMeDescription'
import ListAboutMe from './ListAboutMe'
import './AboutMeBook.css'

const AboutMeBook = () => {

  const [state, setState] = useState('perfil')
  const change = (stateOn) => {
      setState(stateOn)
  }  
return (
    <div className='aboutMeBook-container'>
        <ListAboutMe state={state} change={change}/>
        <AboutMeDescription state={state}/>
    </div>
  )
}

export default AboutMeBook