import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { watch } from "redux-easy";

const linkTo = (route, text) => {
  /*quick function to set up links*/
  if (route === "/" || route === "/portfolio") {
    return (
      <NavLink
        to={route}
        className="link"
        activeClassName="is-active"
        exact={true}
      >
        {text}
      </NavLink>
    );
  } else {
    return (
      <NavLink to={route} className="link" activeClassName="is-active">
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
            <button className="links">
              {linkTo("/create-app", "Create Lottery")}
            </button>
          )}
          <button className="links">{linkTo("/", "Lottery Entry")}</button>
          <button className="links">
            {linkTo("/status", "Lottery Status")}
          </button>
        </header>
      </div>
    );
  }
}
export default watch(Header, {
  lotteryDate: "lotteryApp.lotteryDate"
});
