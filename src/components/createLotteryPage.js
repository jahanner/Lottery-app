import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
// import { SingleDatePicker } from "react-dates";
import React, { Component } from "react";
import logo from "../images/logo-circle.png";
import DrawingTime from "./drawingTime.js";
import "../styles/App.css";
import Header from "./Header.js";

class CreateApp extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "January, 27, 2018" };
  }

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-Header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="title/odds">
              <h1 className="App-title">Create your lottery app </h1>
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
