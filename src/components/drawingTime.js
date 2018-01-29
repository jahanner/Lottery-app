import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { SingleDatePicker } from "react-dates";
import React from "react";

export default class lotterySetUp extends React.Component {
  state = {
    error: undefined,
    date: null,
    focused: false
  };

  handleAddOption = e => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="entry-form-submit" onSubmit={this.handleAddOption}>
          <label className="prize-description" type="text">
            {" "}
            Prize Description:{" "}
          </label>
          <input type="text" name="prize" />
          <SingleDatePicker
            date={this.state.date}
            onDateChange={date => this.setState({ date })}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}
