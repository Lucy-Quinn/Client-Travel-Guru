import React from "react";
import axios from "axios";
import Card from "./../../components/Card/Card";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";

class MyFavorites extends React.Component {
  state = {
    // userId: this.props.match.params.userId
  };

  componentDidMount() {
    const userId = this.props.user._id;
    console.log("props", this.props);

    this.setState({ userId });

    axios
      .get(`${process.env.REACT_APP_API_URI}/api/favoritePosts/${userId}`, {
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
    const userId = this.props.user._id;

    axios
      .delete(`${process.env.REACT_APP_API_URI}/api/deleteFavorite/${postId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("reponse", response);
      })
      .catch((err) => console.log(err));
  };

  render() {
    // console.log("postArr", this.state.postsArr);
    return (
      <div>
        {this.state.favoritesArr && this.state.favoritesArr.length > 0 ? (
          this.state.favoritesArr.map((post) => {
            return (
              <div>
                <Card post={post} />
                <button onClick={() => this.deleteHandler(post._id)}>
                  Delete
                </button>
              </div>
            );
          })
        ) : (
          <h3>You don't have any favorites 💔</h3>
        )}
        <div></div>
      </div>
    );
  }
}

export default withAuth(MyFavorites);
