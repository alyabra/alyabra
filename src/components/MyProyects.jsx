import React from 'react'
import arrow from '../assets/chevron-down-circle-outline.svg'
import './MyProyects.css'
import Proyects from './Proyects'
// import '../utils/data.js'
const arrayProyect = [
    {
        title: 'Pasa Lista',
        url_site: 'https://alyabra.github.io/pasar-lista/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/PasaListaMovileView_rjdy5e.png',
        id: 1
    },
    {
        title: 'Lista de pendientes',
        url_site: 'https://alyabra.github.io/todos/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/Todos_Proyects_PIXEL5_m48kzi.png',
        id: 2
    },
    {
        title: 'Pasa Lista',
        url_site: 'https://alyabra.github.io/pasar-lista/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/PasaListaMovileView_rjdy5e.png',
        id: 3
    },
    {
        title: 'Lista de pendientes',
        url_site: 'https://alyabra.github.io/todos/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/Todos_Proyects_PIXEL5_m48kzi.png',
        id: 4
    },
    {
        title: 'Pasa Lista',
        url_site: 'https://alyabra.github.io/pasar-lista/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/PasaListaMovileView_rjdy5e.png',
        id: 5
    },
    {
        title: 'Lista de pendientes',
        url_site: 'https://alyabra.github.io/todos/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/Todos_Proyects_PIXEL5_m48kzi.png',
        id: 6
    },
    {
        title: 'Pasa Lista',
        url_site: 'https://alyabra.github.io/pasar-lista/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1674869717/briefcase/PasaListaMovileView_rjdy5e.png',
        id: 7
    }

]

const arrayProyectClones = [
    {
        title: 'Wikipedia',
        url_site: 'https://alyabra.github.io/wikipedia/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1676480048/briefcase/wikipediaCloneXL_hnwpor.png',
        id: 21
    },
    {
        title: 'Google',
        url_site: 'https://alyabra.github.io/google/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1676480043/briefcase/googleCloneXl_lni6qv.png',
        id: 22
    },
    {
        title: 'Prime viedo',
        url_site: 'https://alyabra.github.io/amazon/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1676480006/briefcase/AmazonClone-view-xl_piropj.png',
        id: 23
    },
    {
        title: 'Wikipedia',
        url_site: 'https://alyabra.github.io/wikipedia/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1676480048/briefcase/wikipediaCloneXL_hnwpor.png',
        id: 24
    },
    {
        title: 'Google',
        url_site: 'https://alyabra.github.io/google/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1676480043/briefcase/googleCloneXl_lni6qv.png',
        id: 25
    },
    {
        title: 'Prime viedo',
        url_site: 'https://alyabra.github.io/amazon/',
        url_img: 'https://res.cloudinary.com/dxslrgshk/image/upload/v1676480006/briefcase/AmazonClone-view-xl_piropj.png',
        id: 26
    },
]


const MyProyects = () => {
  return (
    <div>
        <section className='proyects-container' id='briefcase'>
                <h2 className='section-title'>Proyectos</h2>
            <div className='slider-proyects__container'>
                <div className='slider-proyects'>
                    <button className='slider-proyects-botton--left'>
                        <img  className='icon-arrow--down' src={arrow} alt="" />
                    </button>
                    {arrayProyect.map(data => <Proyects data={data}/>)}
                    <button className='slider-proyects-botton--right'>
                        <img  className='icon-arrow--down' src={arrow} alt="Button avanzar" />
                    </button>
                </div>
            </div>
        </section>
        <section className='proyects-container' id='briefcase'>
                <h2 className='section-title'>Proyectos Clones</h2>
            <div className='slider-proyects__container'>
                <div className='slider-proyects'>
                    <button className='slider-proyects-botton--left'>
                        <img  className='icon-arrow--down' src={arrow} alt="" />
                    </button>
                    {arrayProyectClones.map(data => <Proyects data={data}/>)}
                    <button className='slider-proyects-botton--right'>
                        <img  className='icon-arrow--down' src={arrow} alt="Button avanzar" />
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MyProyects