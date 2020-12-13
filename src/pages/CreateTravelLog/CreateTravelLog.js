import axios from "axios";
import React from "react";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

class CreateTravelLog extends React.Component {
  state = {
    title: undefined,
    country: undefined,
    city: undefined,
    description: undefined,
  };

  //   componentDidMount() {
  //     // const { postId } = this.props.match.params;
  //   }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, country, city, description } = this.state;
    console.log("userId", this.props);

    axios
      .post(
        `${process.env.REACT_APP_API_URI}/api/createTravelLog`,
        { title, country, city, description },
        { withCredentials: true }
      )
      .then(() => {
        this.props.history.push(`/travelLogs`);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <h2>Create Travel Log Entry</h2>
        </div>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />

            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            />

            <label>City:</label>
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />

            <label>Description:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />

            <input type="submit" value="Save" />
          </form>
          <Link exact to={`/travelLogs`}>
            <button>Go back to your Travel Logs</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withAuth(CreateTravelLog);
