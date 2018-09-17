import React from 'react';
import Map from './Map';
import { GOOGLE_MAP_API_KEY } from '../../keys/keys';
import './Container.css';

export default class Conteiner extends React.Component {
  render() {
    return (
      <div className='container'>
        <Map
          users={this.props.users}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{width: `100%`}} />}
          containerElement={<div style={{ height: `300px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      
    );
  }
}
