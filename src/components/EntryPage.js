import React, { Component } from "react";
import logo from "../images/logo-circle.png";
import EntryForm from "./entry-form.js";
import Clock from "./countdown-timer.js";
import "../styles/App.css";
import Header from "./Header.js";
import { connect } from "react-redux";
import Odds from "./odds";

class EntryPage extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "February 29, 2018" };
  }

  render(props) {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="title/odds">
              <h1 className="App-title">Welcome to Lottery App</h1>
              <Odds />
            </div>
            <div className="Clock">
              <Clock deadline={this.state.deadline} />
            </div>
          </header>
        </div>
        <div>
          <Header />
          <h2 className="Prize-Description">Prize Description Here...</h2>
          <p className="App-intro">To get started, enter your info.</p>
        </div>
        <EntryForm deadline={this.state.deadline} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deadline: state.lotteryDate
  };
};
export default connect(mapStateToProps)(EntryPage);
// export default EntryPage;
