import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import React, { Component } from "react";
import "react-dates/lib/css/_datepicker.css";
import { connect } from "react-redux";
import { dispatchSet } from "redux-easy";

class LotterySetUp extends Component {
  onDateChange = date => {
    if (date) {
      dispatchSet("lotteryApp.lotteryDate", date);
      //const {date} = date.target
      // dispatch("setLotteryDate", date);
    }
  };

  // onDescriptionChange = e => {
  //   // const {description} = e.target.value;
  //   // this.setState(() => ({ description }));
  //   dispatch("setPrizeDescription", description);
  // };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    const description = document.getElementById("prizeDescriptionInput").value;
    console.log(description);
    const { prizeDescription, lotteryDate } = this.props.lotteryApp;
    if (prizeDescription && lotteryDate) {
      dispatchSet("lotteryApp.error", "");
      dispatchSet("lotteryApp.prizeDescription", description);
      // dispatch("setError", "Please provide description and date");
    } else {
      dispatchSet("lotteryApp.error", "Please provide description and date");
      // dispatch("setError", "");
      // this.props.onSubmit({
      //   date: this.state.date.valueOf(),
      //   prizeDescription: this.state.prizeDescription
      // });
    }
  };

  render() {
    const { lotteryApp } = this.props;
    console.log(lotteryApp);
    const { error } = lotteryApp;
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
            date={this.props.lotteryDate}
            onDateChange={this.onDateChange}
            focused={this.props.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            displayFormat="MMM Do, YYYY"
          />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  console.log(state);
  const { lotteryApp } = state;
  return { lotteryApp };
};

export default connect(mapState)(LotterySetUp);
