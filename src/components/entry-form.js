import React, { Component } from "react";
import { Input, dispatchSet, watch } from "redux-easy";

class EntryForm extends Component {
  handleAddOption = e => {
    e.preventDefault();
    //TODO: needs to add email and name to database

    const { email, name, numberOfEntries } = this.props;

    if (!name || !email) {
      dispatchSet("lotteryApp.nameEmailError", "Enter a name and email fool");
    } else {
      dispatchSet("lotteryApp.nameEmailError", "");
      dispatchSet("lotteryApp.numberOfEntries", numberOfEntries + 1);
    }
    //TODO: push to status page after successful submit
  };

  render() {
    const { nameEmailError } = this.props;
    console.log(this.props);
    return (
      <div>
        {nameEmailError && <p className="add-option-error">{nameEmailError}</p>}
        <form className="entry-form-submit" onSubmit={this.handleAddOption}>
          <label className="user-email" type="email">
            Email:{" "}
          </label>
          <Input type="email" path="lotteryApp.email" />
          <label className="user-name" type="text">
            {" "}
            Name:{" "}
          </label>
          <Input type="text" path="lotteryApp.name" />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

export default watch(EntryForm, {
  nameEmailError: "lotteryApp.nameEmailError",
  name: "lotteryApp.name",
  numberOfEntries: "lotteryApp.numberOfEntries",
  email: "lotteryApp.email"
});
