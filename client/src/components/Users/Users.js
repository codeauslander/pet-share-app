import React, { Component } from 'react';
import MapContainer from '../Map/Container';

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 0,
          lat: 41.9041956,
          lng:  -87.6474876,

          email: '',
          password: '',
          confirmation: '',
          type: 'sitter',
        }
      ],
      petowners: [],
    };

    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    fetch( 'https://petshareapp-c0f76.firebaseio.com/users.json' )
      .then( response => response.json() )
      .then( data => {
        console.log(Object.keys(data));
        const users = Object.keys(data).map( (key) => {
          return data[key];
        });
        console.log(users);
        this.setState({ users: users});
      })
      .catch( error => console.log( error ));
  }

  fetchPetowners() {
    fetch( '/api/petowners')
      .then( response => response.json() )
      .then( data => {
        const petowners = data.petowners;
        console.log(petowners);
        this.setState({ petowners: petowners});
      })
      .catch( error => console.log( error ));
  }

  componentDidMount() {
    this.fetchPetowners();
  }

  render() {
    const { petowners } = this.state;
    return (
      <div>
        Hey Check this out, You can see all the users.
        <MapContainer users={ this.state.users } />
        <ul>
          { petowners.map(
            (petowner, index) => 
              <li key={index} > 
                {petowner.name} - {petowner.pet_name} - {petowner.pet_bio} - {petowner.start_date} - {petowner.start_date} - {petowner.end_date} - {petowner.score}
              </li>
          )}
        </ul>
      </div>
    );
  }
}
