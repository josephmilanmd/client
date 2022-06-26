/* eslint-disable react/prop-types */
import React from 'react';
import GoogleMapReact from 'google-map-react';

import locations from './Locations.json';
import { Icon } from 'components/icons';
import { MapIcon } from 'components/icons/IconList';

const markerStyle = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translate(-50%, -100%)'
};

const Marker = ({ lat, lng, children }) => {
  return <>{children}</>;
};

const defaultProps = {
  center: {
    lat: 60.192059,
    lng: 24.945831
  },
  zoom: 11
};
const Map = () => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '20rem', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec'
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {locations.map((item) => {
          if (item.address.length !== 0) {
            return item.address.map((i) => {
              return (
                <a key={i.id} lat={i.lat} lng={i.lng}>
                  <Icon name={MapIcon} />
                </a>
              );
            });
          }
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
