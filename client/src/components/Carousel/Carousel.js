import React, { Component } from "react";
import "./Carousel.css";
import Card from "../Card/Card";
import axios from 'axios';

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
    axios.get('/api/petowners')
      .then( response => {
        const properties = response.data.petowners.map( 
        (property, index) => { 
          property.index = index
          return property;
        });
        this.setState({
          properties: properties,
          property: properties[0],
        })
      })
      .catch(error => console.log(error));
  }

  componentDidMount(){
    this.getPets();
  }


  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: this.state.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: this.state.properties[newIndex]
    });
  };

  render() {
    const { properties, property } = this.state;
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
          disabled={property.index === this.state.properties.length - 1}
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
                  <Card key={property.index} property={property} />
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
