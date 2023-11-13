const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  courtierID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  clientID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  adresseTravaux: {
    type: String,
    required: true
  },
  montantTravaux: {
    type: Number,
    required: true
  },
  dateDebutTravaux: {
    type: Date,
    required: true
  },
  dateFinTravaux: {
    type: Date,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
