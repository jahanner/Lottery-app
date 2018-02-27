import DateTime from "react-datetime";
import moment from "moment";
import "../styles/reactDateTime.css";
import React, { Component } from "react";

export default class OpenExample extends Component {
  render() {
    return (
      <div>
        <DateTime />
      </div>
    );
  }
}
//TODO: Use this calendarPicker instead of SingleDatePicker
