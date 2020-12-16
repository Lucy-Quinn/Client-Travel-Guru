import React from "react";
import axios from "axios";
import Card from "./../../components/Card/Card";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";

class MyPosts extends React.Component {
  state = {
    postsArr: []
  };

  componentDidMount() {
    const { userId } = this.props.match.params;

    this.setState({ userId });

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/myPosts/${userId}`, 
        {withCredentials: true}
      )
      .then((response) => {
        console.log("reponse", response);
        const postsArr = response.data;
        this.setState({ postsArr });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="my-posts-container">

      <h1 className="my-posts-header">My Travel Posts</h1>
        {this.state.postsArr && this.state.postsArr.length > 0 ? (
          this.state.postsArr.map((post) => {
            return (
              <div className="travel-card">
                <Card post={post} />
                <Link
                  exact
                  to={{ pathname: `/editPost/${post._id}`, state: { post } }}
                >
                  <button className="card-button">Edit Post</button>
                </Link>
              </div>
            );
          })
        ) : (
          <p className="no-posts">
            You don't have any Travel Posts. Create one{" "}
            <Link exact to={`/createPost`}>
              here!
            </Link>
          </p>
        )}
        <div></div>
      </div>
    );
  }
}

export default withAuth(MyPosts);
