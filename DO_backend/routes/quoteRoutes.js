const express = require('express');
const quoteController = require('../controllers/quoteController');
const router = express.Router();

// Ajouter un nouveau devis
router.post('/', quoteController.createQuote);

// Obtenir un devis spécifique
router.get('/:id', quoteController.getQuote);

// Mettre à jour un devis
router.put('/:id', quoteController.updateQuote);

// Supprimer un devis
router.delete('/:id', quoteController.deleteQuote);

module.exports = router;
