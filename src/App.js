import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';
import EditProfile from './pages/EditProfile/EditProfile';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={LandingPage} />


          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          {/* <PrivateRoute exact path="/private" component={Private} /> */}
          <PrivateRoute exact path="/api/profile/:userId" component={Profile} />
          <PrivateRoute exact path="/api/editProfile/:userId" component={EditProfile} />

        </Switch>
      </div>
    );
  }
}

export default App;
