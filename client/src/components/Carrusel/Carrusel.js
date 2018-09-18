import React, { Component } from 'react';
import './Carrusel.css';
import wolf from '../../img/full_wolf_moon.jpg';
import duck from '../../img/duck.jpg';
import cat from '../../img/cute-kittens.jpg';


class Carrusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      index: 0,
      image: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.setState({ images: [wolf,cat,duck], image: wolf});
  }
  handleClick(event) {
    const name = event.target;
    let index = this.state.index;
    switch (name) {

    case 'left':
      index = this.state.index - 1;
      this.setState({index: index, image: this.state.images[index]});
      break;
      
    case 'right':
      index = this.state.index + 1;
      this.setState({index: index, image: this.state.images[index]});
      break;

    case 'confirm':
      console.log('You will take care of this creature' + this.state.image);
      break;
    
    default:
      break;
    }
  }

  render() {
    return (
      <div className='carrusel'>
        <button name='left' onClick={this.handleClick}>Left</button>
        <div className='card'>
          <img className='image' src={this.state.image} alt='wolf_moon'/>
          <button className='confirm' name='confirm' onClick={this.handleClick}>Confirm</button>
        </div>
        <button name='right' onClick={this.handleClick}>Right</button>
      </div>
    );
  }
}

export default  Carrusel;
