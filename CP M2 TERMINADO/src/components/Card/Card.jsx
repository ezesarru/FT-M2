import { Link } from "react-router-dom";
import { deleteActor } from "../../redux/actions";
import { useDispatch } from "react-redux";

/* 7️⃣ *** COMPONENTE Card *** 7️⃣

Implementar el componente Card.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar un actor específico.

IMPORTANTE
❗Este componente debe ser FUNCIONAL.
❗NO elimines las etiquetas ni sus atributos ya que si lo haces, no funcionarán los tests.
*/

const Card = ({ id, name, image, movies, age }) => {

  const dispatch = useDispatch()

  const handleDeleteActor = (id) => {
    dispatch(
      deleteActor(id)
    )
  }

  return(
    <div data-testid="Card">

      <h2 className="actor-name">{name}</h2>

      <Link to={`/actors/${id}`} >
        <img src={image} alt={name} ></img>
      </Link>

      <p>{age}</p>

      <button onClick={() => handleDeleteActor(id)} >X</button>

    </div>
  );
};

export default Card;
