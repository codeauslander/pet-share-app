import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop';
import Main from './components/Main/Main'
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false
    }
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backDropClickHandler = this.backDropClickHandler.bind(this);
  }

  drawerToggleClickHandler() {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  backDropClickHandler() {
    this.setState({sideDrawerOpen: false});
  }
  
  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler}/>;
    }
    return (
      <div style={{height:100+'%'}}>
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backDrop}
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
