import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">

        {this.props.isLoggedIn ? (
          <div>
            <Link to={'/dashboard'} id='home-btn'>
              <h4>Home</h4>
            </Link>
            <p>username: {this.props.user && this.props.user.username}</p>
            <button onClick={this.props.logout}>Logout</button>
            <Link to={`/profile/${this.props.user._id}`}>
              Profile
            </Link>
          </div>
        ) : (
            <div>
              <Link to={'/'} id='home-btn'>
                <h4>Home</h4>
              </Link>
              <Link to="/login">
                <button className="navbar-button">Login</button>{' '}
              </Link>
              <br />
              <Link to="/signup">
                <button className="navbar-button">Sign Up</button>{' '}
              </Link>
            </div>
          )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
