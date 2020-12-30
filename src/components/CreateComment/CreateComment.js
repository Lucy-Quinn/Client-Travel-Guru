import React from "react";
import { withAuth } from "../../context/auth-context";

import './CreateComment.css';

class CreateComment extends React.Component {
  state = {
    description: undefined,
    isRender: false,
  };

  handleChange = (event) => {

    // event.preventDefault();

    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.props.handleFormSubmit(this.state.description)
  }

  render() {
    return (
      <div>
        <form className="comment-form"
          onSubmit={this.handleFormSubmit}>
          {/* onSubmit={() => this.props.handleFormSubmit(this.state.description)}> */}

          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <button className="comment-button" type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default withAuth(CreateComment);
