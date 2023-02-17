import React from 'react'
import logoTwitter from "../assets/logo-twitter.svg"
import logoLinkeding from "../assets/logo-linkedin.svg"
import logoGithub from "../assets/logo-github.svg"
import Icon from './Icon'
import './RedesSociales.css'
const RedesSociales = () => {
  return (
    <div className='socialMedia-container'>
        <h3 className='socialMedia-title'>Redes sociales</h3>
        <div className='icons-container'>
            <Icon source={logoTwitter} link={"https://www.linkedin.com/in/alyabra-alejandro-vargas-ch%C3%A1vez-664ba41a6/"} name={"Twitter"}/>
            <Icon source={logoLinkeding} link={"https://www.linkedin.com/in/alyabra-alejandro-vargas-ch%C3%A1vez-664ba41a6/"} name={"LinkedIn"}/>
            <Icon source={logoGithub} link={"https://github.com/alyabra/"} name={"Github"}/>
        </div>
  </div>
  )
}

export default RedesSociales