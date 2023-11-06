import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (inputs) => {
  let errors = {}
  if(!inputs.name){
    errors.name = 'Se requiere un nombre'
  }
  if(!regexEmail.test(inputs.email)){
    errors.email = 'Debe ser un correo electrónico'
  }
  if(!inputs.message){
    errors.message = 'Se requiere un mensaje'
  }
  return errors
}


export default function Contact () {

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })

    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value
      })
    )
  }

  

  const handleSubmit = (event) => {
    event.preventDefault()
    const arrOfErr = Object.values(errors)
    if(arrOfErr.length === 0) {
      setInputs({
        name: '',
        email: '',
        message: ''
      })
      setErrors({
        name: '',
        email: '',
        message: ''
      })
      alert('Datos completos')
    } else {
      alert('Debe llenar todos los campos')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input className={errors.name && 'warning'} onChange={handleChange} value={inputs.name} type="text" name='name' placeholder='Escribe tu nombre...' />
          {errors.name && <p className='danger' >{errors.name}</p>} 
            <br />
        <label htmlFor="email">Correo Electrónico:</label>
        <input className={errors.email && 'warning'} onChange={handleChange} value={inputs.email} type="text" name='email' placeholder='Escribe tu email...' />
          {errors.email && <p className='danger' >{errors.email}</p>} 
            <br />
        <label htmlFor='message' >Mensaje:</label>
        <textarea className={errors.message && 'warning'} onChange={handleChange} value={inputs.message} name="message" placeholder='Escribe tu mensaje...' type='text'></textarea>
          {errors.message && <p className='danger' >{errors.message}</p>} 
            <br />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
