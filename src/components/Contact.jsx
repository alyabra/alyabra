import React from 'react'
import './Contact.css'
import logoTwitter from "../assets/logo-twitter.svg"
import logoLinkeding from "../assets/logo-linkedin.svg"
import logoGithub from "../assets/logo-github.svg"
import Icon from './Icon'

const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
        <h2 className='section-title'>Contacto por redes sociales</h2>
        <div className='icons-container'>
          <Icon source={logoTwitter} link={"https://www.linkedin.com/in/alyabra-alejandro-vargas-ch%C3%A1vez-664ba41a6/"} name={"Twitter"}/>
          <Icon source={logoLinkeding} link={"https://www.linkedin.com/in/alyabra-alejandro-vargas-ch%C3%A1vez-664ba41a6/"} name={"LinkedIn"}/>
          <Icon source={logoGithub} link={"https://github.com/alyabra/"} name={"Github"}/>
        </div>
    </section>
  )
}

export default Contact
