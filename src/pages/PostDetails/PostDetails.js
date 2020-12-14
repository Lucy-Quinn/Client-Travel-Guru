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
    // newState:''
  };

  componentDidMount() {
    const { postId } = this.props.match.params;
    axios
      .get(`${process.env.REACT_APP_API_URI}/api/post/${postId}`, {
        withCredentials: true,
      })
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
    console.log('usr', userId);

    axios
      .post(
        `${process.env.REACT_APP_API_URI}/api/favoritePost/add/${postId}/${userId}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log('response comment', response);
      })
      .catch((err) => console.log(err));
  };

  // updateState = (newState) => {
  //   //seting the new state with the passed params
  //   // Create a new array based on current state:
  //   // let comments = [...this.state.commentsArray];

  //   // Add item to it
  //   // comments.push({ value: newState });

  //   // Set state
  //   this.setState({ commentsArray: newState });
  // }
  // updateState() {
  //   const { postId } = this.props.match.params;

  //   axios
  //     .get(
  //       `${process.env.REACT_APP_API_URI}/api/comment/${postId}`,
  //       { withCredentials: true }
  //     )
  //     .then((response) => {
  //       const newState = response.data
  //       console.log('reponse', response.data);
  //       this.setState({ commentsArray: newState })
  //     })
  //     .catch((err) => console.log(err));
  //   // const state = this.state.description;
  //   // this.updateState(state)
  // }

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
