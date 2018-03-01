import React from "react";
import { NavLink } from "react-router-dom";

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

const Header = () => (
  <div>
    <header>
      <p>{linkTo("/create-app", "Create Lottery")}</p>
      <p>{linkTo("/status", "Lottery Status")}</p>
      <p>{linkTo("/", "Lottery Entry")}</p>
    </header>
  </div>
);

export default Header;
