import React, { Component } from "react";
import logo from "../images/logo-circle.png";
import Clock from "./countdown-timer.js";
import "../styles/App.css";
import Header from "./Header.js";
import Odds from "./odds";
import { watch } from "redux-easy";
import moment from "moment";

class StatusPage extends Component {
  render() {
    const { lotteryDate, prizeDescription, winnerName, users } = this.props;
    let time;
    lotteryDate !== "" ? (time = lotteryDate - moment.now()) : (time = "");
    const winner = users[Math.floor(Math.random() * users.length)];
    console.log(users);
    console.log(time);
    console.log(winner.name);
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
        {/* {prizeDescription === "" ? (
          <h2 className="Prize-Description">No prize has been set</h2>
        ) : (
          <h2 className="Prize-Description">
            You could win a {prizeDescription} on{" "}
            {moment(lotteryDate).format("MMM Do")} at{" "}
            {moment(lotteryDate).format("hh:mmA")}!!!
          </h2>
        )} */}
        {time && prizeDescription !== "" ? (
          time <= 0 ? (
            <h2 className="Winner">
              The winner is {winner.name}! Congratulations, you win a{" "}
              {prizeDescription.toUpperCase()}!!!!
            </h2>
          ) : (
            <h2>
              The lottery hasn't been drawn yet, check back soon!<br /> You
              could win a {prizeDescription} on{" "}
              {moment(lotteryDate).format("MMM Do")} at{" "}
              {moment(lotteryDate).format("hh:mmA")}!!!
            </h2>
          )
        ) : (
          <h2>The lottery has not been set up yet</h2>
        )}
      </div>
    );
  }
}

export default watch(StatusPage, {
  lotteryDate: "lotteryApp.lotteryDate",
  prizeDescription: "lotteryApp.prizeDescription",
  winnerName: "lotteryApp.winnerName",
  users: "lotteryApp.users"
});
