import React from 'react';

const Animals = ({ animals }) => {
  return (
    <div>
      {animals.map(({ name, image, specie }) => {
        return (
          <div key={name}>
            <h5>{name}</h5>
            <img
              src={image}
              alt={name}
              width='300px'
            />
            <span> {specie}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Animals;
