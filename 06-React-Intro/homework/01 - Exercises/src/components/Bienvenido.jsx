import React from 'react'
import Botones from './Botones';

const studentName = "Ezequiel Sarrugeri";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"]
const alerts = {
  m1: "Aprobado!",
  m2: "En curso!" 
}
const ejemplo = 'Ejemplo!!!'

const Bienvenido = () => {
  return(
    <div>
      <h1>Soy Henry!</h1>
      <h3>Nombre: {studentName}</h3>
      <ul>
        {
          techSkills.map((elem, id) => <li key={id}>{elem}</li>)
        }
      </ul>
      <Botones alerts={alerts} ejemplo={ejemplo}/>
    </div>
  )
}

export default Bienvenido



// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
