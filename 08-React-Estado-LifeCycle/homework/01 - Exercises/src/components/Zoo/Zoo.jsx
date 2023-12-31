import React from "react"
import Animals from "../Animals/Animals"
import Species from "../Species/Species"

const Zoo = () => {

  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: ''
  })

  const handleInputChange = (event) => {
    setZoo({
      ...zoo,
      zooName: event.target.value
    })
  }

  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
    .then((res) => res.json())
    .then((data) => setZoo({
      ...zoo,
      animals: data.animals,
      species: data.species,
      allAnimals: data.animals
    }))
    .catch((error) => console.log(error))
  }, [])

  const handleSpecies = (event) => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter((animal) =>
        animal.specie === event.target.value
      )
    })
  }

  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals
    })
  }

  return(
    <div>
      <label htmlFor="searchB">Zoo Name: </label>
      <input 
        type="text" 
        value={zoo.zooName} 
        onChange={handleInputChange} 
        name="searchB"
      />
      <h1>{zoo.zooName}</h1>
      <Species 
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />
      <Animals
        animals={zoo.animals}
      />
    </div>
  )
}

export default Zoo