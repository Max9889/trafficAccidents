function getUserLocation() {
    if (navigator.geolocation) {//checks if geolocation is available
      //gets users current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //coordinates of the user
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;

          // focus map on user's location
          map.flyTo({
            center: [userLon, userLat],
            zoom: 14,
            essential: true
          });

          // Add a marker for user's location
          new mapboxgl.Marker({ color: "red" })
            .setLngLat([userLon, userLat])
            .addTo(map);
        },
        (error) => {
          //if coordinates are denied or not valid
          alert("Error getting location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }