import React, { Component } from "react";
import logo from "../images/logo-circle.png";
import Clock from "./countdown-timer.js";
import "../styles/App.css";
import Header from "./Header.js";
import Odds from "./odds";
import moment from "moment";
import { watch } from "redux-easy";

const convertMS = milliseconds => {
  let day, hour, minute, seconds;
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  return {
    day: day,
    hour: hour,
    minute: minute,
    seconds: seconds
  };
};

class StatusPage extends Component {
  render() {
    const { lotteryDate } = this.props;
    // const { lotteryDate } = this.props.lotteryApp;
    // console.log(lotteryDate);
    // const ms = lotteryDate.milliseconds() - moment.now();
    // const deadline = moment.duration(ms);
    //TODO: make clock deadline from lotteryDate

    return (
      <div className="App">
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="title/odds">
              <h1 className="App-title">Lottery Status</h1>
              <Odds />
            </div>
            <Clock deadline={lotteryDate} />
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

export default watch(StatusPage, { lotteryDate: "lotteryApp.lotteryDate" });
