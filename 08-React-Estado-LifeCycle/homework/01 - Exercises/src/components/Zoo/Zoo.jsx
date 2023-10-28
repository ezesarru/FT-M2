import React, { useState, useEffect } from "react";
import Animals from "../Animals/Animals";
import Species from "../Species/Species";


const Zoo = () => {

  const [zoo, setZoo] = useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: []
  })


  const handleInputChange = (event) => {
    setZoo({
      ...zoo,
      zooName: event.target.value
    })
  }


  useEffect(() => {
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
        setZoo({ 
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
      )
      .catch((error) => console.log(error));
  }, [])


  const handleSpecies = (event) => {

    const specie = event.target.value

    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter((anim) => anim.specie == specie)
    })
    
  }


  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals
    })
  }


  return (
    <div>
      <label>Zoo Name:  </label>
      <input
        type='text'
        value={zoo.zooName}
        onChange={handleInputChange}
      />
      <h1>{zoo.zooName}</h1>
      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />
      <Animals animals={zoo.animals} />
    </div>
  )
}

export default Zoo