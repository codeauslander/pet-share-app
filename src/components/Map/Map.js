import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import UserMarker from './UserMarker';

const Map = withScriptjs( withGoogleMap( props => {

  const markers = props.users.map( user => 
    <UserMarker
      key={user.id}
      user={user.type}
      location={{ lat: user.lat, lng: user.lng }}
    />
  );

  const firstUser = props.users[0];

  return (
    <GoogleMap
      defaultZoom={14}
      center={{ lat: firstUser.lat, lng: firstUser.lng}}
    >
      {markers}
    </GoogleMap>
  );

}));

export default Map;