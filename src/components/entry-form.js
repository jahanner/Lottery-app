import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatchSet } from "redux-easy";

class EntryForm extends Component {
  handleAddOption = e => {
    e.preventDefault();

    //TODO: needs to add email and name to database

    const { email, name, numberOfEntries } = this.props;

    if (!name || !email) {
      dispatchSet("lotteryApp.error", "Enter a name and email fool");
    } else {
      dispatchSet("lotteryApp.error", "");
      dispatchSet("lotteryApp.name", name);
      dispatchSet("lotteryApp.email", email);
      dispatchSet("lotteryApp.numberOfEntries", numberOfEntries + 1);
    }
    //TODO: push to status page after successful submit
  };

  render() {
    const { error, name, email } = this.props;
    console.log(this.props);
    return (
      <div>
        {error && <p className="add-option-error">{error}</p>}
        <form className="entry-form-submit" onSubmit={this.handleAddOption}>
          <label className="user-email" type="email">
            Email:{" "}
          </label>
          <input type="email" name="email" value={email} />
          <label className="user-name" type="text">
            {" "}
            Name:{" "}
          </label>
          <input type="text" name="name" value={name} />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { error, name, email, numberOfEntries } = state.lotteryApp;
  return { error, name, email, numberOfEntries };
};

export default connect(mapStateToProps)(EntryForm);
