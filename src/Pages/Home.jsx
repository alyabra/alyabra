import React from 'react'
import arrow from '../assets/chevron-down-circle-outline.svg'

// import ListIcons from '../components/ListIcons'
import RedesSociales from '../components/RedesSociales'
import TypingEffect from '../components/TypingEffect'
import './Home.css'


const Home = ({myref}) => {

  return (
    <section className='home-container' id='home' ref={myref}>
      <div className='home-container--center'>
        <div className='home-container--center--first'>
          <div className='typingEffect-home-container'>
            <h1 className='home-title-name'>Alyabra Alejandro VC</h1>
            <TypingEffect />
          </div>
          <RedesSociales withTitle={false} withName={false} />
        </div>
        {/* <ListIcons /> */}
      </div>

      <div className='icon-arrow--down-container'>
        <a href="#aboutMe">
         <img  className='icon-arrow--down' src={arrow} alt="Boton avanzar siguiente sección" />
        </a>
      </div>
    </section>
  )
}

export default Home