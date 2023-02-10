import React from 'react'
import './IconSkill.css'

const IconSkill = ({source, name}) => {
  return (
    <div className='icon-container'>
        <img  className='logo' src={source} alt={`Logo ${name}`} />
        <p>{name}</p>
    </div>
  )
}

export default IconSkill