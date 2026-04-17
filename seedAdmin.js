// seedAdmin.js (Run this once from your terminal: node seedAdmin.js)
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin'); // Assuming you have an Admin model
const sequelize = require('./config/database'); 

const seedSuperAdmin = async () => {
  try {
    await sequelize.authenticate();
    
    // Check if an admin already exists
    const adminExists = await Admin.findOne({ where: { email: 'admin@pickcric.com' } });
    if (adminExists) {
      console.log('Super Admin already exists!');
      return process.exit();
    }

    // Hash the password securely
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('SecurePassword123!', salt);

    // Create the admin
    await Admin.create({
      username: 'SuperAdmin',
      email: 'admin@pickcric.com',
      password: hashedPassword,
      role: 'superadmin' // Useful if you later want 'moderator' roles
    });

    console.log('✅ Super Admin created successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error seeding admin:', error);
    process.exit(1);
  }
};

seedSuperAdmin();