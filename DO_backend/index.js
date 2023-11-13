require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');


const app = express();
const port = process.env.PORT || 5000;


// Connexion à la base de données
connectDB();

app.use(cors());

// Middleware pour parser le JSON
app.use(express.json());

// Importation des routeurs
const userRoutes = require('./routes/userRoutes');
const quoteRoutes = require('./routes/quoteRoutes');
const projectRoutes = require('./routes/projectRoutes');


// Routes
app.use('/api/users', userRoutes); // Gestion des utilisateurs
app.use('/api/quote', quoteRoutes); // Gestion des citations
app.use('/api/project', projectRoutes); // Gestion des projets


// Route de test
app.get('/api/route', (req, res) => {
  res.json({ message: 'Réponse de l\'endpoint /api/route' });
});

// Route racine pour confirmer que le serveur fonctionne
app.get('/', (req, res) => {
  res.send('Serveur Express fonctionne!');
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
