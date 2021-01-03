import React from "react";
import { withAuth } from "../../context/auth-context";
import './CreateComment.css';

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
    event.preventDefault();
    this.props.handleFormSubmit(this.state.description)
    this.setState({ description: '' })
  }

  render() {
    return (
      <div>
        <form className="comment-form"
          onSubmit={this.handleFormSubmit}>
          <textarea
            name="description"
            rows="4" cols="50"
            maxLength="250"
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
