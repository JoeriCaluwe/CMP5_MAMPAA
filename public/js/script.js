var mymap = L.map('mapje', {
});

var basicmap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	id: 'mapbox.streets'
});
var myLocationPin = L.icon({
	iconUrl: 'css/images/mama.png',
    shadowUrl: 'css/images/mama.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
function onLocationFound(e) {
var radius = e.accuracy / 2;
L.marker(e.latlng,{icon:myLocationPin}).addTo(mymap) .bindPopup("You are Here").openPopup();
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
