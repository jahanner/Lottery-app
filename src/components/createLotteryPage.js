import React, { Component } from "react";
import logo from "../images/logo-circle.png";
import DrawingTime from "./drawingTime.js";
import "../styles/App.css";
// import { connect } from "react-redux";
import Header from "./Header.js";
// import moment from "moment";

class CreateApp extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="App-Header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="title/odds">
              <h1 className="App-title-createApp">Create your lottery app </h1>
            </div>
          </header>
        </div>
        <div>
          <Header />
          <h2 className="Prize-Description">Enter Lottery App info here</h2>
        </div>
        <DrawingTime />
      </div>
    );
  }
}

export default CreateApp;
