import React, { Component } from "react";
import { watch } from "redux-easy";
// import database from "../firebase/firebase.js";
// import moment from "moment";
// import Modal from "react-responsive-modal";
import signIn from "./login.js";

class EntryForm extends Component {
  // handleAddOption = e => {
  //   e.preventDefault();
  //
  //   const { email, name, numberOfEntries } = this.props;
  //   const now = moment().format("MMM Do YYYY hh:mm");
  //   const contestant = {
  //     name: name,
  //     email: email,
  //     timeEntered: now
  //   };
  //
  //   if (!name || !email) {
  //     dispatchSet("lotteryApp.nameEmailError", "Enter a name and email fool");
  //   } else {
  //     dispatchSet("lotteryApp.nameEmailError", "");
  //     dispatchSet("lotteryApp.numberOfEntries", numberOfEntries + 1);
  //     database.ref(`NumberOfEntries`).set(numberOfEntries + 1);
  //     database.ref(`Entries`).push(contestant);
  //   }
  // };

  render() {
    // const { open } = this.state;
    const { users, lotteryDate, winnerName } = this.props;
    console.log(this.props);
    return (
      <div>
        <button
          className="button"
          onClick={() => {
            if (lotteryDate === "") {
              window.alert("Can't enter until lottery has been created");
            } else if (winnerName === "") {
              window.alert("Can't enter after the drawing time has passed");
            } else signIn(users);
          }}
        >
          Sign in with Google
        </button>
      </div>
    );
  }
}

export default watch(EntryForm, {
  users: "lotteryApp.users",
  numberOfEntries: "lotteryApp.numberOfEntries",
  lotteryDate: "lotteryApp.lotteryDate",
  winnerName: "lotteryApp.winnerName"
});
