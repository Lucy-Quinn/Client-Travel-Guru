import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from '../../context/auth-context';
import axios from "axios";
import { Route, Redirect } from 'react-router-dom';

class Signup extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    image: ""
  };


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };




  handleFormSubmit = event => {
    console.log('email handleformsubmit from signup', this.state)
    event.preventDefault();
    const { name, username, email, password, image } = this.state;
    image ?
      this.props.signup(name, username, email, password, image)
      :
      this.props.signup(name, username, email, password);
  };


  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files);
    const file = e.target.files[0];

    const uploadData = new FormData();
    // image => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new project in '/api/projects' POST route
    uploadData.append("image", file);

    axios
      .post(`${process.env.REACT_APP_API_URI}/auth/upload`, uploadData, { withCredentials: true })
      .then((response) => {
        console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ image: response.data.secure_url });

      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  render() {
    const { name, username, email, password, image } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={this.handleChange} />

          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />

          <label>Email:</label>
          <input type="text" name="email" value={email} onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <label>Image:</label>
          <input type="file" onChange={this.handleFileUpload} />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={"/auth/login"}> Login</Link>
      </div>
    );
  }
}



export default withAuth(Signup);


// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;