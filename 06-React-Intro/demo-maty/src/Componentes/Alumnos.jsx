import Boton from "./Boton";

const Alumnos = ({ alumnos }) => {
    return (
        <div>
            <h3>Lista de mis bellos y bellas alumnos!</h3>
            {
                alumnos.map(({name, age}) => {
                    return (
                        <div>
                            <p>{`Nombre: ${name} Edad: ${age}`}</p>
                            <Boton text='añadir amigo!'/>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Alumnos;