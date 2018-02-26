import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import React, { Component } from "react";
import "react-dates/lib/css/_datepicker.css";
import { connect } from "react-redux";
import { dispatchSet } from "redux-easy";
import moment from "moment";
// import { Redirect } from "react-router";

class LotterySetUp extends Component {
  onDateChange = lotteryDate => {
    // console.log(this.props.lotteryApp);
    dispatchSet("lotteryApp.lotteryDate", lotteryDate);
    //TODO: successfully update date in store by clicking SingleDatePicker
  };

  onFocusChange = ({ focused }) => {
    dispatchSet("lotteryApp.calendarFocused", focused);
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    dispatchSet("lotteryApp.prizeDescription", { description });
  };

  onSubmit = e => {
    e.preventDefault();
    const description = document.getElementById("prizeDescriptionInput").value;
    const lotteryDate = document.getElementById("date").value;
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
    //TODO: push to status page displaying countdown to set lottery date
  };

  render() {
    const { lotteryApp } = this.props;
    console.log(lotteryApp);
    const { error, lotteryDate } = lotteryApp;
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
            value={this.props.prizeDescription}
            onChange={this.onDescriptionChange}
            //<Input path='lotteryApp.prizeDescription' onChange={this.onDescriptionChange}
          />
          <label className="date" type="text">
            Drawing Date:
          </label>
          <SingleDatePicker
            date={
              // this.props.lotteryApp.lotteryDate !== null
              //   ? moment(this.props.lotteryApp.lotteryDate)
              //   : moment()
              lotteryApp.lotteryDate !== 0
                ? moment(this.props.lotteryDate)
                : moment()
            }
            onDateChange={this.onDateChange}
            focused={this.props.calendarFocused}
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
};

export default connect(mapState)(LotterySetUp);
