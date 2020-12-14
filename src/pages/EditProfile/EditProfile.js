import axios from "axios";
import React from "react";
import { withAuth } from '../../context/auth-context';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';

class EditProfile extends React.Component {

    state = {
        name: undefined,
        username: undefined,
        nationality: undefined,
        myFavoriteTrip: undefined,
        description: undefined,
        image: undefined,
        isReady: false
    }

    componentDidMount() {
        const { userId } = this.props.match.params;
        //used an if statement to avoid error when rending editProfile page from another page that is not the Profile page
        if (this.props.location.state) {
            this.setState({
                name: this.props.location.state.userInfo.name,
                username: this.props.location.state.userInfo.username,
                nationality: this.props.location.state.userInfo.nationality,
                myFavoriteTrip: this.props.location.state.userInfo.myFavoriteTrip,
                description: this.props.location.state.userInfo.description,
                image: this.props.location.state.userInfo.image
            })
        } else {
            this.props.history.push(`/profile/${userId}`);
        }
    }

    handleChange = (event) => {
        // console.log('TARGEETTT', event.target)
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { name, username, nationality, myFavoriteTrip, description, image } = this.state;
        const { userId } = this.props.match.params;
        axios
            .put(
                `${process.env.REACT_APP_API_URI}/api/editProfile/${userId}`,
                { name, username, nationality, myFavoriteTrip, description, image }, { withCredentials: true }
            )
            .then(() => {
                this.props.history.push(`/profile/${userId}`);
            })
            .catch((err) => console.log(err))
    }

    handleFileUpload = (e) => {
        console.log("The file to be uploaded is: ", e.target.files);
        const file = e.target.files[0];

        const uploadData = new FormData();
        // image => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new project in '/api/projects' POST route
        uploadData.append("image", file);

        axios
            .post(`${process.env.REACT_APP_API_URI}/api/upload`, uploadData, { withCredentials: true })
            .then((response) => {
                console.log("response is: ", response);
                // after the console.log we can see that response carries 'secure_url' which we can use to update the state
                // this.setState({ image: response.data.secure_url });
                this.setState({ image: response.data.secure_url, isReady: true });

            })
            .catch((err) => {
                console.log("Error while uploading the file: ", err);
            });
    };


    render() {

        console.log('object', this.props.location.state);
        return (
            <div>
                <div>
                    <img src={this.state.image} alt='User profile' />
                    <h2>{this.state.name}</h2>
                </div>
                <div>
                    <form onSubmit={this.handleFormSubmit}>

                        <label>Name:</label>
                        <input type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange} />

                        <label>Username:</label>
                        <input type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange} />

                        <label>Nationality:</label>
                        <input type="text"
                            name="nationality"
                            value={this.state.nationality}
                            onChange={this.handleChange} />

                        <label>Favorite Trip:</label>
                        <input type="text"
                            name="myFavoriteTrip"
                            value={this.state.myFavoriteTrip}
                            onChange={this.handleChange} />


                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />

                        <label>Image</label>
                        <input
                            name="image"
                            type="file"
                            onChange={this.handleFileUpload}
                        ></input>
                        <span>
                            <img
                                style={{ width: "100px" }}
                                src={this.state.image && this.state.image}
                                alt=""
                            ></img>
                        </span>

                        <input type="submit" value="Submit" disabled={!this.state.isReady} />
                    </form>
                </div>
                {this.props.location.state.userInfo ?
                    <div>
                        <Link to={`/deleteProfileConfirmation/${this.props.location.state.userInfo._id}`}>Delete Account</Link>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default withAuth(EditProfile);