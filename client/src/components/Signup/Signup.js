import React from 'react';
import './Signup.css';
import axios from 'axios';

class Signup extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmation: '',
      zipcode: '',
  
      pet_name: '',
      pet_bio: '',
      start_date: '',
      end_date: '',
      petowner_image: '',
  
      bio: '',
      sitter_image: '',
      
      type: 'sitter',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { 
      type,

      name,
      email,
      password,
      confirmation,
      zipcode,

      pet_name,
      pet_bio,
      start_date,
      end_date,
      petowner_image,

      bio,
      sitter_image,
    } = this.state;

    const formData = new FormData();

    formData.append('type', type);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', confirmation);
    formData.append('zipcode', zipcode);

    formData.append('pet_name', pet_name);
    formData.append('pet_bio', pet_bio);
    formData.append('start_date', start_date);
    formData.append('end_date', end_date);
    formData.append('petowner_image', petowner_image);

    formData.append('bio', bio);
    formData.append('sitter_image', sitter_image);
    
    axios.post('/users', formData)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));

  }

  handleChange(event) {
    const { name, value } = event.target;

    switch (name) {
    case 'petowner_image':
      this.setState({[name]: event.target.files[0]});
      break;
    case 'sitter_image':
      this.setState({[name]: event.target.files[0]});
      break;
    default:
      this.setState({[name]: value});
    }
  }
 
  render() {

    const { type } = this.state;

    const form_petowner = <React.Fragment>
      <li>
        <label htmlFor="pet_name">Pet Name</label>
        <input 
          name='pet_name' 
          value={this.state.pet_name} 
          type="text" id="pet_name" 
          placeholder="Pet name." 
          onChange={this.handleChange}
        />
      </li>
      <li>
        <label htmlFor="pet_bio">Pet bio</label>
        <input 
          name='pet_bio' 
          value={this.state.pet_bio} 
          type="text" id="pet_bio" 
          placeholder="Pet bio." 
          onChange={this.handleChange}
        />
      </li>
      <li>
        <label htmlFor="start_date">Start Date</label>
        <input 
          name='start_date' 
          value={this.state.start_date} 
          type="text" id="start_date" 
          placeholder="Start date, When the sitter starts to take care of your pet." 
          onChange={this.handleChange}
        />
      </li>
      <li>
        <label htmlFor="end_date">end Date</label>
        <input 
          name='end_date' 
          value={this.state.end_date} 
          type="text" id="end_date" 
          placeholder="End date, When the sitter return the pet to the owner." 
          onChange={this.handleChange}
        />
      </li>
      <li>
        <label htmlFor="petowner_image">Dog image</label>
        <input 
          name='petowner_image' 
          type="file" id="petowner_image" 
          placeholder="Pick up the image for your pet from your machine." 
          accept="image/*"
          onChange={this.handleChange}
        />
      </li>
    </React.Fragment>;
      
    const form_sitter = <React.Fragment>
      <li>
        <label htmlFor="bio">Bio</label>
        <input 
          name='bio' 
          value={this.state.bio} 
          id="bio" 
          placeholder="Describe Yourself as a guardian" 
          onChange={this.handleChange}
        />
      </li>
      <li>
        <label htmlFor="sitter_image">Profile image</label>
        <input 
          name='sitter_image' 
          type="file" id="sitter_image" 
          placeholder="Upload an image of You"
          accept="image/*" 
          onChange={this.handleChange}
        />
      </li>
    </React.Fragment>;

    return (
      <form className='signup' onSubmit={this.handleSubmit} encType='multipart/form-data'>
        <ul className="flex-outer">
          <li>
            <label htmlFor="name">Name</label>
            <input 
              name='name' 
              value={this.state.name} 
              type="name" 
              id="name" 
              placeholder="Enter your name" 
              onChange={this.handleChange}
            />
          </li>
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
            <label htmlFor="zipcode">Zipcode</label>
            <input 
              name='zipcode' 
              value={this.state.zipcode} 
              type="text" id="zipcode" 
              placeholder="Zipcode" 
              onChange={this.handleChange}
            />
          </li>
          <li>
            <fieldset>
              <legend>User</legend>
              <ul className="flex-inner">
                <li>
                  <input 
                    defaultChecked
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
                    value='petowner'
                    type="radio" 
                    id="petowner" 
                    onChange={this.handleChange}
                  />
                  <label htmlFor="petowner">Petowner</label>
                </li>
              </ul>
            </fieldset>
          </li>
          
          { type === 'petowner' ? form_petowner : form_sitter }
          
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    );
  }
};

export default Signup;
