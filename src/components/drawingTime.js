import React, { Component } from "react";
import { dispatchSet, watch } from "redux-easy";
import DateTime from "react-datetime";
// import Modal from "react-responsive-modal";
import database from "../firebase/firebase.js";
import moment from "moment";

class LotterySetUp extends Component {
  // state = {
  //   open: false
  // };
  //
  // onOpenModal = () => {
  //   this.setState({ open: true });
  // };
  //
  // onCloseModal = () => {
  //   this.setState({ open: false });
  //   // window.location = "/status";
  // };

  onDateChange = lotteryDate => {
    if (lotteryDate > moment.now()) {
      dispatchSet("lotteryApp.lotteryDate", lotteryDate.valueOf());
    } else {
      dispatchSet("lotteryApp.lotteryDate", "");
    }
  };

  onFocusChange = ({ focused }) => {
    dispatchSet("lotteryApp.calendarFocused", focused);
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    dispatchSet("lotteryApp.prizeDescription", description);
  };

  onSubmit = e => {
    e.preventDefault();
    const description = this.props.lotteryApp.prizeDescription;
    const lotteryDate = this.props.lotteryApp.lotteryDate;
    // const numberOfEntries = this.props.lotteryApp.numberOfEntries;
    console.log(lotteryDate);
    if (description && lotteryDate) {
      const date = moment(lotteryDate).format("MMM Do YYYY h:mmA");
      dispatchSet("lotteryApp.lotteryError", "");
      database.ref("LotteryDate").set(date);
      database.ref("PrizeDescription").set(description);
      // this.onOpenModal;
      window.location = "/status";
    } else if (lotteryDate === "") {
      dispatchSet(
        "lotteryApp.lotteryError",
        "You can't set a date in the past fool"
      );
    } else {
      dispatchSet(
        "lotteryApp.lotteryError",
        "Please provide description and date of lottery"
      );
    }
  };

  render() {
    // const { open } = this.state;
    const { lotteryApp } = this.props;
    console.log(lotteryApp);
    const { lotteryError, prizeDescription } = lotteryApp;
    return (
      <div>
        <form className="entry-form-submit" onSubmit={this.onSubmit}>
          {lotteryError && <p>{lotteryError}</p>}
          <label className="prize-description" type="text">
            Prize Description:
          </label>

          <input
            id="prizeDescriptionInput"
            type="text"
            autoFocus
            value={prizeDescription}
            onChange={this.onDescriptionChange}
          />
          <label className="date" type="text">
            Drawing Date:{" "}
            <DateTime
              onFocus={this.onFocusChange}
              onChange={this.onDateChange}
              className="date"
            />
          </label>
          <button className="button">Submit</button>
          {/* <Modal
            open={open}
            onClose={this.onCloseModal}
            classNames={{ overlay: "custom-overlay", modal: "custom-modal" }}
          >
            <h2>Lottery date successfully set!</h2>
          </Modal> */}
        </form>
      </div>
    );
  }
}

export default watch(LotterySetUp, { lotteryApp: "" });
