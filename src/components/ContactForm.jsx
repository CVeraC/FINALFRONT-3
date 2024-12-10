import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://your-api-endpoint.com/contact', {
        nombre,
        email,
        mensaje,
      });
      alert('Gracias por tu mensaje!');
      setNombre('');
      setEmail('');
      setMensaje('');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <textarea
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        placeholder="Tu mensaje"
        rows={4}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
