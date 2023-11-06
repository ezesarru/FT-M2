import React from 'react'

const Species = ({ species, handleSpecies, handleAllSpecies }) => {
  return(
    <div>
      <h5>Species: </h5>
      {
        species.map((specie, key) => 
          <button 
            key={key}
            onClick={handleSpecies}
            value={specie}
          >{specie}</button>
        )
      }
      <button onClick={handleAllSpecies}>All Animals!</button>
    </div>
  )
}

export default Species

