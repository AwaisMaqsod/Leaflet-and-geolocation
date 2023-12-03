//geolocation api to get our location
navigator.geolocation.getCurrentPosition(
  function (position) {
    //logging the concole
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(position);

    const coords = [latitude, longitude];

    //leaflet  api
    //lodon map array [51.505, -0.09]
    const map = L.map("map").setView(coords, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup("A pretty CSS popup.<br> Easily customizable.")
      .openPopup();
  },
  function () {
    alert("not get your loction");
  }
);
