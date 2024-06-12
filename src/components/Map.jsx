import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet'


const Map = ({ width, height, location }) => {
  const position = [location.lat, location.lng];

  return (
    <div style={{ width, height }}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height, width }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={new Icon({ iconUrl: '/assets/marker.png', iconSize: [25, 41], iconAnchor: [12, 41] })}>
          <Popup>{location.name}</Popup> 
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
