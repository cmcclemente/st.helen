import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
  width: '400px',
  height: '400px'
};



export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 47.603230,
            lng: -122.330276
          }
        }>

        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
          name={'Template Marker'}
          label={{ fontWeight: 'bold', text: this.props.readable }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDFzSgTvi-yaCaA239rERW9zEXwLbz_7sw"//process.env.MAP_API_KEY
})(MapContainer);