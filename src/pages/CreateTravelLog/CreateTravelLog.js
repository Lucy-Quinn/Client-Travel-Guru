import axios from "axios";
import React from "react";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import './CreateTravelLog.css';
import './../../App.css';

class CreateTravelLog extends React.Component {
  state = {
    title: undefined,
    country: undefined,
    city: undefined,
    description: undefined,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, country, city, description } = this.state;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/createTravelLog`,
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
        <header className="edit-form-header">
          <h1>Create Travel Log</h1>
        </header>

        <div>
          <form className="edit-form travel-log-form-height" onSubmit={this.handleFormSubmit}>
            <label>Title: <span className="asterisk">*</span></label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />

            <label>Country: <span className="asterisk">*</span></label>
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
              required
            />

            <label>City: <span className="asterisk">*</span></label>
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              required
            />

            <label>Description: <span className="asterisk">*</span></label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
            <input className="form-button" type="submit" value="Save" />
          </form>
          <div className="button-container">
            <Link exact to={`/travelLogs`}>
              <button id="travellog-button" className="form-button">Go back to your Travel Logs</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(CreateTravelLog);
