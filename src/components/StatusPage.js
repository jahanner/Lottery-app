import React, { Component } from "react";
import logo from "../images/logo-circle.png";
import Clock from "./countdown-timer.js";
import "../styles/App.css";
import Header from "./Header.js";
import Odds from "./odds";
import { watch } from "redux-easy";
import moment from "moment";

// const convertMS = milliseconds => {
//   let day, hour, minute, seconds;
//   seconds = Math.floor(milliseconds / 1000);
//   minute = Math.floor(seconds / 60);
//   seconds = seconds % 60;
//   hour = Math.floor(minute / 60);
//   minute = minute % 60;
//   day = Math.floor(hour / 24);
//   hour = hour % 24;
//   return {
//     day: day,
//     hour: hour,
//     minute: minute,
//     seconds: seconds
//   };
// };

class StatusPage extends Component {
  render() {
    const { lotteryDate, prizeDescription, winnerName } = this.props;

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
        </div>
        {lotteryDate === moment.now ? (
          <h2 className="Winner">
            Our winner is {winnerName}
            Congratulations, you win a {prizeDescription.toUpperCase()}!!!!
          </h2>
        ) : (
          <h2>The lottery hasn't been drawn yet, check back soon!</h2>
        )}
      </div>
      //TODO: only set winner and prize description when countdown timer === 0;
    );
  }
}

export default watch(StatusPage, {
  lotteryDate: "lotteryApp.lotteryDate",
  prizeDescription: "lotteryApp.prizeDescription",
  winnerName: "lotteryApp.winnerName"
});
