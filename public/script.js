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
  ["St. Mary's Stadium: Southampton FC", 50.904, -1.404],
  ['Wembley Statium: Tottenham Hotspur FC', 51.551, -0.305],
  ['St. James Park: Newcastle United', 54.978, -1.618],
  ['bet365 Stadium: Stoke City FC', 52.988, -2.1764],
  ['Vicarage Road: Watford FC', 51.65, -0.402],
  ['Dean Court: AFC Bournemouth', 50.735, -1.838],
  ['The Hawthorns: West Bromwich Albion', 52.509, -1.964],
  ['Amex Stadium: Brighton & Hove Albion FC', 50.862, -0.084],
  ['Turf Moor: Burnely FC', 53.789, -2.23],
  ['Kirkless Stadium, Huddersfield Town', 53.654, -1.768],
  ['London Stadium: West Ham United', 51.539, -0.017]
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
