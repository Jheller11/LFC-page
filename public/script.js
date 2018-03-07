console.log('js working')

var mymap = L.map('mapid').setView([53.4, -2.95], 10)

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

var circle = L.circle([53.43, -2.96], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 600
}).addTo(mymap)

circle.bindPopup('Anfield: The home of Liverpool FC since 1892.')
