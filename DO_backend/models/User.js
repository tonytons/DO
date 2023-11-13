const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} n'est pas une adresse email valide!`
    }
  },
  motDePasse: { type: String, required: true },
  tel: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} n'est pas un numéro de téléphone valide!`
    }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Méthode pour hacher le mot de passe avant de le sauvegarder
userSchema.pre('save', async function (next) {
  if (this.isModified('motDePasse')) {
    this.motDePasse = await bcrypt.hash(this.motDePasse, 10); // Augmentation de la complexité de hachage
  }
  this.updatedAt = new Date();  // Mise à jour du champ updatedAt
  next();
});

// Indexation pour améliorer les performances des requêtes
userSchema.index({ email: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User;
