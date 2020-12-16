import axios from "axios";
import React from "react";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import "./Profile.css";

class Profile extends React.Component {
  state = {
    name: "",
    username: "",
    nationality: "",
    email: "",
    myFavoriteTrip: "",
    description: "",
    image: "",
    _id: "",
  };
  componentDidMount() {
    const { userId } = this.props.match.params;
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/profile/${userId}`, {
        withCredentials: true,
      })
      .then((response) => {
        const {
          name,
          username,
          nationality,
          email,
          myFavoriteTrip,
          description,
          image,
          _id,
        } = response.data;

        this.setState({
          name,
          username,
          nationality,
          email,
          myFavoriteTrip,
          description,
          image,
          _id,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <header className="profile-header">
          <img
            className="profile-image"
            src={this.state.image}
            alt="User profile"
          />
          <h1>{this.state.name}</h1>
          <Link
            to={{
              pathname: `/editProfile/${this.state._id}`,
              state: { userInfo: this.state },
            }}
          >
            <button className="edit-profile-button">Edit Profile</button>
          </Link>
        </header>
        <section className="profile-info">
          <p>
            <b>Email: </b>
            {this.state.email}
          </p>
          <p>
            <b>Username: </b>
            {this.state.username}
          </p>
          <p>
            <b>Nationality: </b>
            {this.state.nationality}
          </p>
          <p>
            <b>Favorite Trip: </b>
            {this.state.myFavoriteTrip}
          </p>
          <p>{this.state.description}</p>
        </section>
        <section className="profile-buttons-container">
          <Link exact to={`/favoritePosts/${this.state._id}`}>
            <button className="profile-button">Favorite Posts</button>
          </Link>
          <Link exact to="/createPost">
            <button className="profile-button">Create a Post</button>
          </Link>
          <Link exact to={`/travelLogs`}>
            <button className="profile-button">Travel Log</button>
          </Link>
        </section>
      </div>
    );
  }
}

export default withAuth(Profile);
