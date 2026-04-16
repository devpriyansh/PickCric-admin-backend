require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const jackpotRoutes = require('./routes/jackpotRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', jackpotRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  res.send('PickCric API is running');
});

// Database Sync and Server Listen
const startServer = async () => {
  try {
    if (process.env.DATABASE_URL) {
      await sequelize.authenticate();
      console.log('Database connected successfully.');

      // Sync models (alter: true will update the schema without dropping tables)
      await sequelize.sync({ alter: true });
      console.log('Database synced.');
    } else {
      console.warn('No DATABASE_URL provided. Database sync skipped.');
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
