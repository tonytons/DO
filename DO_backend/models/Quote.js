const mongoose = require('mongoose');

const devisSchema = new mongoose.Schema({
  compagnie: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  }
});

const quoteSchema = new mongoose.Schema({
  devis: [devisSchema], // Tableau de devis
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
