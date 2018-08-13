import React, {Component} from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
//?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&


const mappositions = [
    { "name": "Alameda Santos", "city": "São Paulo", "state": "SP", "latitude": -23.568767, "longitude": -46.649907, "revenue": 29854.12 },
    { "name": "Av Paulista", "city": "São Paulo", "state": "SP", "latitude": -23.565972, "longitude": -46.650859, "revenue": 31257.23 },
    { "name": "Av Paulista Novo", "city": "São Paulo", "state": "SP", "latitude": -23.563703, "longitude": -46.653542, "revenue": 19874.25 },
    { "name": "Bandeirantes", "city": "São Paulo", "state": "SP", "latitude": -23.616359, "longitude": -46.664749, "revenue": 21587.33 },
    { "name": "Barão do Triunfo", "city": "São Paulo", "state": "SP", "latitude": -23.624203, "longitude": -46.683369, "revenue": 12569.95 },
    { "name": "Bela Vista", "city": "São Paulo", "state": "SP", "latitude": -23.565972, "longitude": -46.650859, "revenue": 22365.54 },
]

class Map extends Component {
    render() {
        withGoogleMap()
        withScriptjs()
        return (
            <div>
                <GoogleMap defaultZoom={10} defaultCenter={{ lat: -23.56, lng: -46.644 }}>
                    {this.props.isMarkerShown && (
                        mappositions.map((map, key) => {
                            return (<Marker key={key} position={{ lat: map.latitude, lng: map.longitude }}>
                                <InfoBox
                                    options={{ closeBoxURL: ``, enableEventPropagation: true }}
                                >
                                    <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                                        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                                            Hello, Kaohsiung!
                            </div>
                                    </div>
                                </InfoBox>
                            </Marker>)
                        })
                    )}
                </GoogleMap>

            </div>
        );
    }
}

export default Map;

{/* <Marker
    position={{ lat: 22.6273, lng: 120.3014 }}
    onClick={props.onToggleOpen}
>
    {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
        <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                Hello, Kaohsiung!
          </div>
        </div>
    </InfoBox>}
</Marker> */}
// class Map extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }
