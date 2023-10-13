import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './Componentes/Titulo'
import Alumnos from './Componentes/Alumnos'
import Boton from './Componentes/Boton'

const App = ()=> {

  const alumnos = [
    {name: 'Octavio', age: 23},
    {name: 'Jose', age: 67},
    {name: 'Gaston', age: 21},
    {name: 'Maria Laura', age: 23},
    {name: 'Matias', age: 32},
  ]
  
  return ( 
    <div>
      <h1>Mi primer proyecto con React!</h1>
      <Titulo/>
      <Alumnos alumnos= {alumnos}/>
      <Boton text='Soy el primer boton!'/>
    </div>
  )
}

export default App
