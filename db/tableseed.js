const Team = require('../models/Team')
const fetch = require('node-fetch')

fetch('http://api.football-data.org/v1/competitions/445/leagueTable')
  .then(res => res.json())
  .then(body => {
    console.log(body)
    body.standing.forEach(team => {
      Team.create({
        position: team.position,
        teamName: team.teamName,
        played: team.playedGames,
        points: team.points,
        wins: team.wins,
        draws: team.draws,
        losses: team.losses
      })
    })
  })
