import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import React, { Component } from "react";
import "react-dates/lib/css/_datepicker.css";
import { dispatchSet, watch } from "redux-easy";
import moment from "moment";
// import DateTime from "react-datetime";
// import { Redirect } from "react-router";
const now = moment().format("YYYY-MM-DDThh:mm");

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
    console.log(lotteryDate);
    // const { lotteryDate } = this.props.lotteryApp;
    if (description && lotteryDate) {
      dispatchSet("lotteryApp.error", "");
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
    console.log(lotteryDate);
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
          {/* <SingleDatePicker
            date={moment(lotteryDate)}
            onDateChange={this.onDateChange}
            focused={calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            displayFormat="MMM Do, YYYY"
            id="date"
          /> */}
          {/* <input
            id="date"
            type="date"
            defaultValue={moment().format("YYYY-MM-D")}
            onChange={this.onDateChange}
            required
          />
          <label className="time" type="text">
            Time:
          </label>
          <input id="time" type="time" defaultValue="18:30" /> */}
          <input
            type="datetime-local"
            defaultValue={moment(lotteryDate).format("YYYY-MM-DDThh:mm")}
            required
          />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default watch(LotterySetUp, { lotteryApp: "" });
