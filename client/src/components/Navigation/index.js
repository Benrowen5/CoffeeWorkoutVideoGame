import React from 'react';

function Navigation(props) {
  const tabs = ['Homepage', 'Store', 'My Dashboard']
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
              <a
                href={'#' + tab.toLowerCase()}
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'nav-link active' : 'nav-link'
                }
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
