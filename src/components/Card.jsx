import React from 'react';
import styles from './Card.module.css';

const Card = ({ character }) => {
  return (
    <div className={styles.card}>
      <img src={character.image} alt={character.name} className={styles.img} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Last Location: {character.location.name}</p>
    </div>
  );
};

export default Card;