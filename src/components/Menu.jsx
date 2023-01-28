import React from 'react'
import './Menu.css'

const Menu = () => {

  return (
    <div className='nav__menu--dropDown' id='pp'>

        <ul className='nav__menu--list'>
          <li><a href="#aboutMe">Sobre mi</a></li>
          <li><a href="#briefcase">Portafolio web</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        
    </div>
  )
}

export default Menu