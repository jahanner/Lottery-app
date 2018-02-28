import React, { Component } from "react";
import { watch } from "redux-easy";

const numberEntered = numberOfEntries => {
  if (numberOfEntries === 0) {
    return (
      <div>
        <h3>No one has entered yet, now is your chance!!!</h3>
      </div>
    );
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
    const { numberOfEntries } = this.props;
    return numberEntered(numberOfEntries);
  }
}

export default watch(Odds, {
  numberOfEntries: "lotteryApp.numberOfEntries"
});
