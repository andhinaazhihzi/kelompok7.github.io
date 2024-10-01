if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude: " + position.coords.latitude + 
                  ", Longitude: " + position.coords.longitude);
    });
  } else {
    console.log("Geolocation tidak didukung oleh browser ini.");
  }
  