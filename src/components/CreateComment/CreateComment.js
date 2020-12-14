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


  render() {
    return (
      <div>
        <form
          onSubmit={() => this.props.handleFormSubmit(this.state.description)}>
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <button type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default withAuth(CreateComment);
