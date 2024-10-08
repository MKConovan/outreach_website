/*
  Because Google Maps costs money, we are using OpenStreetMap. It will allow us to do
  the majority of the things we need to accomplish.
  By default, the map hovers over the University of Texas campus.
*/

// Initializes the map
let map = L.map('map').setView([30.2842111, -97.7383171], 17);

// Sets up defaults such as copyright contributions and limits map zooming
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Sets up marker layer
let markersLayer = L.layerGroup().addTo(map);

// Function to update the map view based on button data attributes and add a marker with a popup
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function () {
    fetch('data/markers.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON data
      })
      .then(data => {
        // Access markers for the clicked button's text
        const locationData = data[this.textContent]; // Get all data for the button text
        const size = locationData.length; // Get the size of locationData

        if (size === 0) return; // Early return if no data available

        // Clear previous markers
        markersLayer.clearLayers();

        // Handle the first data point (main location)
        const firstLocationData = locationData[0]; // First data point
        const lat = firstLocationData.lat;
        const lng = firstLocationData.lng;
        const add = firstLocationData.data;
        const label = firstLocationData.label
        const link = firstLocationData.link;

        // Update the map view to the first location
        map.setView([lat, lng], 17);
        console.info(lat + '' + lng)
        // Add a marker at the main location with a pop-up
        const marker = L.marker([lat, lng]).addTo(markersLayer);
        marker.bindPopup(`
          <b>${this.textContent}</b>
          <p><b>Address: </b>${add}</p>
          <p><b>Marker: </b>${label}</p>
          <b>Watch the Video First:</b>
          ${link}`).openPopup();

        // Iterate through the rest of the location data, starting from index 1
        for (let i = 1; i < size; i++) {
          const cMarkerData = locationData[i]; // Get the current marker data
          const clat = cMarkerData.lat;
          const clng = cMarkerData.lng;
          const clabel = cMarkerData.label;
          const cdata = cMarkerData.data;

          if (clat && clng) { // Ensure lat and lng are present
            // Create a marker for each subsequent location
            const cmarker = L.marker([clat, clng]).addTo(markersLayer);
            console.log(clat + ", " + clng); // Log the coordinates for debugging
            cmarker.bindPopup(`<b>${clabel}</b><p>${cdata}</p>`); // Popup for the current data point
          } else {
            console.warn(`Invalid coordinates for marker: ${cMarkerData}`);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching the JSON file:', error);
      });
  });
});
