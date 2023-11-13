const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connecté à MongoDB.');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB:', err.message);
  }
};

module.exports = connectDB;
