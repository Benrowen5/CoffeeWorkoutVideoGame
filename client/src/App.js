import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="flex-row">
        <Router>
          <div>
            <Navigation></Navigation>
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer></Footer>
          </div>
        </Router>
      </div>
  );
}

export default App;
