var mymap = L.map('mapje', {
  center: [51.230253, 4.416149],
  zoom: 14
});

var basicmap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	id: 'mapbox.streets'
});
basicmap.addTo(mymap);

//deze regels zijn maar een voorbeeld
/*
var school = L.icon({
    iconUrl: 'school.png',
    iconSize: [75, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],});

var kerk = L.icon({
    iconUrl: 'kerk.png',
    iconSize: [75, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]});

L.marker([51.230253, 4.416149], {icon:school}).addTo(mymap);
L.marker([51.2195765,4.4018782], {icon:kerk}).addTo(mymap);
L.circle([51.213524, 4.417204], {color:'#ff0000', radius: 3000}).addTo(mymap);
*/
