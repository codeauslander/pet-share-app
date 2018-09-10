import React from 'react';
import { Marker } from 'react-google-maps';

class UserMarker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Marker
        position={this.props.location}
      />
    );
  }
}


export default UserMarker;
