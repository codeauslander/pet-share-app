import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false
    }
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
  }

  drawerToggleClickHandler() {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }
  
  render() {
    return (
      <div style={{height:100+'%'}}>
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        <main style={{marginTop:'64px'}}>
          <p>Some</p>
        </main>
      </div>
    );
  }
}

export default App;
