import React from 'react';
import './Main.css';
import axios from 'axios';
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      petowners: [],
    };
  }
  componentDidMount() {
    this.getPetsowners();
  }
  getPetsowners() {
    axios.get('/api/petowners')
      .then( response => {
        const petowners = response.data.petowners;
        this.setState({ petowners: petowners});
      })
      .catch( error => console.log(error));
  }
  render() {
    const { petowners } = this.state;
    console.log(petowners);
    return (
      <main className={'main'}>

        <div className={'images'}>
          {
            petowners.map( petowner => <div key={petowner.index}>
              <img  src={petowner.petowner_image} alt='pet'/>
            </div>)
          }
        </div>
        <div className={'content'}>
          <article>
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
          </article>
          <article>
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
          </article>
          <article>
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
            Eu qui aute laboris deserunt esse esse minim consectetur 
            elit enim aliquip labore laboris.
          </article>
        </div>
      </main>
    );
  }
}
export default Main;
