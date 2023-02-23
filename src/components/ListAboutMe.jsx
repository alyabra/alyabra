import React from 'react'
import './ListAboutMe.css'

const ListAboutMe = ({ state, change }) => {
  return (
    <ul className='list-aboutMe'>
        <li className={`${state==='perfil' && 'activeItem'}`}>
          <button className=' list-aboutMe-button--initial list-aboutMe-button' onClick={() => change('perfil')}>Perfil
          </button>
        </li>
        <li className={`${state==='estudios' && 'activeItem'}`}><button className='list-aboutMe-button' onClick={() => change('estudios')}>Estudios</button></li>
        <li className={`${state==='skills' && 'activeItem'}`}><button  className='list-aboutMe-button' onClick={() => change('skills')}>Skills</button></li>
    </ul>
  )
}

export default ListAboutMe