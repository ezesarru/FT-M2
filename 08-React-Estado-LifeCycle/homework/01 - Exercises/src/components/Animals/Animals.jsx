import React from 'react'

const Animals = ({ animals }) => {
  return (
    <div>
      {
        animals.map((animal, key) => 
          <div key={key}>
            <h5>{animal.name}</h5>
            <img 
              src={animal.image} 
              alt={animal.name}
              width='300px' 
            />
            <span> {animal.specie}</span>
          </div>
        )
      }
    </div>
  )
}

export default Animals
