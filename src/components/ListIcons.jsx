import React from 'react'
import Icon from './Icon'
import './ListIcons.css'

const ListIcons = () => {
  // TODOS: que venga de utils
  const sources = ['/src/assets/logo-docker.svg', '/src/assets/logo-javascript.svg', '/src/assets/Tailwind_CSS_Logo.svg', '/src/assets/logo-sass-pink.svg', '/src/assets/Postgresql_elephant.svg', '/src/assets/logo-vite.svg', '/src/assets/react.svg', '/src/assets/logo-docker.svg', '/src/assets/logo-javascript.svg', '/src/assets/Tailwind_CSS_Logo.svg', '/src/assets/logo-sass-pink.svg', '/src/assets/Postgresql_elephant.svg', '/src/assets/logo-vite.svg', '/src/assets/react.svg']

  return (
    <div className='list-container--parent'>
        <div className='list-container'>
        {sources.map(source => 
            <Icon source={source}/>
        )}
        </div>
    </div>
  )
}

export default ListIcons