import React from 'react';
import './Signup.css';

class Signup extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    id: 0,
    lat: 41.9041956,
    lng:  -87.6474876,

    email: '',
    password: '',
    confirmation: '',
    type: 'sitter',
  }

  handleSubmit(event) {
    event.preventDefault();

    const id = Math.random() * 100;
    const lat = 41.9041956 + (id * 0.0001);
    const lng =  -87.6474876 + (id * 0.0001);

    console.log(id,lat,lng);

    const { 
      email,
      password,
      confirmation,
      type,
    } = this.state;

    fetch('https://petshareapp-c0f76.firebaseio.com/users.json',{
      method: 'POST',
      body: JSON.stringify({
        id,
        lat,
        lng,

        email,
        password,
        confirmation,
        type,
      }),
    })
    .then( res => res.json )
    .catch( err => console.log(err) );
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }
 
  render() {
    return (
      <form className='signup' onSubmit={this.handleSubmit}>
        <ul className="flex-outer">
          <li>
            <label htmlFor="email">Email</label>
            <input 
              name='email' 
              value={this.state.email} 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              onChange={this.handleChange}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input 
              name='password' 
              value={this.state.password} 
              type="password" 
              id="password" 
              placeholder="Enter a password" 
              onChange={this.handleChange}
            />
          </li>
          <li>
            <label htmlFor="confirmation">Confirmation</label>
            <input 
              name='confirmation' 
              value={this.state.confirmation} 
              type="password" id="confirmation" 
              placeholder="Enter your password again" 
              onChange={this.handleChange}
            />
          </li>
          <li>
            <fieldset>
              <legend>User</legend>
              <ul className="flex-inner">
                <li>
                  <input 
                    name='type' 
                    value='sitter'
                    type="radio" 
                    id="sitter" 
                    onChange={this.handleChange}
                  />
                  <label htmlFor="sitter">Sitter</label>
                </li>
                <li>
                  <input 
                    name='type' 
                    value='owner'
                    type="radio" 
                    id="owner" 
                    onChange={this.handleChange}
                  />
                  <label htmlFor="owner">Owner</label>
                </li>
              </ul>
            </fieldset>
          </li>
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    );
  };
};

export default Signup;
