import React from 'react'
import { useState } from 'react'
import Menu from './Menu'
import './Navar.css'

const Navar = () => {
  const [scrolled, setScrolled] = useState(false)
 
  const changeNavStyle = () => {

    if(window.scrollY >= 10) {
      setScrolled(true)
    }
    if(window.scrollY <= 10) {
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', changeNavStyle)

  return (
    <nav className={scrolled ? 'active' :''}>
      <div className='left-nav'>
        <p>Hola    :3 </p>
      </div>
      <div className='right-nav'>
        <div className='icon-menu-container'>
          <ion-icon name="grid-outline"></ion-icon>
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navar