import React, { Component } from "react";
import { Input, dispatchSet, watch } from "redux-easy";
import database from "../firebase/firebase.js";
import moment from "moment";
import Modal from "react-responsive-modal";
import signIn from "./login.js";

class EntryForm extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
    window.location = "/status";
  };
  handleAddOption = e => {
    e.preventDefault();
    //TODO: needs to add email and name to database

    const { email, name, numberOfEntries } = this.props;
    const now = moment().format("MMM Do YYYY hh:mm");
    const contestant = {
      name: name,
      email: email,
      timeEntered: now
    };

    if (!name || !email) {
      dispatchSet("lotteryApp.nameEmailError", "Enter a name and email fool");
    } else {
      dispatchSet("lotteryApp.nameEmailError", "");
      dispatchSet("lotteryApp.numberOfEntries", numberOfEntries + 1);
      database.ref(`NumberOfEntries`).set(numberOfEntries + 1);
      database.ref(`Entries`).push(contestant);
    }
    //TODO: push to status page after successful submit
  };

  render() {
    const { open } = this.state;
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
          <button className="button" onClick={this.onOpenModal}>
            Submit
          </button>
          <Modal
            open={open}
            onClose={this.onCloseModal}
            classNames={{ overlay: "custom-overlay", modal: "custom-modal" }}
          >
            <h2>You've successfully entered the lottery!</h2>
          </Modal>
        </form>
      </div>
    );
  }
}

export default watch(EntryForm, {
  nameEmailError: "lotteryApp.nameEmailError",
  name: "lotteryApp.name",
  numberOfEntries: "lotteryApp.numberOfEntries",
  email: "lotteryApp.email",
  lotteryDate: "lotteryApp.lotteryDate"
});
