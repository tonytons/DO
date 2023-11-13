const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
  // Inscription d'un nouvel utilisateur
  registerUser: async (req, res) => {
    try {
      const { nom, prenom, email, motDePasse, tel } = req.body;
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ message: "L'utilisateur existe déjà" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(motDePasse, salt);

      user = new User({ nom, prenom, email, motDePasse: hashedPassword, tel });
      await user.save();

      // Création du JWT
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  // Connexion d'un utilisateur
  loginUser: async (req, res) => {
    try {
      const { email, motDePasse } = req.body;
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "Utilisateur non trouvé" });
      }

      const isMatch = await bcrypt.compare(motDePasse, user.motDePasse);
      if (!isMatch) {
        return res.status(400).json({ message: "Mot de passe incorrect" });
      }

      // Création du JWT
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  // Récupération du profil utilisateur
  getUserProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-motDePasse');
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  // Mise à jour du profil utilisateur
  updateUserProfile: async (req, res) => {
    try {
      const { nom, prenom, email, tel } = req.body;
      const user = await User.findByIdAndUpdate(
        req.user.id,
        { $set: { nom, prenom, email, tel } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  // Ajoutez ici d'autres méthodes si nécessaire
};

module.exports = userController;
