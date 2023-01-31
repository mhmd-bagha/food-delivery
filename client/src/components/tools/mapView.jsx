import {Circle, MapContainer, Marker, Pane, TileLayer, useMapEvents} from 'react-leaflet'
import {connect} from "react-redux";
import {PositionMap, UpDownAddressCard} from "../../states/actions/delivery-information";
import {useEffect} from "react";

const MapView = ({setUpDownAddressCard, deliveryInformationProps, setPositionMap, refCurrentMap}) => {
    const zoom = 16 // set default zoom in map
    // set setting map
    function MapSetting() {
        let lat, lng
        // check the support geolocation
        (navigator.geolocation) ? navigator.geolocation.getCurrentPosition(successMap, errorMap) : console.log('not support browser from geolocation');

        // success access map and set view the map
        function successMap(pos) {
            lat = pos.coords.latitude
            lng = pos.coords.longitude
            setPositionMap([lat, lng])
        }

        // error access map
        function errorMap(error) {
            switch (error.code) {
                case 1:
                    return alert('please access location')
                case 3:
                    return console.log('time out get map location')
                default:
                    return
            }
        }

        // click the map
        const map = useMapEvents({
            // move map
            move: () => {
                setUpDownAddressCard(true)
            },
            // move end map
            moveend: () => {
                setUpDownAddressCard(false)
            },
            // location found map
            locationfound(location) {
                setPositionMap(location.latlng)
                map.flyTo(location.latlng, map.getZoom())
            },
        })
        // get button current location
        let current_location = document.getElementById('current_location');
        useEffect(() => {
            current_location.addEventListener('click', () => {
                return map.locate().getCenter()
            })
        })
    }

    return (
        <>
            <MapContainer center={deliveryInformationProps.position_map} zoom={zoom} scrollWheelZoom={true}
                          zoomControl={false}
                          className="h-screen w-full bg_mirage">
                {/* run settings map */}
                <MapSetting/>
                {/* circle map */}
                <Pane name="custom" style={{zIndex: 402}}>
                    <Circle center={deliveryInformationProps.position_map} radius={250}/>
                </Pane>
                {/* contributors map */}
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/* person marker map */}
                <Marker position={deliveryInformationProps.position_map}/>
            </MapContainer>
        </>
    )
}

// states
const mapStateToProps = (state) => {
    return {
        deliveryInformationProps: state.deliveryInformation
    }
}

// dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        setUpDownAddressCard: (data) => UpDownAddressCard(dispatch, data),
        setPositionMap: (data) => PositionMap(dispatch, data)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MapView)