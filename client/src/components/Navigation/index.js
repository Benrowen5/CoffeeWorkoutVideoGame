import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  const tabs = ['Homepage', 'Store', 'Dashboard']
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
      </nav>
    </header>
  );
}

export default Navigation;
