import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import redmarker from  "../../assets/images/marker-red.png";
import bluemarker from  "../../assets/images/marker-blue.png";

const style = {
    width: '600px',
    height: '600px',
    position: 'relative'
}

class CustomMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorvalue: false,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };
        this.includeMarkers = this.includeMarkers.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
        this.changeMinimalValue = this.changeMinimalValue.bind(this);
    }

    changeMinimalValue(e) {
        // console.log(Number(e.target.value) == NaN);
        if (Number(e.target.value) !== "NaN") {
            this.setState({
                minimalvalue: e.target.value,
                errorvalue: false
            })
        } else {
            this.setState({
                errorvalue: true
            })
            
        }
    }

    onMarkerClick (props, marker, e){
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    onMapClicked(props){
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    includeMarkers(lojas) {
        if (!lojas.length) {
            return false;
        }
        return lojas.map((store, key)=> {
            if (store.revenue < this.props.faturamentoMinimo) {
                return (
                <Marker 
                    key={key} 
                    onClick={this.onMarkerClick}
                    name={store.name} 
                    position={{ lat: store.latitude, lng: store.longitude }}
                    icon={{
                        url: redmarker,
                        // anchor: new google.maps.Point(32, 32),
                        // scaledSize: new google.maps.Size(64, 64)
                    }}
                    />
                )
            } else {
                return <Marker
                    key={key}
                    onClick={this.onMarkerClick}
                    name={store.name}
                    position={{ lat: store.latitude, lng: store.longitude }}
                    icon={{
                        url: bluemarker,
                        // anchor: new google.maps.Point(32, 32),
                        // scaledSize: new google.maps.Size(64, 64)
                    }}
                    />

            }
        })
    }

    render() {
        console.log('mapcomponent render', this.props.lojas);
        const errorclass = this.state.errorvalue === false ? 'hide' : 'show';
        return (
            <div className="mapcontent">
                <div className="mapa">
                    <Map 
                        google={this.props.google}
                        zoom={12}
                        containerStyle={style}
                        className=""
                        initialCenter={{
                            lat: -23.533773,
                            lng: -46.625290
                        }}
                        >
                        {/* {this.includeMarkers(this.props.splitedPages[this.props.currentPage])} */}
                        {this.includeMarkers(this.props.lojas)}
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                        {/* <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow> */}
                    </Map>
                </div>
            </div>
        );
    }
    componentDidMount() {
        // this.includeMarkers();
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        lojas: state.lojas,
        currentPage: state.currentPage,
        splitedPages: state.splitedPages,
        faturamentoMinimo: state.minimumvalue
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return { }
}



const LoadingContainer = (props) => (
    <div className="teste">Fancy loading container!</div>
)
const googleapi = GoogleApiWrapper({ apiKey: '', LoadingContainer: LoadingContainer })(CustomMap)
const MapComponent = connect(mapStateToProps, mapDispatchToProps)(googleapi) // used in a real render of this SPA. the other option CustomMap stand alone is used in the test with jest

export {MapComponent, CustomMap}

