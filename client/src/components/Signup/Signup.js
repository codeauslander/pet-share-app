import React from 'react';
import './Signup.css';

class Signup extends React.Component {

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
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
  }

  // uploadImage(event) {
  //   if (event.target.files.length > 0) {
  //     console.log(this.newImageTag.id);
  //     var formData = new FormData();
  //     formData.append("name", this.newImageName);
  //     formData.append("tag_id", this.newImageTag.id);

  //     formData.append("image_url", event.target.files[0]);

  //     axios.post("/images", formData).then(
  //       function(response) {
  //         console.log(response);
  //         this.newImageName = "";
  //         event.target.value = "";
  //         this.images.push(response.data);
  //       }.bind(this)
  //     );
  //   }
  // }

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

    // var formData = new FormData();
    // var fileField = sitter_image.files[0];

    // formData.append('username', 'abc123');
    // formData.append('avatar', fileField.files[0]);

    // const image = event.target.files ? event.target.files[0] : 'file:///Users/u/Downloads/z.jpg'

    // var formData = new FormData();
    // var fileField = document.querySelector("input[type='file']");

    // // formData.append('username', 'abc123');
    // formData.append('avatar', fileField.files[0]);

    // console.log(fileField)

    // console.log(sitter_image);
    // console.log(petowner_image);

    fetch('/users',{
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json; charset=utf-8 proxy_set_header X-Forwarded-Proto $scheme;",
      },
      body: JSON.stringify({

        type: type,

        name: name,
        email: email,
        password: password,
        password_confirmation: confirmation,
        zipcode: zipcode,

        pet_name: pet_name,
        pet_bio: pet_bio,
        start_date: start_date,
        end_date: end_date,

        
        petowner_image: petowner_image,
        // petowner_image: image,
        // petowner_image: 'C:\\fakepath\\z.jpg',
        

        bio: bio,
        // sitter_image: formData.avatar,
        // sitter_image: image,
        sitter_image: sitter_image,
      }),
    })
    .then( response => {
      console.log(response.json);
      return response.json
    } )
    .catch( error => console.log(error) );
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }
 
  render() {

    const { type } = this.state

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
          value={this.state.petowner_image} 
          type="file" id="petowner_image" 
          placeholder="Pick up the image for your pet from your machine." 
          accept="image/*"
          onChange={this.handleChange}
        />
      </li>
    </React.Fragment>
      
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
          value={this.state.sitter_image} 
          type="file" id="sitter_image" 
          placeholder="Upload an image of You"
          accept="image/*" 
          onChange={this.handleChange}
        />
      </li>
    </React.Fragment>

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
  };
};

export default Signup;
