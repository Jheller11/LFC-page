const schedule = document.querySelector('.schedule')

const scheduleFetch = function() {
  var urlSchedule = 'http://api.football-data.org/v1/teams/64/fixtures'
  console.log('working')
  fetch(urlSchedule)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      res.fixtures.forEach(game => {
        var node = document.createElement('div')
        node.classList = 'card'
        node.innerHTML = `<p>${game.awayTeamName}: ${
          game.result.goalsAwayTeam
        }</p><p> ${game.homeTeamName}: ${game.result.goalsHomeTeam}</p><p>${
          game.date
        }</p>`
        schedule.appendChild(node)
      })
    })
}

console.log('js working')
scheduleFetch()
