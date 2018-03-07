import React, { Component } from "react";
import logo from "../images/logo-circle.png";
import Clock from "./countdown-timer.js";
import "../styles/App.css";
import Header from "./Header.js";
import Odds from "./odds";
import { dispatchSet, watch } from "redux-easy";
import moment from "moment";
import { NavLink } from "react-router-dom";
import Img from "react-image";
// import database from "../firebase/firebase.js";
// import sendEmail from "./sendEmail.js";

class StatusPage extends Component {
  render() {
    const { lotteryDate, prizeDescription, users } = this.props;
    let time;
    lotteryDate !== "" ? (time = lotteryDate - moment.now()) : (time = "");
    // const entriesArray = [];
    // const entries = database.ref("Entries").on("value", function(snapshot) {
    //   console.log(snapshot.val()); //get data from Firebase
    //   snapshot.forEach(function(childSnapshot) {
    //     let childData = childSnapshot.val();
    //     console.log(childData);
    //     entriesArray.push(childData.email);//push data to array
    //   });
    // });
    // console.log(entriesArray);
    const winner = users[Math.floor(Math.random() * users.length)]; //choose random winner
    if (winner === undefined) {
      dispatchSet("lotteryApp.winnerName", "");
    } else {
      dispatchSet("lotteryApp.winnerName", winner.name);
    }
    console.log(users);
    console.log(time);

    return (
      <div className="App">
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="title/odds">
              <h1 className="App-title">Lottery Status</h1>
              <Odds />
            </div>
          </header>
        </div>
        <div>
          <Header />
        </div>
        <h3 className="Clock">
          <Clock deadline={lotteryDate} />
        </h3>

        {time && prizeDescription !== "" ? (
          time <= 0 ? (
            // (sendEmail(winner.email, "test", "just checking if it works", ""),
            <h2 className="Prize-Description">
              <p>
                The winner is {winner.name}! Congratulations, you win a{" "}
                <span>{prizeDescription.toUpperCase()}</span>!!!!
              </p>
            </h2>
          ) : (
            <h2 className="Prize-Description">
              <p>
                {" "}
                The lottery hasn't been drawn yet, check back soon!<br /> You
                could win a <span>{prizeDescription}</span> on{" "}
                {moment(lotteryDate).format("MMM Do")} at{" "}
                {moment(lotteryDate).format("hh:mmA")}!!!
              </p>
            </h2>
          )
        ) : (
          <h2>
            <br />
            No one set up the lottery yet
            <br />
            <Img
              src="https://i.imgflip.com/10wz25.jpg"
              className="status-picture"
            />
          </h2>
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
