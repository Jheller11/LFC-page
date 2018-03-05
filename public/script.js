const table = document.querySelector('table')

const tableFetch = function() {
  var urlTable = 'http://api.football-data.org/v1/competitions/445/leagueTable'
  fetch(urlTable)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      res.standing.forEach(team => {
        var newRow = document.createElement('tr')
        newRow.innerHTML = `<td>${team.position}</td><td>${
          team.teamName
        }</td><td>${team.playedGames}</td><td>${team.points}</td><td>${
          team.wins
        }</td><td>${team.draws}</td><td>${team.losses}</td>`
        table.appendChild(newRow)
      })
    })
}

console.log('js working')
tableFetch()
