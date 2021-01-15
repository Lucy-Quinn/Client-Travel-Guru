import React from "react";
import axios from "axios";
import Comment from "./../../components/Comment/Comment";
import CreateComment from "./../../components/CreateComment/CreateComment";
import { withAuth } from "../../context/auth-context";
import Heart from './../../images/heart.png';

import './PostDetails.css';

class PostDetails extends React.Component {
  state = {
    postDetails: "",
    postAuthor: "",
    commentsArray: [],
    isActive: false
  };

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    const { postId } = this.props.match.params;
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/post/${postId}`,
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          postDetails: response.data,
          postAuthor: response.data.postAuthor.name,
          commentsArray: response.data.comments,
        });
      })
      .catch((err) => console.log(err));
  }

  handleFavorite = () => {

    const { postId } = this.props.match.params;
    const userId = this.props.user._id;

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/favoritePost/add/${postId}/${userId}`,
        { withCredentials: true }
      )
      .then(() => {
        this.props.history.push(`/favoritePosts/${this.props.user._id}`)
      })
      .catch((err) => console.log(err));
  };

  handleFormSubmit = (description) => {
    const { postId } = this.props.match.params;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/createComment/${postId}`,
        { description },
        { withCredentials: true }
      )
      .then(() => {
        this.getPost();
      })
      .catch((err) => console.log(err));
  };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    const {
      title,
      image,
      country,
      city,
      description
    } = this.state.postDetails;

    return (
      <div>
        <div className="post-header">
          <h1>{title}</h1>
          <img id="post-image" src={image} alt="a photo of this post" />
        </div>

        <section className="post-info">
          <div className="post-info-header">
            <h2>{country}</h2>
            <button className="favorites-button" type="submit" onClick={this.handleFavorite}>
              <img src={Heart} alt="heart icon" />
            </button>
          </div>
          <h3>{city}</h3>
          <p className="post-description">{description}</p>
          <div className="post-author">
            <p>{this.state.postDetails.updated_at ? this.state.postDetails.updated_at.slice(0, 10).split('-').reverse().join('-') : null}</p>
            <p>Posted by: {this.state.postAuthor}</p>
          </div>
        </section>

        <section className="button-container">
          <button className="form-button" onClick={this.handleToggle}>
            Write a comment
          </button>
        </section>

        <section className="comment-section">
          {this.state.isActive ?
            <CreateComment handleFormSubmit={this.handleFormSubmit} />
            :
            null
          }
          {this.state.commentsArray.map((comment) => <Comment postDetails={comment} />)}
        </section>
      </div>
    );
  }
}

export default withAuth(PostDetails);
