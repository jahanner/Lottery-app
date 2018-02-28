import React, { Component } from "react";
import moment from "moment";

const leading0 = num => String(Math.floor(num)).padStart(2, "0");

class Clock extends Component {
  text = "Until the drawing";
  warning = "";

  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }

  getClockTime(time) {
    return (
      <div className="Clock-days">
        <p>
          {time.days} Days {time.hours} Hours {time.minutes} Minutes{" "}
          {time.seconds} Seconds
        </p>
        <p>{this.text}</p>
      </div>
    );
  }

  getTimeUntil(deadline) {
    const time = deadline - moment.now();
    if (time <= 0) {
      this.text = "";
      this.warning = "Drawing time!";
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
        {time ? this.getClockTime(time) : <div>No lottery</div>}
        <div>
          <p>{this.warning}</p>
        </div>
      </div>
    );
  }
}
export default Clock;
