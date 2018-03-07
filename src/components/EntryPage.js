import React, { Component } from "react";
import logo from "../images/logo-circle.png";
import EntryForm from "./entry-form.js";
import "../styles/App.css";
import Header from "./Header.js";
import moment from "moment";
import Odds from "./odds";
import { watch } from "redux-easy";

class EntryPage extends Component {
  render() {
    const { lotteryDate, prizeDescription, winnerName } = this.props;

    return (
      <div className="App">
        <div>
          <header className="App-Header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="title/odds">
              <h1 className="App-title">Welcome to Lottery App</h1>
              {lotteryDate != "" ? <Odds /> : ""}
            </div>
            <div className="Clock" />
          </header>
        </div>
        <div>
          <Header />
          {prizeDescription === "" ? (
            <h2 className="Prize-Description">No prize has been set yet</h2>
          ) : lotteryDate - moment.now() <= 0 ? (
            <h2 className="Prize-Description">
              {winnerName} won a {prizeDescription} on{" "}
              {moment(lotteryDate).format("MMM Do")} at{" "}
              {moment(lotteryDate).format("hh:mmA")}!!!{" "}
            </h2>
          ) : (
            <h2 className="Prize-Description">
              <p>
                You could win a <span>{prizeDescription}</span> on{" "}
                {moment(lotteryDate).format("MMM Do")} at{" "}
                {moment(lotteryDate).format("hh:mmA")}!!!
              </p>
            </h2>
          )}
          <h2 className="App-intro">To enter the lottery</h2>
        </div>
        <EntryForm />
      </div>
    );
  }
}

export default watch(EntryPage, {
  lotteryDate: "lotteryApp.lotteryDate",
  prizeDescription: "lotteryApp.prizeDescription",
  winnerName: "lotteryApp.winnerName"
});
