import "react-dates/initialize";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import React from "react";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("MMM, Do, YYYY"));

export default class LotterySetUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      calendarFocused: false,
      date: props.lottery ? moment(props.lottery.date) : moment(),
      prizeDescription: props.lottery ? props.lottery.prizeDescription : "",
      winnerMessage: ""
    };
  }
  onDateChange = date => {
    if (date) {
      this.setState(() => ({ date }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.prizeDescription || !this.state.date) {
      this.setState(() => ({ error: "Please provide description and date" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        date: this.state.date.valueOf(),
        prizeDescription: this.state.prizeDescription
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form className="entry-form-submit" onSubmit={this.onSubmit}>
          <label className="prize-description" type="text">
            Prize Description:
          </label>
          <input type="text" name="prize" />
          <label className="date" type="text">
            Drawing Date:
          </label>
          <SingleDatePicker
            date={this.state.date}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
          />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}
