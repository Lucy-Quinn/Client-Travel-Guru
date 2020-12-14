import React from "react";
import { withAuth } from "../../context/auth-context";

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
