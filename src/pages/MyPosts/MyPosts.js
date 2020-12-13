import React from "react";
import axios from "axios";
import Card from "./../../components/Card/Card";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";

class MyPosts extends React.Component {
  state = {
    // userId: this.props.match.params.userId
  };

  componentDidMount() {
    const { userId } = this.props.match.params;

    this.setState({ userId });

    axios
      .get(`${process.env.REACT_APP_API_URI}/api/myPosts/${userId}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("reponse", response);
        const postsArr = response.data;
        this.setState({ postsArr });
      })
      .catch((err) => console.log(err));
    // } else {
    //     this.props.history.push(`/dashboard`);
    // }
  }

  render() {
    console.log("postArr", this.state.postsArr);
    return (
      <div>
        {this.state.postsArr
          ? this.state.postsArr.map((post) => {
              return (
                <div>
                  <Card post={post} />
                  <Link exact to={`/editPost/${post._id}`}>
                    <button>Edit Post</button>
                  </Link>
                </div>
              );
            })
          : null}
        <div></div>
      </div>
    );
  }
}

export default withAuth(MyPosts);
