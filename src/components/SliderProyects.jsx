import React from 'react'
import Proyect from './Proyect'
import arrow from '../assets/chevron-down-circle-outline.svg'
import './SliderProyects.css'
import { useRef } from 'react'

const SliderPoryects = ({arrayProyects}) => {
  // Medir el ancho del slider para avanzar lo nevesario con el boton
  const slider = useRef()
  const diplaceSlider = (dx) => {
    slider.current.scrollBy({
      left: dx*slider?.current?.clientWidth*0.5, top: 0, behavior: 'smooth'})

  }
  return (
    <div className='slider-proyects__container'>
        <button onClick={() => diplaceSlider(-1)} className='slider-proyects-botton--left'>
          <img  className='icon-arrow--down' src={arrow} alt="Boton retroceder" />
        </button>
        <div ref={slider} className='slider-proyects'>
            {arrayProyects.map(data => <Proyect data={data} key={data.id} />)}
        </div>
        <button onClick={() => diplaceSlider(1)}  className='slider-proyects-botton--right'>
          <img  className='icon-arrow--down' src={arrow} alt="Boton avanzar" />
        </button>
    </div>
  )
}

export default SliderPoryects