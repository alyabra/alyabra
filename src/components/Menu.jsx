import React from 'react'
import './Menu.css'
import MenuIcon from './MenuIcon'
const Menu = ({ changeShowModalMenu, showModalMenu, visibles }) => {
  const { isVisibleAboutMe,isVisisVisibleMyproyects, isVisisVisibleHome, isVisiisVisibleContact } = visibles
  return (
    <div className='icon-menu-container'>
      <MenuIcon changeShowModalMenu={changeShowModalMenu} showModalMenu={showModalMenu}/>
      <div className={`nav__menu--dropDown ${showModalMenu ? 'display' : ''}`} id='pp'>
          <ul className='nav__menu--list '>
            <li className={`nav__menu-item ${isVisisVisibleHome ? 'showBorderBottom' : ''}`}><a href="#home">Home</a></li>
            <li className={`nav__menu-item ${isVisibleAboutMe ? 'showBorderBottom' : ''}`}><a href="#aboutMe">Sobre mi</a></li>
            <li className={`nav__menu-item ${isVisisVisibleMyproyects ? 'showBorderBottom' : ''}`}><a href="#briefcase">Proyectos</a></li>
            <li className={`nav__menu-item ${isVisiisVisibleContact? 'showBorderBottom' : ''}`}><a href="#contact">Contacto</a></li>
          </ul>
      </div>      
    </div>

  )
}

export default Menu