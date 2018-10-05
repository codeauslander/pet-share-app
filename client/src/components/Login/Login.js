import React from 'react';
import './Login.css';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  state = {
    email: '',
    password: '',
    erros: '',
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password, } = this.state;
    const parameters = { auth: { email, password } };
    axios.post('/user_token', parameters)
    .then( response => {
      axios.defaults.headers.common.Authorization = `Bearer ${ response.data.jwt }`;
      localStorage.setItem('jwt', response.data.jwt);
      console.log(localStorage);
      this.props.history.push('/main');
    })
    .catch( error => console.log(error) );

    axios.get('/users')
    .then( response => {
      console.log('hey');
      console.log(response.data);
      return <Navbar user = { response.data } />
    }).catch( error => console.log(error));



  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className='login' onSubmit={this.handleSubmit}>
        <ul className='flex-outer-login'>
          <li>
            <label htmlFor="email">Email</label>
            <input 
              name='email'
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
              type="password" 
              id='password' 
              placeholder='Enter your password'
              onChange={this.handleChange}
            />
          </li>
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    );
  }
}

export default Login;