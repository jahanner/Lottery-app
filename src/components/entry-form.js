import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatchSet } from "redux-easy";

class EntryForm extends Component {
  handleAddOption = e => {
    e.preventDefault();
    // const name = document.getElementById("name").value;
    // const email = document.getElementById("email").value;

    //TODO: Get this from Redux instead of from the DOM.
    const option = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);
    dispatchSet("lotteryApp.error", error);

    if (!error) {
      //TODO: Set this in Redux instead of in the DOM.
      dispatchSet("lotteryApp.error", "");
    }
  };

  render() {
    const { error, name, email } = this.props;
    console.log(name);
    return (
      <div>
        {error && <p className="add-option-error">{error}</p>}
        <form className="entry-form-submit" onSubmit={this.handleAddOption}>
          <label className="user-email" type="email">
            Email:{" "}
          </label>
          <input type="email" id="email" value={email} />
          <label className="user-name" type="text">
            {" "}
            Name:{" "}
          </label>
          <input type="text" id="name" value={name} />
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
