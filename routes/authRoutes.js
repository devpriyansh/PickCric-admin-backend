const express = require('express');
const router = express.Router();
const {
  adminLogin
} = require('../controllers/adminAuthController');
const staticMatches = require('../utils/staticMatches');

// POST /api/auth/login
router.post('/login', adminLogin);

module.exports = router;
