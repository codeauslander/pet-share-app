import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Users from "../Users/Users";
import Carousel from "../Carousel/Carousel";
import Chatkit from "../Chatkit/Chatkit";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false
    };
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backDropClickHandler = this.backDropClickHandler.bind(this);
  }

  drawerToggleClickHandler() {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }

  backDropClickHandler() {
    this.setState({ sideDrawerOpen: false });
  }

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div style={{ height: 100 + "%" }}>
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}

        <Route path="/" exact component={Main} />
        <Route path="/main" component={Main} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/carousel" component={Carousel} />
        <Route path="/chatkit" component={Chatkit} />

        <Footer />
      </div>
    );
  }
}

export default App;
