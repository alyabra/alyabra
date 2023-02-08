import React, { useEffect } from 'react'
import arrow from '../assets/chevron-down-circle-outline.svg'
import TypingEffect from '../components/TypingEffect'
import './Home.css'
const Home = () => {

  return (
    <div className='home-container'>
      <div>
        <h1>Alyabra Vargas</h1>
            <TypingEffect />
      </div>
      <div className='icon-arrow--down-container'>
        <a href="#aboutMe">
         <img  className='icon-arrow--down' src={arrow} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Home