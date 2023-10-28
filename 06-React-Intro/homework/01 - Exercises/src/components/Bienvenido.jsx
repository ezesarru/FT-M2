import React from 'react'

const studentName = "Ezequiel";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  return(
    <div>
      <h1>Mi primer app!</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((ele, i) => (
          <li key={i}>{ele}</li>
        ))} 
      </ul>
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
