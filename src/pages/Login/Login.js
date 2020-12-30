import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="sign-up-login-background">
        <div className="sign-up-login-body">
          <div className="login-header">
            <h1>Login</h1>
          </div>

          <form className="login-form" onSubmit={this.handleFormSubmit}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />

            <button className="form-button" type="submit" value="Login">
              Login
            </button>

            <div className="existing-account">
              <h4>Don't have an account?</h4>
              <Link className="not-logged-in-link" exact to="/signup">
                <h5>Sign Up</h5>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
