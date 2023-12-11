import React from "react";
import Card from "../Card/Card";
import image from "../../assets/logo.jpg";
import { getAllActors } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

/*5️⃣ *COMPONENTE Home** 5️⃣

Implementar el componente Home. Este deberá renderizar todos los actores (Cards) que contengan la 
información consumida directamente del estado global de Redux. 
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que conectar el componente con el estado global de Redux mediante dos hooks: useSelector y 
useDispatch.
🟢 Tendrás que renderizar una serie de etiquetas HTML con información dentro.
🟢 Tendrás que mapear tu estado global para luego renderizar su información utilizando el componente <Card />.

IMPORTANTE
❗Este componente debe ser funcional.
❗NO elimines las etiquetas ni sus atributos ya que si lo haces, no funcionarán los tests.
*/
// { id, name, image, movies, age }
const Home = () => {

  const dispatch = useDispatch()

  const actors = useSelector((state) => state.actors)

  React.useEffect(() => {
    dispatch(getAllActors())
  }, [dispatch])

  return (
    <div data-testid="Home">
      <h1>Henry Actors</h1>
      {
        actors.map(
          (actor) => <Card 
            id={actor.id}
            name={actor.name}
            age={actor.age}
            summary={actor.summary}
            image={actor.image}
          /> 
        )
      }
      <img data-testid="logo" src={image} alt="logo" />
    </div>
  );
};

export default Home;
