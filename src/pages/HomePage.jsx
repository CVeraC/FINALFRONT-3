import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(response.data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Bienvenido a la aplicación de Rick & Morty</h1><p>Explora tus personajes favoritos de Rick & Morty.</p>
      <div className="characters-list">
        {characters.map(character => (
          <div key={character.id}>
            <Link to={`/character/${character.id}`}>
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
