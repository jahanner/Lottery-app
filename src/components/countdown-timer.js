import React, { Component } from "react";
import { connect } from "react-redux";

class Clock extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     days: 0,
  //     hours: 0,
  //     minutes: 0,
  //     seconds: 0,
  //     text: "Until the drawing",
  //     warning: ""
  //   };
  // }
  componentWillMount() {
    // this.getTimeUntil(this.state.deadline);
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    // setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ text: "" });
      this.setState({ warning: "The time has come!" });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div className="Clock">
        <div className="Clock-days">
          {/* <p>
            {this.leading0(this.state.days)} Days{" "}
            {this.leading0(this.state.hours)} Hours{" "}
            {this.leading0(this.state.minutes)} Minutes{" "}
            {this.leading0(this.state.seconds)} Seconds
          </p>
          <p>{this.state.text}</p>
        </div>
        <div>
          <p>{this.state.warning}</p> */}
          <p>
            {this.leading0(this.props.days)} Days{" "}
            {this.leading0(this.props.hours)} Hours{" "}
            {this.leading0(this.props.minutes)} Minutes{" "}
            {this.leading0(this.props.seconds)} Seconds
          </p>
          <p>{this.props.text}</p>
        </div>
        <div>
          <p>{this.props.warning}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { drawingdate } = state;
  console.log(drawingdate);
  return {
    drawingdate
  };
};
export default connect(mapStateToProps)(Clock);
// export default Clock;
