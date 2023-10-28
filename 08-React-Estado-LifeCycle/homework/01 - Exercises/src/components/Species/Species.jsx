const Species = ({ species, handleSpecies, handleAllSpecies }) => {
  return (
    <div>
      {species.map((spec, index) => (
        <button
          key={index}
          onClick={handleSpecies}
          value={spec}
        >
          {spec}
        </button>
      ))}
      <button onClick={handleAllSpecies}>All Species</button>
    </div>
  );
};

export default Species;

