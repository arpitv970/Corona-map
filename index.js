function updateMap() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((rsp) => {
    //   console.log(rsp.data);
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
        color = `rgb(${cases}, 0, 50)`
        
        // Mark on the map
        new mapboxgl.Marker({
          draggable: false,
          color: color
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}
updateMap();