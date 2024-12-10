import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FavoritesContext } from '../context/FavoritesContext';

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const { addFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(response.data);
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <div>Cargando...</div>;

  const handleAddToFavorites = () => {
    console.log('Personaje que se agrega a favoritos:', character); // Verifica el personaje que se está agregando
    addFavorite(character);
  };

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>{character.status}</p>
      <button onClick={handleAddToFavorites}>Agregar a Favoritos</button>
    </div>
  );
};

export default CharacterPage;
