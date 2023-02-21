import React from 'react'
import Proyects from './Proyects'
import arrow from '../assets/chevron-down-circle-outline.svg'
import { useRef } from 'react'

const SliderPoryects = ({arrayProyects}) => {
  const slider = useRef()
  const diplaceSlider = (dx) => {
    // console.log(dx*slider?.current?.clientWidth)
    slider.current.scrollBy({
      left: dx*slider?.current?.clientWidth*0.5, top: 0, behavior: 'smooth'})
    // slider.scrollTo(0, dx*slider?.current?.clientWidth)

  }
  return (
    <div className='slider-proyects__container'>
        <div ref={slider} className='slider-proyects'>
            <button onClick={() => diplaceSlider(-1)} className='slider-proyects-botton--left'>
                <img  className='icon-arrow--down' src={arrow} alt="Button retroceder" />
            </button>
            {arrayProyects.map(data => <Proyects data={data} key={data.id} />)}
            <button onClick={() => diplaceSlider(1)}  className='slider-proyects-botton--right'>
                <img  className='icon-arrow--down' src={arrow} alt="Button avanzar" />
            </button>
        </div>
    </div>
  )
}

export default SliderPoryects