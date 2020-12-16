import React from "react";
import axios from "axios";
import Card from "./../../components/Card/Card";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import './../../App.css';
import './MyFavorites.css';

class MyFavorites extends React.Component {
  state = {
    favoritesArr: []
  };

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites = () => {
    const userId = this.props.user._id;

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/favoritePosts/${userId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("reponse", response.data);
        const favoritesArr = response.data;
        this.setState({ favoritesArr });
      })
      .catch((err) => console.log(err));
  }

  deleteHandler = (postId) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/deleteFavorite/${postId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("reponse", response);
        this.getFavorites();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="my-posts-container">

        <h1 className="my-posts-header">My Favorite Posts</h1>
        {this.state.favoritesArr && this.state.favoritesArr.length > 0 ? (
          this.state.favoritesArr.map((post) => {
            return (
              <div className="travel-card">
                <Card post={post} />
                <button onClick={() => this.deleteHandler(post._id)}>
                  Delete
                </button>
              </div>
            );
          })
        ) : (
            <p className="no-posts">You don't have any favorites 💔
              <br />You can add more favorites by searching for travel posts <Link exact to={`/dashboard`}>here!</Link></p>
          )}
        <div></div>
      </div>
    );
  }
}

export default withAuth(MyFavorites);
