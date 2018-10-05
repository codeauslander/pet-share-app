import React, { Component } from 'react';
import axios from 'axios';

class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    // this.onChange = this.onChange.bind(this);
    this.currentUser = this.currentUser.bind(this);
  }

  currentUser() {
    axios.get('/users')
      .then((response) => {
        const user = response.data;
        this.setState({ username: user.name });
        console.log(user);
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.currentUser();
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  // onChange(e) {
  //   this.setState({ username: e.target.value });
  // }

  render() {
    return (
      <div>
        <div>
          <h2>What is your username?</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Your full name"
              value={this.state.username}
              // onChange={this.onChange}
            />
            <input type="submit" value='Talk to the Petowners'/>
          </form>
        </div>
      </div>
    );
  }
}

export default UsernameForm;