const mongoose = require('../db/connection')

const teamSchema = new mongoose.Schema({
  position: Number,
  teamName: String,
  played: Number,
  points: Number,
  wins: Number,
  draws: Number,
  losses: Number
})

const Team = mongoose.model('Team', teamSchema)

module.exports = Team
