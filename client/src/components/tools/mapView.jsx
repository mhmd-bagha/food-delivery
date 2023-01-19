import {Circle, MapContainer, Marker, Pane, Popup, TileLayer, useMapEvents} from 'react-leaflet'
import {useEffect, useState} from "react";

const MapView = ({mapId, refMap}) => {
    const zoom = 16
    const [position, setPosition] = useState([51.505, -0.09]) // set position/default position
    // set setting map
    function MapSetting() {
        // variables
        let lat, lng
        // check the support geolocation
        (navigator.geolocation) ? navigator.geolocation.getCurrentPosition(successMap, errorMap) : console.log('not support browser from geolocation');

        // success access map and set view the map
        function successMap(pos) {
            lat = pos.coords.latitude
            lng = pos.coords.longitude
            const accuracy = pos.coords.accuracy
            setPosition([lat, lng])
            map.flyTo([lat, lng], zoom)
        }

        // error access map
        function errorMap(error) {
            return (error.code) ? console.log('please access location') : console.log('cannot access location')
        }

        // click the map
        const map = useMapEvents({
            move: () => {

            },
            moveend: () => {

            },
            click: () => {
                map.locate();
            },
            // location found map
            locationfound(location) {
                setPosition(location.latlng)
                map.flyTo(location.latlng, zoom)
            },
        })
    }

    return (
        <>
            <MapContainer center={position} zoom={16} scrollWheelZoom={true} id={mapId}
                          className="h-screen w-full bg_dark" ref={refMap}>

                {/* run settings map */}
                <MapSetting/>
                {/* circle map */}
                <Pane name="custom" style={{zIndex: 402}}>
                    <Circle center={position} radius={250}/>
                </Pane>
                {/* contributors map */}
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/* person marker map */}
                <Marker position={position}>
                    {/* popup on click map */}
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}
export default MapView