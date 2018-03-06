import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { watch } from "redux-easy";

const linkTo = (route, text) => {
  /*quick function to set up links*/
  if (route === "/" || route === "/portfolio") {
    return (
      <NavLink to={route} activeClassName="is-active" exact={true}>
        {text}
      </NavLink>
    );
  } else {
    return (
      <NavLink to={route} activeClassName="is-active">
        {text}
      </NavLink>
    );
  }
};

class Header extends Component {
  render() {
    const { lotteryDate } = this.props;
    return (
      <div>
        <header>
          {lotteryDate ? (
            <p />
          ) : (
            <p>{linkTo("/create-app", "Create Lottery")}</p>
          )}
          <p>{linkTo("/", "Lottery Entry")}</p>
          <p>{linkTo("/status", "Lottery Status")}</p>
        </header>
      </div>
    );
  }
}
export default watch(Header, {
  lotteryDate: "lotteryApp.lotteryDate"
});
