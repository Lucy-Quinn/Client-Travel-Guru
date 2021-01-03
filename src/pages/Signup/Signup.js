import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../context/auth-context";
import axios from "axios";
import "./Signup.css";

class Signup extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    image: "",
    isReady: false
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, username, email, password, image } = this.state;
    if (image) {
      this.props.signup(name, username, email, password, image);
    } else {
      this.props.signup(name, username, email, password);
    }
  };

  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files);
    const file = e.target.files[0];

    const uploadData = new FormData();
    // image => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new project in '/api/projects' POST route
    uploadData.append("image", file);

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/upload`, uploadData, {
        withCredentials: true,
      })
      .then((response) => {
        // console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ image: response.data.secure_url, isReady: true });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    const { name, username, email, password, image } = this.state;
    return (
      <div className="sign-up-login-background">
        <div className="sign-up-login-body">
          <div className="signup-header">
            <h1>Sign Up</h1>
          </div>

          <form className="signup-form" onSubmit={this.handleFormSubmit}>
            <label>Name: <span className="asterisk">*</span></label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />

            <label>Username: <span className="asterisk">*</span></label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              required
            />

            <label>Email: <span className="asterisk">*</span></label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />

            <label>Password: <span className="asterisk">*</span></label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />

            <label className="image-label">Image: <span className="asterisk">*</span></label>
            <img
              style={{ width: "100px" }}
              src={this.state.image && this.state.image}
              alt=""
            ></img>
            <input
              id="image-upload"
              type="file"
              onChange={this.handleFileUpload}
              required
            />

            <button
              className="form-button"
              type="submit"
              value="Signup"
              disabled={!this.state.isReady}
            >
              Sign Up
            </button>
          </form>

          <div className="existing-account">
            <h4>Already have an account?</h4>
            <Link className="not-logged-in-link" to={"/login"}>
              {" "}
              <h5>Login</h5>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);
