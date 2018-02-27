import React, { Component } from "react";

const leading0 = num => String(Math.floor(num)).padStart(2, "0");

class Clock extends Component {
  state = {
    text: "Until the drawing",
    warning: ""
  };

  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }

  getTimeUntil(deadline) {
    const time = deadline - Date.now();
    if (time <= 0) {
      this.setState({ text: "" });
      this.setState({ warning: "Drawing time!" });
    } else {
      const seconds = leading0((time / 1000) % 60);
      const minutes = leading0((time / 1000 / 60) % 60);
      const hours = leading0((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      return { days, hours, minutes, seconds };
    }
  }
  render() {
    // console.log(this.state.days);
    const { deadline } = this.props;
    const time = this.getTimeUntil(deadline);
    return (
      <div className="Clock">
        <div className="Clock-days">
          <p>
            {time.days} Days {time.hours} Hours {time.minutes} Minutes{" "}
            {time.seconds} Seconds
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
