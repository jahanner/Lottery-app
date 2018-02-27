import React from "react";
import { connect } from "react-redux";

const numberOfEntries = this.props;
// console.log(this.props);
//TODO: correctly display numberOfEntries from Redux store

const Odds = () => (
  <div>
    <h3>Your odds of winning are 1:{numberOfEntries}</h3>
  </div>
);

const mapStateToProps = state => {
  const { lotteryApp } = state.lotteryApp;
  return { numberOfEntries };
};

export default connect(mapStateToProps)(Odds);
