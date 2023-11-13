const express = require('express');
const router = express.Router();

router.get('/route', (req, res) => {
  res.json({ message: 'Réponse de l\'endpoint /api/route' });
});

module.exports = router;
