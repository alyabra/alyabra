import React from 'react'
import './IconSkill.css'

const IconSkill = ({source, name}) => {
  return (
    <div className='icon-container'>
      <div className='icon-container__logo-container'>
        <img  className='logo' src={source} alt={`Logo ${name}`} />
      </div>
        <p>{name}</p>
    </div>
  )
}

export default IconSkill