import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home';
import Store from './pages/Store';
import SingleGame from './pages/SingleGame';
import Dashboard from './pages/Dashboard';
import SignupForm from './components/SignUp';
import LoginForm from './pages/Login'


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/homepage" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/game/:id" component={SingleGame} />
          </Switch>
          <LoginForm />
          <SignupForm />
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
