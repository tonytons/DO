import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    motDePasse: ''
  });
  const [error, setError] = useState('');

  const { email, motDePasse } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post('http://localhost:5000/api/users/login', formData, config);
      console.log('Connexion réussie:', response.data);
      // Gérer la connexion ici, par exemple stocker le token reçu et rediriger l'utilisateur
      setError('Connexion réussie.');
    } catch (error) {
      console.error('Erreur de connexion:', error.response ? error.response.data.message : error.message);
      setError(error.response ? error.response.data.message : 'Une erreur est survenue lors de la connexion.');
    }
  };

  return (
    <div>
      <h1>Connexion</h1>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <input type="password" name="motDePasse" value={motDePasse} onChange={onChange} placeholder="Mot de passe" required />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Login;
