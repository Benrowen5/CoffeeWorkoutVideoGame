import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import auth from './utils/auth';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home';
import Store from './pages/Store';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import SingleGame from './pages/SingleGame';
import Dashboard from './pages/Dashboard'
import Cart from './pages/Cart'


function App() {
  const [user, setUser] = useState('');
  const token = auth.getToken();
  useEffect(() => {
    if (token){
    (
        async() => {
            // const check = auth.isTokenExpired(token);
            // if (check === false) {
            //   // auth.logout();
            // }
            const res = await auth.getProfile(token);
            // console.log(res);
            setUser(res.data);
        }
    )()
    
  }},[token]);

  return (
    <Router>
      <div>
        <Navigation username={user.username}/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/homepage" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/dashboard" component={()=><Dashboard username={user.username} id={user._id}/>} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/game/:id" component={()=><SingleGame username={user.username} id={user._id}/>} />
          </Switch>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
