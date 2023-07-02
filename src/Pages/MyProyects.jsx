import React from 'react'
import './MyProyects.css'
import SliderProyects from '../components/SliderProyects'
import { arrayProyect, arrayProyectClones } from '../utils/data'

const MyProyects = ({ myref }) => {
  return (
    <section id='briefcase' ref={myref}>
        <h2 className='section-title'>Proyectos</h2>
        <div className='proyects-container'>
            <h3>Aplicaciones</h3>
            <SliderProyects arrayProyects={arrayProyect}/>
        </div>

        <div className='proyects-container'>
            <h3>Proyectos Clones</h3>
            <SliderProyects arrayProyects={arrayProyectClones}/>    
        </div>
    </section>
  )
}

export default MyProyects