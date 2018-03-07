import React, { Component } from "react";
import { watch } from "redux-easy";
import moment from "moment";

const numberEntered = (numberOfEntries, lotteryDate) => {
  if (numberOfEntries === 0) {
    return (
      <div>
        <h3>No one has entered yet, now is your chance!!!</h3>
      </div>
    );
  } else if (lotteryDate <= 0 || lotteryDate === "") {
    return <div />;
  } else {
    return (
      <div>
        <h3>Your chances of winning are 1 in {numberOfEntries}</h3>
      </div>
    );
  }
};

class Odds extends Component {
  render() {
    const { users, lotteryDate } = this.props;
    const numberOfEntries = users.length;
    return numberEntered(numberOfEntries, lotteryDate - moment.now());
  }
}

export default watch(Odds, {
  numberOfEntries: "lotteryApp.numberOfEntries",
  users: "lotteryApp.users",
  lotteryDate: "lotteryApp.lotteryDate"
});
