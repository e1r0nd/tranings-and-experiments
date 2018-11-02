import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from '../Pin';
import './Map.css';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 7,
  };

  clickHandler = ({ lat, lng }, e) => {
    const isPinNotSelected = !e.event.target.classList.contains('map__pin');
    isPinNotSelected && this.props.addPosition({ lat, lng });
  };

  pinHandler = (e) => {
    this.props.selectPosition(e.target.innerText);
  };

  render() {
    const { index, history } = this.props;

    return (
      <div className="map__wrapper">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'put-your-google-API-here' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={(e) => this.clickHandler(e, e)}
        >
          {history &&
            history.length &&
            history.map((p, i) => (
              <Pin
                key={`${p.lat}${p.lng}`}
                lat={p.lat}
                lng={p.lng}
                text={i}
                active={i === parseInt(index, 10)}
                pinHandler={this.pinHandler}
              />
            ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
