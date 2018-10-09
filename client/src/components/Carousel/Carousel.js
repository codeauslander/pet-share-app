import React, { Component } from "react";
import "./Carousel.css";
import Card from "../Card/Card";
import data from "../data/data";
import axios from 'axios';

// class component
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      property: '',
    };

    this.getPets = this.getPets.bind(this);
  }

  getPets() {
    console.log('something');
    axios.get('/api/petowners')
      .then( response => this.setState({
        properties: response.data.petowners,
        property: response.data.petowners[0]
      }) )
      .catch(error => console.log(error));
  }

  componentDidMount(){
    console.log('first', data.properties[0]);
    this.getPets();
  }


  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  render() {
    const { properties, property } = this.state;
    console.log('this is this',properties)
    return (
      <div className="Carousel">
        <button
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        >
          Prev
        </button>
        <button
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}
        >
          Next
        </button>

        <div className="page">
          <section>
            <h1>Find a pet to share!</h1>
          </section>

          <div className="col">
            <div className={`cards-slider active-slide-${property.index + 1}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${property.index *
                    (100 / properties.length)}%)`
                }}
              >
                {properties.map(property => (
                  <Card key={property._id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
