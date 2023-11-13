import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    motDePasse: '',
    tel: ''
  });
  const [error, setError] = useState('');

  const { nom, prenom, email, motDePasse, tel } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    if (!nom || !prenom || !email || !motDePasse || !tel) {
      setError('Merci de remplir tous les champs.');
      return false;
    }
    if (!email.includes('@')) {
      setError('Veuillez entrer une adresse email valide.');
      return false;
    }
    if (motDePasse.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      return false;
    }
    setError('');
    return true;
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post('http://localhost:5000/api/users/register', formData, config);
      console.log('Inscription réussie:', response.data);
      setError('Inscription réussie. Veuillez vous connecter.');
    } catch (error) {
      console.error('Erreur d\'inscription:', error.response ? error.response.data.message : error.message);
      setError(error.response ? error.response.data.message : 'Une erreur est survenue lors de l\'inscription.');
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input type="text" name="nom" value={nom} onChange={onChange} placeholder="Nom" required />
        <input type="text" name="prenom" value={prenom} onChange={onChange} placeholder="Prénom" required />
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <input type="password" name="motDePasse" value={motDePasse} onChange={onChange} placeholder="Mot de passe" required />
        <input type="tel" name="tel" value={tel} onChange={onChange} placeholder="Téléphone" required />
        <button type="submit">Inscription</button>
      </form>
    </div>
  );
};

export default Register;

