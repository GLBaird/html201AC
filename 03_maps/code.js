// create position
var defaultPosition = new google.maps.LatLng(51.5072, 0.1275);

// make the map
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 5,
  center: defaultPosition,
  mapTypeId: google.maps.MapTypeId.ROADMAP
});


function getPosition(e) {
  e.preventDefault();
  console.log("Starting Location Service");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Your browser does not support geolcation.");
  }
}

function showPosition(position) {
  console.log("Position found: ", position);
  var newPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  map.setCenter(newPosition);
  map.setZoom(14);

  // add pin to map
  var marker = new google.maps.Marker({
    position: newPosition,
    map: map
  });
}

document.getElementById('locateMe').addEventListener('click', getPosition);
