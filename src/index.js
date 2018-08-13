import React, { Component } from 'react';
import ReactDom from "react-dom";

import './scss';

import Map from "./components/maps/Map";




class App extends Component {
    render() {
        console.log('render')
        return (
            <div>
                Olá mundo
                <Map
                    isMarkerShown
                    // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default App;


ReactDom.render(<App />, document.querySelector('#app'));