import React from 'react'
import { useState } from 'react'
import './Menu.css'
import MenuIcon from './MenuIcon'

const Menu = () => {
  const [showModalMenu, setShowModalMenu ] = useState(false)
  const changeShowModalMenu = () => {
    setShowModalMenu(!showModalMenu)
  }
  return (
    <div>
      <MenuIcon changeShowModalMenu={changeShowModalMenu} showModalMenu={showModalMenu}/>
      <div className={`nav__menu--dropDown ${showModalMenu && 'display'}`} id='pp'>
          <ul className='nav__menu--list'>
            <li><a href="#aboutMe">Sobre mi</a></li>
            <li><a href="#briefcase">Portafolio web</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
      </div>      
    </div>

  )
}

export default Menu