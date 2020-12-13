import React from "react";
import axios from "axios";
import Card from "./../../components/Card/Card";
import { withAuth } from "../../context/auth-context";

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
    return (
      <div>
        {this.state.postsArr
          ? this.state.postsArr.map((post) => {
              return <Card post={post} />;
            })
          : null}
      </div>
    );
  }
}

export default withAuth(MyPosts);
