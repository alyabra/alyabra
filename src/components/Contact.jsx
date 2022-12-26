import React from 'react'
import './Contact.css'
import logoFacebook from "../assets/logo-facebook.svg"
import logoTwitter from "../assets/logo-twitter.svg"
import logoLinkeding from "../assets/logo-linkedin.svg"
import logoGoogle from "../assets/logo-google.svg"
import Icon from './Icon'

const Contact = () => {
  return (
    <div className='contact-container'>
        <h3>Redes sociales</h3>
        <div className='icons-container'>
          <Icon source={logoFacebook}/>
          <Icon source={logoTwitter}/>
          <Icon source={logoLinkeding}/>
          <Icon source={logoGoogle}/>
        </div>
    </div>
  )
}

export default Contact
