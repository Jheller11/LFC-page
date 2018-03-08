var mymap = L.map('mapid').setView([53.4, -2.95], 6)

L.tileLayer(
  'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.dark',
    accessToken:
      'pk.eyJ1IjoiamhlbGxlcjExNDEiLCJhIjoiY2plYTB0anJwMHRtMTJ3bGU4a3N1MmFraSJ9.5w6UzEtXD8IM9Z8_afks-Q'
  }
).addTo(mymap)

var blueCircles = [
  ['Stamford Birdge: Chelsea FC', 51.481, -0.191],
  ['Old Trafford: Manchester United', 53.463, -2.291],
  ['Emirates Stadium: Arsenal FC', 51.554, -0.108],
  ['Libery Stadium: Swansea City', 51.643, -3.935],
  ['Selhurst Park: Crystal Palace', 51.235, -0.051],
  ['Etihad Stadium: Manchester City', 53.483, -2.2004],
  ['King Power Stadium: Leicester City', 52.6204, -1.142],
  ['Goodison Park: Everton FC', 53.439, -2.966],
  ["St. Mary's Stadium: Southampton FC", 50.542, -1.233]
]

for (var i = 0; i < blueCircles.length; i++) {
  blueCircle = new L.circle([blueCircles[i][1], blueCircles[i][2]])
    .bindPopup(blueCircles[i][0])
    .addTo(mymap)
}

var circle = L.circle([53.43, -2.96], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 600
}).addTo(mymap)

circle.bindPopup('Anfield: The home of Liverpool FC since 1892.')
