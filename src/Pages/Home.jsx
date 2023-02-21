import React, { useEffect } from 'react'

import arrow from '../assets/chevron-down-circle-outline.svg'

import ListIcons from '../components/ListIcons'
import RedesSociales from '../components/RedesSociales'
import TypingEffect from '../components/TypingEffect'
import './Home.css'


const Home = () => {
  const sources = ['/src/assets/logo-docker.svg', '/src/assets/logo-javascript.svg', '/src/assets/Tailwind_CSS_Logo.svg', '/src/assets/logo-sass-pink.svg', '/src/assets/Postgresql_elephant.svg', '/src/assets/logo-vite.svg', '/src/assets/react.svg', '/src/assets/logo-docker.svg', '/src/assets/logo-javascript.svg', '/src/assets/Tailwind_CSS_Logo.svg', '/src/assets/logo-sass-pink.svg', '/src/assets/Postgresql_elephant.svg', '/src/assets/logo-vite.svg', '/src/assets/react.svg']

  return (
    <section className='home-container' id='home'>
      <div className='home-container-center'>
        <RedesSociales withTitle={false} withName={false}/>
        <div className='typingEffect-home-container'>
          <h1>Alyabra Alejandro VC</h1>
          <TypingEffect />
        </div>
        <ListIcons sources={sources}></ListIcons>
      </div>

      <div className='icon-arrow--down-container'>
        <a href="#aboutMe">
         <img  className='icon-arrow--down' src={arrow} alt="" />
        </a>
      </div>
    </section>
  )
}

export default Home