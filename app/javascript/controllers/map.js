// Initialize and add the map
async function initMap() {
  const mapElm = document.getElementById("map");
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(mapElm, {
    zoom: 12,
    center: uluru,
  });

  let riders = await fetch(`/api/riders`);
  riders = await riders.json();

  const [centerLat, centerLng] = riders[0].location.split(", ");
  map.setCenter({ lat: +centerLat, lng: +centerLng });

  for (const r of riders) {
    const [lat, lng] = r.location.split(", ");
    const marker = new google.maps.Marker({
      position: { lat: +lat, lng: +lng },
      map: map,
    });
  }

  // The marker, positioned at Uluru
}

if (window.location.pathname === "/map") {
  initMap();
}
