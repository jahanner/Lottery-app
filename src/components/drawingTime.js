import "react-dates/initialize";
import React, { Component } from "react";
import "react-dates/lib/css/_datepicker.css";
import { dispatchSet, watch } from "redux-easy";
import DateTime from "react-datetime";
import Modal from "react-modal";
import database from "../firebase/firebase.js";
import moment from "moment";
// import { Redirect } from "react-router";

class LotterySetUp extends Component {
  onDateChange = lotteryDate => {
    dispatchSet("lotteryApp.lotteryDate", lotteryDate.valueOf());
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
    const numberOfEntries = this.props.lotteryApp.numberOfEntries;
    console.log(lotteryDate);
    if (description && lotteryDate) {
      const date = moment(lotteryDate).format("MMM Do YYYY h:mm");
      dispatchSet("lotteryApp.lotteryError", "");
      database.ref("NumberOfEntries").set(numberOfEntries);
      database.ref("LotteryDate").set(date);
      // <Redirect to="/status" />;
    } else {
      dispatchSet(
        "lotteryApp.lotteryError",
        "Please provide description and date of lottery"
      );
    }
    //TODO: push to status page onSubmit
  };

  render() {
    const { lotteryApp } = this.props;
    console.log(lotteryApp);
    const {
      lotteryError,
      lotteryDate,
      prizeDescription,
      numberOfEntries
    } = lotteryApp;
    console.log(lotteryDate);
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
            //<Input path='lotteryApp.prizeDescription' onChange={this.onDescriptionChange}
          />
          <label className="date" type="text">
            Drawing Date:{" "}
            <DateTime
              onFocus={this.onFocusChange}
              onChange={this.onDateChange}
              className="date"
            />
          </label>
          {/* <SingleDatePicker
            date={moment(lotteryDate)}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            displayFormat="MMM Do, YYYY"
            id="date"
          /> */}
          {/* <DateTime onFocus={this.onFocusChange} onChange={this.onDateChange} /> */}
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default watch(LotterySetUp, { lotteryApp: "" });
