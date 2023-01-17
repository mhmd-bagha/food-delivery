import L from 'leaflet'; // import leaflet

export const MapView = () => {
    let marker, circle, zoomed
    var map = L.map('map')
    map.setView([0, 0], 1)
    // contributes
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
    // person marker
    L.marker([51.5, -0.09]).addTo(map)
    // geolocation
    navigator.geolocation.watchPosition(success, error)

    // accept method geolocation
    function success(pos) {
        let lat = pos.coords.lat; // get current lat
        let lng = pos.coords.lng; // get current lng
        let accuracy = pos.coords.accuracy; // get accuracy
        // delete layer if exist last
        if (marker) {
            map.removeLayer(marker); // remove marker
            map.removeLayer(circle); // remove circle
        }
        marker = L.marker([lat, lng]).addTo(map); // new marker add to map
        circle = L.circle([lat, lng], {radios: accuracy}).addTo(map); // new circle add to map
        // zoomed fit bounds
        if (!zoomed) {
            map.fitBounds(circle.fitBounds()); // zoomed fit bounds
        }
        map.setView([lat, lng]); // new set view
    }

    // error method geolocation
    function error(error) {
        return (error.code === 1) ? alert('please allow location access') : alert('cannot get location access');
    }
}