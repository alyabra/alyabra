import React from 'react'
import './MenuIcon.css'
const MenuIcon = ({showModalMenu, changeShowModalMenu}) => {


  return (
    <div className={`menu-close-Icon ${showModalMenu && 'menu-close-Icon--switch'}`}
      onClick={changeShowModalMenu}
    >
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default MenuIcon