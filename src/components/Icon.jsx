import React from 'react'
import './Icon.css'

const Icon = ({source, link, name}) => {
  return (
    <div>
      <a href={link}>
        <img  className='logo' src={source} alt="logo facebook" />
        <p>{name}</p>
      </a>
    </div>
  )
}

export default Icon