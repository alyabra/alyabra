import React from 'react'
import './Proyects.css'

const Proyects = ({ data }) => {
    const {title, url_site, url_img} = data
  return (
    <div className='proyect'>
        <h3 className='proyect-title'>{title}</h3>
        <img className='image-proyect-desktop' src={url_img} alt={title} />
        <a href={url_site}>Visitar sitio</a>
    </div>
  )
}

export default Proyects