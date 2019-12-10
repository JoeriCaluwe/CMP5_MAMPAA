var mymap = L.map('mapje', {
});

var basicmap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	id: 'mapbox.streets'
});
var myLocationPin = L.icon({
	iconUrl: 'css/images/ouders.png',
    shadowUrl: 'css/images/schaduw.png',

    iconSize:     [95, 95], // size of the icon
    shadowSize:   [95, 95], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [22, 94],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
function onLocationFound(e) {
var radius = e.accuracy / 2;
L.marker(e.latlng,{icon:myLocationPin}).addTo(mymap) .bindPopup("Jij bent hier").openPopup();
L.circle(e.latlng, radius).addTo(mymap);
}
mymap.on('locationfound', onLocationFound);
mymap.locate({setView: true, watch: true, maxZoom: 15});


basicmap.addTo(mymap);


//---------slide menu--------

let mijnHamburger = document.querySelector("#hamburger");
let mijnNav = document.querySelector("ul#parken");
mijnHamburger.addEventListener("click", function() {
	mijnNav.classList.toggle("zichtbaar");
})
