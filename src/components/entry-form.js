import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatchSet } from "redux-easy";

class EntryForm extends Component {
  handleAddOption = e => {
    e.preventDefault();

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
    const { error } = this.props;

    return (
      <div>
        {error && <p className="add-option-error">{error}</p>}
        <form className="entry-form-submit" onSubmit={this.handleAddOption}>
          <label className="user-email" type="email">
            Email:{" "}
          </label>
          <input type="email" name="email" />
          <label className="user-name" type="text">
            {" "}
            Name:{" "}
          </label>
          <input type="text" name="name" />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { error } = state.lotteryApp;
  return { error };
};

export default connect(mapStateToProps)(EntryForm);
