import React from 'react'
import './Icon.css'

const Icon = ({source, link, name}) => {
  return (
    <div className='icon-container--withlink'>
      <a href={link}>
        <img  className='icon-container--withlink__logo ' src={source} alt={`Logo ${name}`} />
        <p>{name}</p>
      </a>
    </div>
  )
}

export default Icon