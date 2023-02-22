import React from 'react'
import { useState } from 'react'
import Menu from './Menu'
import './Navar.css'

const Navar = () => {
  const [ showNavBlack, setShowNavBlack] = useState(false)
  const [ showModalMenu, setShowModalMenu ] = useState(false)

  const changeNavStyle = () => {
    if(window.scrollY >= 10 || showModalMenu )  {
      setShowNavBlack(true)
    } else {
      setShowNavBlack(false)
    }
  }
  //TODO: investigar que tanto recursos consume
  window.addEventListener('scroll', changeNavStyle)

  const changeShowModalMenu = () => {
    setShowModalMenu(!showModalMenu)
    if(!showModalMenu) {
      setShowNavBlack(true)
    } else {
      if(window.scrollY <= 10) {
        setShowNavBlack(false)
      }
    }
  }

  return (
    <nav className={showNavBlack ? 'active' :''}>
      <div className='nav--left'>
        <p>{`<Portafolio /> `} </p>
      </div>
      <div className='nav--right'>
        <Menu  showModalMenu={showModalMenu} changeShowModalMenu={changeShowModalMenu}/> 
      </div>
    </nav>
  )
}

export default Navar