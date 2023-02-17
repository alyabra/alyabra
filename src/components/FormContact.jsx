import React from 'react'
import './FormContact.css'

const FormContact = () => {
  return (
    <div className='formContacta-container'>
      <form>
        <p className='formContacta-instructions'>Enviame un correo y te contactaré a la brevedad </p>
        <div className='formContact-field'>
            <label htmlFor="">Correo</label>
            <input type="email" />
        </div>
        <div className='formContact-field'>
            <label htmlFor="">Mensage</label>
            <textarea />
        </div>
        <button className='formContacta-button--submit' type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default FormContact