import React from 'react'
// import pasaListaMobileView from '../assets/PasaListaMovileView.png'
// import todoListMobileView from '../assets/Todos_Proyects_PIXEL5.png'
import './MyProyects.css'

const MyProyects = () => {
    const pasaListaMobileView = 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/PasaListaMovileView_rjdy5e.png'
    const todoListMobileView = 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/Todos_Proyects_PIXEL5_m48kzi.png'
  return (
    <section className='proyects-container' id='briefcase'>
            <h2>Proyectos</h2>
        <div className='slider-proyects'>
            <div className='proyect'>
                <h3>Pasa lista</h3>
                <img className='image-proyect-desktop' src={pasaListaMobileView} alt="Imagen aplicacion pasar lista" />
                <a href="https://alyabra.github.io/pasar-lista/">Visitar sitio</a>
            </div>
            <div className='proyect'>
                <h2>Todos</h2>
                <img className='image-proyect-desktop' src={todoListMobileView} alt="Imagen aplicacion pasar lista" />
                <a href="https://alyabra.github.io/todos/">Visitar sitio</a>
            </div>
            <div className='proyect'>
                <h2>Todos</h2>
                <img className='image-proyect-desktop' src={todoListMobileView} alt="Imagen aplicacion pasar lista" />
            </div>
            <div className='proyect'>
                <h2>Escuela en linea</h2>
                <img className='image-proyect-desktop' src={todoListMobileView} alt="Imagen aplicacion pasar lista" />
            </div>
        </div>
    </section>
  )
}

export default MyProyects