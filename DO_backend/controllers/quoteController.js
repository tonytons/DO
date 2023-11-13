const Quote = require('../models/Quote'); // Modèle à créer

const quoteController = {
  // Créer un devis
  createQuote: async (req, res) => {
    try {
      // Vérification des autorisations
      if (req.user.role !== 'Courtier') {
        return res.status(403).json({ message: "Accès non autorisé" });
      }

      // Récupération des données du devis depuis req.body
      const { clientID, details, montant } = req.body;

      // Création d'un nouveau devis
      const newQuote = new Quote({
        courtierID: req.user.id,
        clientID,
        details,
        montant
      });

      await newQuote.save();
      res.status(201).json({ message: "Devis créé avec succès", newQuote });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  getQuote: async (req, res) => {
    // Logique pour obtenir un devis spécifique
  },
  updateQuote: async (req, res) => {
    // Logique pour mettre à jour un devis
  },
  deleteQuote: async (req, res) => {
    // Logique pour supprimer un devis
  }
};

module.exports = quoteController;
