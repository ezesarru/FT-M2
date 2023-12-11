import React from "react";
import { useDispatch } from "react-redux";
import { createActor } from "../../redux/actions";

/* 6️⃣ *** COMPONENTE Create *** 6️⃣

Implementar el componente Create. Este consistirá en un formulario controlado con estados de React.
📢¡Sigue las instrucciones de los TEST!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.
🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".
🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.
🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE   
❗Este componente debe ser FUNCIONAL.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks de React, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
❗NO elimines las etiquetas ni sus atributos ya que si lo haces, no funcionarán los tests.
*/

const validate = (input) => {
  const regexOnlyNumbers = /^[0-9]+$/
  const regexURL = /^(ftp|http|https):\/\/[^ "]+$/
  const errors = {}

  if (input.name.length < 5) errors.name = 'The name must be five characters long'
  if (input.name.length > 20) errors.name = 'The name must be less than twenty characters long'

  if (!regexOnlyNumbers.test(input.age)) errors.age = 'Only numbers'
  if (input.age.length < 2) errors.age = 'The age must be two digits'

  if (input.summary.length < 50) errors.summary = 'The summary must be fifty characters long'

  if (input.movies.length < 5) errors.movies = 'The movies must be five characters long'

  if (!regexURL.test(input.image)) errors.image = 'The image must be a URL' 

  return errors
};

const Create = () => {

  const dispatch = useDispatch()

  const [input, setInput] = React.useState({
    name: '',
    movies: '',
    age: '',
    summary: '',
    image: ''
  })

  const [errors, setErrors] = React.useState({})

  React.useEffect(() => { 
    setErrors(validate(input))
  }, [input])

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
    setErrors({
      ...errors,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      createActor(input)
    )
  }

  return (
    <form onSubmit={handleSubmit} data-testid="Create">

      <label>Name:</label>
      <input onChange={handleChange} name='name' type="text" value={input.name} />
      {errors.name && <p>{errors.name}</p>}

      <label>Movies:</label>
      <input onChange={handleChange} name="movies" type="text" value={input.movies} />
      {errors.movies && <p>{errors.movies}</p>}

      <label>Age:</label>
      <input onChange={handleChange} name="age" type="text" value={input.age} />
      {errors.age && <p>{errors.age}</p>}

      <label>Summary:</label>
      <input onChange={handleChange} name="summary" type="textarea" value={input.summary} />
      {errors.summary && <p>{errors.summary}</p>}

      <label>Image:</label>
      <input onChange={handleChange} name="image" type="text" value={input.image} />
      {errors.image && <p>{errors.image}</p>}

      <button disabled={errors.name || errors.movies || errors.age || errors.summary || errors.image} >Create</button>
    </form>
  );
};

export default Create;
