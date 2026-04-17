// controllers/adminAuthController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const dotenv = require('dotenv');
dotenv.config();

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find the admin
    const admin = await Admin.findOne({ where: { email } });
    if (!admin) {
      return res.status(401).json({ success: false, message: 'Invalid admin credentials' });
    }

    // 2. Verify password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid admin credentials' });
    }

    // 3. Generate an Admin Token
    const token = jwt.sign(
      { id: admin.id, role: admin.role, isAdmin: true },
      process.env.JWT_SECRET, // Make sure you have this in your .env!
      { expiresIn: '12h' }
    );

    return res.status(200).json({
      success: true,
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email,
        role: admin.role
      }
    });

  } catch (error) {
    console.error('Admin login error:', error);
    return res.status(500).json({ success: false, message: 'Server error during login' });
  }
};

module.exports = { adminLogin };