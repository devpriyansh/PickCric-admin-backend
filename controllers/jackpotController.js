const Jackpot = require('../models/Jackpot');
const staticMatches = require('../utils/staticMatches');
const { Op } = require('sequelize');

const createJackpot = async (req, res) => {
  try {
    const {
      matchId,
      gameMode,
      jackpotName,
      subtitle,
      subtitle2,
      jackpotType,
      leagueName,
      matchType,
      stats,
      maxUserLimit,
      startDate,
      endDate,
      topPrizes,
      availablePlayers,
      summary,
      rules,
      isHotContest,
      showOnBanner
    } = req.body;

    // Validate matchId exists in static matches
    const matchExists = staticMatches.find(match => match.id === parseInt(matchId));
    if (!matchExists) {
      return res.status(404).json({ error: 'Match Not Found' });
    }

    const newJackpot = await Jackpot.create({
      matchId,
      gameMode,
      jackpotName,
      subtitle,
      subtitle2,
      jackpotType,
      leagueName,
      matchType,
      stats,
      maxUserLimit,
      startDate,
      endDate,
      topPrizes,
      availablePlayers,
      summary,
      rules,
      isHotContest,
      showOnBanner
    });

    console.log("Jackpot Created")
    return res.status(201).json(newJackpot);
  } catch (error) {
    console.error('Error creating jackpot:', error);
    return res.status(500).json({ error: 'Failed to create jackpot' });
  }
};

// Add this below your createJackpot function

const getLiveJackpots = async (req, res) => {
  try {
    // 1. Get the exact current time on the server
    const now = new Date();

    // 2. Find all jackpots where status is 1 AND the endDate is still in the future
    const liveJackpots = await Jackpot.findAll({
      where: {
        // status: 1,
        endDate: {
          [Op.gt]: now // Op.gt means "Greater Than" 'now'
        }
      },
      order: [
        ['createdAt', 'DESC'] // Orders by newest first
      ]
    });

    console.log("Fetched Live Jackpots Count: ", liveJackpots.length);

    // Return the data
    return res.status(200).json({
      success: true,
      count: liveJackpots.length,
      data: liveJackpots
    });

  } catch (error) {
    console.error("Error fetching live jackpots:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Failed to fetch live jackpots", 
      error: error.message 
    });
  }
};

const getAllJackpots = async (req, res) => {
  try {
    const allJackpots = await Jackpot.findAll({
      order: [['createdAt', 'DESC']]
    });

    console.log("ALL = ", getAllJackpots)

    return res.status(200).json({
      success: true,
      data: allJackpots
    });
  } catch (error) {
    console.error("Error fetching all jackpots:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch jackpots" });
  }
};


// Don't forget to export it!
module.exports = {
  createJackpot,
  getLiveJackpots,
  getAllJackpots
};
