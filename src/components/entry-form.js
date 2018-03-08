import React, { Component } from "react";
import { watch } from "redux-easy";
// import database from "../firebase/firebase.js";
import moment from "moment";
// import Modal from "react-responsive-modal";
import signIn from "./login.js";

class EntryForm extends Component {
  render() {
    const { users, lotteryDate } = this.props;
    console.log(this.props);
    return (
      <div>
        <button
          className="button"
          onClick={() => {
            if (lotteryDate === "") {
              window.alert("Can't enter until lottery has been created");
            } else if (lotteryDate - moment.now() < 0) {
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
  lotteryDate: "lotteryApp.lotteryDate"
});
