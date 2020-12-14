import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withAuth } from "../../context/auth-context";
import { Route, Redirect } from "react-router-dom";

class CreateComment extends React.Component {
  state = {
    description: undefined,
    isRender: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    console.log('object', this.props);
    event.preventDefault();
    const { description } = this.state;
    const postId = this.props.postDetails._id;
    axios
      .post(
        `${process.env.REACT_APP_API_URI}/api/createComment/${postId}`,
        { description },
        { withCredentials: true }
      )
      .then((response) => {
        console.log('response', response);
      })
      .catch((err) => console.log(err));

    // this.setState({ isRender: true });
    // this.props.history.push(`/postDetails/${postId}`)

  };



  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <button type="submit" value="Submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default withAuth(CreateComment);
