import React, { Component } from "react";
import logo from "../images/logo-circle.png";
import Clock from "./countdown-timer.js";
import "../styles/App.css";
import Header from "./Header.js";
import Odds from "./odds";

class StatusPage extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "January, 27, 2019" };
  }
  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="title/odds">
              <h1 className="App-title">Lottery Status</h1>
              <Odds />
            </div>
            <div className="Clock">
              <Clock deadline={this.props.deadline} />
            </div>
          </header>
        </div>
        <div>
          <Header />
          <h2 className="Prize-Description">The winner is...</h2>
        </div>
      </div>
    );
  }
}

export default StatusPage;
