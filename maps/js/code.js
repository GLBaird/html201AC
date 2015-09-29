// setup map
var currentposition = new google.maps.LatLng(51.5072, 0.1275);
var mapoptions = {
  zoom: 5,
  center: currentposition,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("mapView"), mapoptions);

// event listeners
function locateMe(event) {
  event.preventDefault();
  console.log("Location beginning");
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  console.log("Position found:", position);
    var newPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    map.setCenter(newPosition);
    map.setZoom(20);

    var marker = new google.maps.Marker({
  	  position: newPosition,
  	  map: map
  	});
}

document.getElementById('locate').addEventListener("click", locateMe);
