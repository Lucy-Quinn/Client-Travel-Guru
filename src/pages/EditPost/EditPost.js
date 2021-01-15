import axios from "axios";
import React from "react";
import { withAuth } from "../../context/auth-context";
import './EditPost.css';
import './../../App.css';

class EditPost extends React.Component {
  state = {
    title: undefined,
    country: undefined,
    city: undefined,
    description: undefined,
    image: undefined,
    isReady: true,
  };

  componentDidMount() {
    const { postId } = this.props.match.params;
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/post/${postId}`, {
        withCredentials: true,
      })
      .then((response) => {
        const { title, country, city, description, image } = response.data;
        this.setState({
          title,
          country,
          city,
          description,
          image,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {

    event.preventDefault();
    const { title, country, city, description, image } = this.state;
    const { postId } = this.props.match.params;

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/editPost/${postId}`,
        { title, country, city, description, image },
        { withCredentials: true }
      )
      .then(() => {
        this.props.history.push(`/myPosts/${this.props.user._id}`);
      })
      .catch((err) => console.log(err));
  };

  handleFileUpload = (e) => {

    const file = e.target.files[0];
    const uploadData = new FormData();
    // image => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new project in '/api/projects' POST route
    uploadData.append("image", file);
    this.setState({ isReady: false }, () => {

      axios
        .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData, {
          withCredentials: true,
        })
        .then((response) => {
          // after the console.log we can see that response carries 'secure_url' which we can use to update the state
          // this.setState({ image: response.data.secure_url });
          this.setState({ image: response.data.secure_url, isReady: true });
        })
        .catch((err) => {
          console.log("Error while uploading the file: ", err);
        });
    })
  };

  deleteHandler = () => {

    const { postId } = this.props.match.params;
    const userId = this.props.user._id;

    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/deletePost/${postId}`, { withCredentials: true })
      .then(() => {
        this.props.history.push(`/myPosts/${userId}`)
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <header className="edit-form-header">
          <h2>Edit Post</h2>
        </header>

        <div>
          <form className="edit-form" onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />

            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            />

            <label>City:</label>
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />

            <label>Description:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />

            <label className="image-label">Image</label>
            <img
              style={{ width: "100px" }}
              src={this.state.image && this.state.image}
              alt=""
            ></img>
            <input
              id="image-upload"
              name="image"
              type="file"
              onChange={this.handleFileUpload}
            ></input>

            <button
              className="form-button"
              type="submit"
              value="Submit"
              disabled={!this.state.isReady}
            >
              Save
          </button>
          </form>
          <div className="button-container">
            <button className="delete-button" onClick={this.deleteHandler}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(EditPost);
