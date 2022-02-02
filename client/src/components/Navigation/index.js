import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import auth from '../../utils/auth';

//use props.username
function Navigation(props) {
  const tabsLoggedOut = ['Homepage', 'Store', 'Login']
  const tabsLoggedIn = ['Homepage', 'Store', 'Dashboard']
  return (
      <nav className={styles.nav}>
          <a data-testid="link" href="/" className={styles.logo}>
              Vapor
          </a>
          <div>
              {auth.loggedIn() ? (
                  <>
                      <ul className={styles.navMenu}>
                          {tabsLoggedIn.map(tab => (
                              <li className={styles.navMenuItem} key={tab}>
                                  <Link to={'/' + tab.toLowerCase()}>{tab}</Link>
                              </li>
                          ))}<li className={styles.navMenuItem}><Link to={'/'} onClick={auth.logout}>Logout</Link></li>
                      </ul><p className={styles.navGreeting}>Hello, <span className={styles.navUsername}>{props.username}</span></p>
                  </>
              ):(<>
                  <ul>
                      {tabsLoggedOut.map(tab => (
                          <li className={styles.navMenuItem} key={tab}>
                              <Link to={'/' + tab.toLowerCase()}>{tab}</Link>
                          </li>
                      ))}
                  </ul>
              </>)}
          </div>
      </nav>
    /*<header className="nav flex-row">
      <h1>
        <a data-testid="link" href="/">
          Vapor
        </a>
      </h1>
      <nav>
        
        {auth.loggedIn() ? (
          <>
          <ul className="nav nav-tabs flex-row">
            {tabsLoggedIn.map(tab => (
              <li className="nav-item" key={tab}>
                <Link to={'/' + tab.toLowerCase()}>{tab}</Link>
              </li>
            ))}<li><Link to={'/'} onClick={auth.logout}>Logout</Link></li>
          </ul><p>Hello, {props.username}</p>
        </>
        ):(<>
          <ul className="nav nav-tabs flex-row">
            {tabsLoggedOut.map(tab => (
              <li className="nav-item" key={tab}>
                <Link to={'/' + tab.toLowerCase()}>{tab}</Link>
              </li>
            ))}
          </ul>
        </>)}
      </nav>
    </header>*/
  );
}

export default Navigation;
