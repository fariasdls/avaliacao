import React, { useState, useEffect } from 'react';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    fetch('https://api.cartola.globo.com/clubes')
      .then(response => response.json())
      .then(data => setClubs(Object.values(data)));
  }, []);

  return (
    <div className="clubs-container">
      {clubs.map(clubs => (
        <div key={clubs.id} className="clubs-card">
          <img src={clubs.escudos['60x60']} alt={`${clubs.nome} escudo`} />
          <h2>{clubs.nome}</h2>
          <p>{clubs.apelido}</p>
        </div>
      ))}
    </div>
  );
};

export default Clubs;