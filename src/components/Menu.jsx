import React from 'react'
// import { useState } from 'react'
import './Menu.css'
import MenuIcon from './MenuIcon'

const Menu = ({ changeShowModalMenu, showModalMenu }) => {

  return (
    <div className='icon-menu-container'>
      <MenuIcon changeShowModalMenu={changeShowModalMenu} showModalMenu={showModalMenu}/>
      <div className={`nav__menu--dropDown ${showModalMenu ? 'display' : ''}`} id='pp'>
          <ul className='nav__menu--list'>
          <li className='nav__menu-item'><a href="#home">Home</a></li>
            <li className='nav__menu-item'><a href="#aboutMe">Sobre mi</a></li>
            <li className='nav__menu-item'><a href="#briefcase">Proyectos</a></li>
            <li className='nav__menu-item'><a href="#contact">Contacto</a></li>
          </ul>
      </div>      
    </div>

  )
}

export default Menu