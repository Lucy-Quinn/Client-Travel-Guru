import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../context/auth-context';

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to={'/'} id='home-btn'>
          <h4>Home</h4>
        </Link>
        {this.props.isLoggedIn ? (
          <div>

            <p>username: {this.props.user && this.props.user.username}</p>
            <button onClick={this.props.logout}>Logout</button>
            <Link to={`/api/profile/${this.props.user._id}`}>
              Profile
            </Link>
          </div>
        ) : (
            <>
              <Link to="/auth/login">
                <button className="navbar-button">Login</button>{' '}
              </Link>
              <br />
              <Link to="/auth/signup">
                <button className="navbar-button">Sign Up</button>{' '}
              </Link>
            </>
          )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
