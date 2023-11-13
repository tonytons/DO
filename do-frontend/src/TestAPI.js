import React, { useEffect } from 'react';
import axios from 'axios';

function TestAPI() {
  useEffect(() => {
    // Remplacer '/api/route' par l'URL exacte de votre endpoint backend
    axios.get('http://localhost:5000/api/route')
      .then(response => {
        console.log('Réponse du serveur:', response.data);
      })
      .catch(error => {
        console.error('Il y a eu une erreur !', error);
      });
  }, []);

  return (
    <div>
      <h1>Test API</h1>
      <p>Vérifiez la console pour voir la réponse.</p>
    </div>
  );
}

export default TestAPI;
