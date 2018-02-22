import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      text: "Until the drawing",
      warning: ""
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.now();
    console.log(deadline);
    if (time <= 0) {
      this.setState({ text: "" });
      this.setState({ warning: "Drawing time!" });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    // console.log(this.state.days);
    return (
      <div className="Clock">
        <div className="Clock-days">
          <p>
            {this.leading0(this.state.days)} Days{" "}
            {this.leading0(this.state.hours)} Hours{" "}
            {this.leading0(this.state.minutes)} Minutes{" "}
            {this.leading0(this.state.seconds)} Seconds
          </p>
          <p>{this.state.text}</p>
        </div>
        <div>
          <p>{this.state.warning}</p>
        </div>
      </div>
    );
  }
}

export default Clock;
