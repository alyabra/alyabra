import React from 'react'
import './Contact.css'
import FormContact from '../components/FormContact'
import RedesSociales from '../components/RedesSociales'

const Contact = ({myref}) => {
  return (
    <section className='contact-container' id='contact' ref={myref}>
        <h2 className='section-title'>Contacto</h2>
        <FormContact />
        <RedesSociales withName={true} withTitle={true} rowDirection={true}/>
    </section>
  )
}
export default Contact
