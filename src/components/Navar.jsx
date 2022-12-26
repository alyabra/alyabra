import React from 'react'
import './Navar.css'

const Navar = () => {
  return (
    <nav>
      <div className='left-nav'>
        <p> {'<Bienvenido />'}</p>
      </div>
      <div className='right-nav'>
        <ul className='menu-list'>
          <li>Inicio</li>
          <li>Sobre mi</li>
          <li>Portafolio web</li>
          <li>Contacto</li>
        </ul>
        <div className='icon-menu-container'>
          <ion-icon name="grid-outline"></ion-icon>
        </div>
      </div>
    </nav>
  )
}

export default Navar