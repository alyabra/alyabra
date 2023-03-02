import React from 'react'
import './FormContact.css'

const FormContact = () => {
  return (
    <div className='formContact-container'>
      <form>
        <p className='formContact-instructions'>Enviame un correo y te contactaré a la brevedad </p>
        <div className='formContact-field'>
            <label htmlFor="email">Correo</label>
            <input type="email" name='email' />
        </div>
        <div className='formContact-field'>
            <label htmlFor="description">Mensage</label>
            <textarea name='description'/>
        </div>
        <button className='formContacta-button--submit' type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default FormContact