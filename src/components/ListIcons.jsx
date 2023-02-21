import React from 'react'
import Icon from './Icon'
import './ListIcons.css'

const ListIcons = ({sources}) => {
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