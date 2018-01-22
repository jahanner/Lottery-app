import React from 'react';
import {NavLink} from 'react-router-dom';

const linkTo = (route, text) => { {/*quick function to set up links*/}
    if(route === '/' || route === '/portfolio'){
      return <NavLink to={route} activeClassName='is-active' exact={true}>{text}</NavLink>
  }
  else {
    return <NavLink to={route} activeClassName='is-active'>{text}</NavLink>
  };
}

const Header = () => (
  <header>
    <p>{linkTo('/status', 'Lottery Status')}</p>
    <p>{linkTo('/', 'Entry Page')}</p>
  </header>
)

export default Header;
