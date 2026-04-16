const express = require('express');
const router = express.Router();
const {
  createJackpot,
  getLiveJackpots,
  getAllJackpots
} = require('../controllers/jackpotController');
const staticMatches = require('../utils/staticMatches');

// POST /api/jackpots
router.post('/create-jackpots', createJackpot);
router.get('/getAllJackpots', getAllJackpots)
router.get('/getLiveJackpots', getLiveJackpots);

// GET /api/matches
router.get('/matches', (req, res) => {
  res.json(staticMatches);
});

module.exports = router;
