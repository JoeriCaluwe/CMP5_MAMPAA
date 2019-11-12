var mymap = L.map('mapje', {
});

var basicmap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	id: 'mapbox.streets'
});

function onLocationFound(e) {
var radius = e.accuracy / 2;
L.marker(e.latlng).addTo(mymap) .bindPopup("You are Here").openPopup();
L.circle(e.latlng, radius).addTo(mymap);
}
mymap.on('locationfound', onLocationFound);
mymap.locate({setView: true, watch: true, maxZoom: 15});


basicmap.addTo(mymap);


//---------slide menu--------
