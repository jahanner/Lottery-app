import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import React, { Component } from "react";
import "react-dates/lib/css/_datepicker.css";
import { connect } from "react-redux";
import { dispatchSet } from "redux-easy";
// import moment from "moment";
// import { Redirect } from "react-router";

class LotterySetUp extends Component {
  onDateChange = lotteryDate => {
    dispatchSet("lotteryApp.lotteryDate", lotteryDate);
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
    // const { lotteryDate } = this.props.lotteryApp;
    if (description && lotteryDate) {
      dispatchSet("lotteryApp.error", "");
      dispatchSet("lotteryApp.prizeDescription", description);
      dispatchSet("lotteryApp.lotteryDate", lotteryDate);
      // <Redirect to="/status" />;
    } else {
      dispatchSet(
        "lotteryApp.error",
        "Please provide description and date of lottery"
      );
    }
    //TODO: push to status page onSubmit
  };

  render() {
    const { lotteryApp } = this.props;
    console.log(lotteryApp);
    const {
      error,
      lotteryDate,
      prizeDescription,
      calendarFocused
    } = lotteryApp;
    console.log(lotteryDate._d);
    return (
      <div>
        <form className="entry-form-submit" onSubmit={this.onSubmit}>
          {error && <p>{error}</p>}
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
            Drawing Date:
          </label>
          <SingleDatePicker
            date={lotteryDate}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            displayFormat="MMM Do, YYYY"
            id="date"
          />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  const { lotteryApp } = state;
  return { lotteryApp };
  //TODO: take lotteryApp out of the state
};

export default connect(mapState)(LotterySetUp);
