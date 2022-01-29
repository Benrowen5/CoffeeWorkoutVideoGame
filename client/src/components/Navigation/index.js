import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../utils/auth';

//use props.username
function Navigation(props) {
  const tabs = ['Homepage', 'Store', 'Dashboard', 'Login']
  return (
    <header className="nav flex-row">
      <h1>
        <a data-testid="link" href="/">
          Vapor
        </a>
      </h1>
      <nav>
        <ul className="nav nav-tabs flex-row">
          {tabs.map(tab => (
            <li className="nav-item" key={tab}>
              <Link to={'/' + tab.toLowerCase()}>{tab}</Link>
            </li>
          ))}
        </ul>
        {auth.loggedIn() ? (
          <><p>Hello, {props.username}</p></>
        ):(<></>)}
      </nav>
    </header>
  );
}

export default Navigation;
