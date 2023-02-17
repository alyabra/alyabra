import React from 'react'
import './Contact.css'
import FormContact from './FormContact'
import RedesSociales from './RedesSociales'

const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
        <h2 className='section-title'>Contacto</h2>
        <FormContact />
        <RedesSociales />
    </section>
  )
}
export default Contact
