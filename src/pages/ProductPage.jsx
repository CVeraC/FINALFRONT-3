import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

const ProductPage = () => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favoritos</h1>
      <div className="product-list">
        {favorites.map((favorite) => (
          <div key={favorite.id}>
            <h2>{favorite.name}</h2>
            <button onClick={() => removeFavorite(favorite.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
