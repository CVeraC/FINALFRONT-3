import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchCharacters();
}, []);

if (loading) return <div>Cargando...</div>;
if (error) return <div>Error: {error}</div>;

return (
  <>
    <h1>Personajes de Rick y Morty</h1>
    <ul>
      {characters.map((character) => (
        <li key={character.id}>
          <Card character={character} />
        </li>
      ))}
    </ul>
  </>
);
};

export default RickAndMorty;