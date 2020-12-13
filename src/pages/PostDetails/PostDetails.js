import axios from "axios";
import Comment from "./../../components/Comment/Comment";
import CreateComment from "./../../components/CreateComment/CreateComment";
import { withAuth } from "../../context/auth-context";

import React from "react";

class PostDetails extends React.Component {
  state = {
    postDetails: "",
    postAuthor: "",
    commentsArray: [],
  };

  componentDidMount() {
    const { postId } = this.props.match.params;
    axios
      .get(`${process.env.REACT_APP_API_URI}/api/post/${postId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("response", response.data);
        this.setState({
          postDetails: response.data,
          postAuthor: response.data.postAuthor.name,
          commentsArray: response.data.comments,
        });
      })
      .catch((err) => console.log(err));
  }

  handleFavorite = () => {
    const postId = this.props.match.params.postId;
    console.log("this.props....", this.props);

    axios
      .post(
        `${process.env.REACT_APP_API_URI}/api/favoritePost/add/${this.state.postId}`,
        {
          withCredentials: true,
        }
      )
      .then(() => {})
      .catch((err) => console.log(err));
  };

  render() {
    const {
      title,
      image,
      country,
      city,
      description,
      updated_at,
    } = this.state.postDetails;
    return (
      <div>
        <h1>{title}</h1>
        <img src={image} alt="a photo of this post" />
        <h2>{country}</h2>
        <h3>{city}</h3>
        <p>{description}</p>
        <div>
          <p>{this.state.postAuthor}</p>
          <p>{updated_at}</p>
        </div>
        <button type="submit" onClick={this.handleFavorite}>
          Save to Favorites
        </button>
        {this.state.commentsArray.map((comment) => {
          return <Comment postDetails={comment} />;
        })}
        <CreateComment postDetails={this.state.postDetails} />
      </div>
    );
  }
}

export default withAuth(PostDetails);
