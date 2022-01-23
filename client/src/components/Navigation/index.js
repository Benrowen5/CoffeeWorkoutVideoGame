import React from 'react';

function Navigation() {
  return (
    <header className="nav flex-row">
      <h1>
        <a data-testid="link" href="/">
          Vapor
        </a>
      </h1>
      <nav>
        <ul className="flex-row">
          <li>
            <a href="#homepage">
              Homepage
            </a>
          </li>
          <li>
            <a href="#store">
              Store
            </a>
          </li>
          <li>
            <a href="#dashboard">
              My Dashboard
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
