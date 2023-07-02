import React from 'react'
import './Proyect.css'
import ProyectDescription from './ProyectDescription'

const Proyect = ({ data }) => {
    const {title, url_site, url_img, description} = data
    // console.log(data)
  return (
    <div className='proyect'>
        <h3 className='proyect-title'>{title}</h3>
        <img className='image-proyect-desktop' src={url_img} alt={title} />
        <ProyectDescription url_site={url_site} description={description}/>
    </div>
  )
}

export default Proyect