import React from 'react'
import './Icon.css'

const Icon = ({source}) => {
  return (
    <div>
        <img src={source} alt="logo facebook" />
        <p>Facebook</p>
    </div>
  )
}

export default Icon