import React from 'react'
import './ProyectDescription.css'
import arrow from '../assets/chevron-down-circle-outline.svg'
import IconSkill from './IconSkill'
import logoReact from '../assets/react.svg'
import logoJavascript from '../assets/logo-javascript.svg'

function ProyectDescription({ url_site }) {
  return (
    <div className='proyect-description-container'>
          <span className='proyect-description-arrow-container'>
            <img  className='icon-arrow--up' src={arrow} alt="Flecha ver más" />
          </span>
          <p>Más info...</p>
          <div  className='proyect-description'>
           <div className='proyect-tech-list'>
              <IconSkill source={logoReact} name={"React"}/>
              <IconSkill source={logoJavascript} name={"JavaScript"}/>
            </div>
            {/* TODO: Evitar que cuando se de un solo click se abra el link y que se abra en una nueva pestaña */}
            <a href={url_site} target="_blank" rel="noreferrer noopener">Visitar sitio</a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus esse nulla vero placeat autem odio culpa inventore molestias sit.
            </p>

          </div> 
    </div>
  )
}

export default ProyectDescription