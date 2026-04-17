const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Make sure this path points to your DB connection file

const Admin = sequelize.define('Admin', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Ensures valid email format
      notEmpty: true,
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    // Enum ensures only these specific roles can be assigned
    type: DataTypes.ENUM('superadmin', 'admin', 'moderator'),
    defaultValue: 'admin',
    allowNull: false,
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
  tableName: 'Admins',
});

// ==========================================
// SECURITY PROTOTYPE: Hide Password in JSON
// ==========================================
// Whenever you do `res.json(admin)`, this ensures 
// the hashed password is NEVER sent to the frontend.
Admin.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  return values;
};

module.exports = Admin;