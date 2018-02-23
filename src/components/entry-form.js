import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatchSet } from "redux-easy";

class EntryForm extends Component {
  handleAddOption = e => {
    e.preventDefault();

    //TODO: Get this from Redux instead of from the DOM.
    //needs to add email and name to database

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
      dispatchSet("lotteryApp.error", "Enter a name and email fool");
    } else {
      dispatchSet("lotteryApp.error", "");
      dispatchSet("lotteryApp.name", name);
      dispatchSet("lotteryApp.email", email);
    }
    //TODO: push to status page after successful submit
  };

  render() {
    const { error } = this.props;
    console.log(this.props);
    return (
      <div>
        {error && <p className="add-option-error">{error}</p>}
        <form className="entry-form-submit" onSubmit={this.handleAddOption}>
          <label className="user-email" type="email">
            Email:{" "}
          </label>
          <input type="email" name="email" id="email" />
          <label className="user-name" type="text">
            {" "}
            Name:{" "}
          </label>
          <input type="text" name="name" id="name" />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { error, name, email } = state.lotteryApp;
  return { error, name, email };
};

export default connect(mapStateToProps)(EntryForm);
