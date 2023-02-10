import React from 'react'
import './Icon.css'

const Icon = ({source, link, name}) => {
  return (
    <div className='icon-container'>
      <a href={link}>
        <img  className='logo' src={source} alt={`Logo ${name}`} />
        <p>{name}</p>
      </a>
    </div>
  )
}

export default Icon