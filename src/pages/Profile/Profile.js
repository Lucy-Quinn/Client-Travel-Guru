import axios from "axios";
import React from "react";
import { withAuth } from '../../context/auth-context';
import { Link } from 'react-router-dom';


class Profile extends React.Component {
    state = {
        name: "",
        username: "",
        nationality: "",
        myFavoriteTrip: "",
        description: "",
        image: "",
        _id: ""
    }



    componentDidMount() {
        const { userId } = this.props.match.params;

        axios
            .get(`${process.env.REACT_APP_API_URI}/api/profile/${userId}`, { withCredentials: true })
            .then((response) => {
                const { name, username, nationality, myFavoriteTrip, description, image, _id } = response.data;
                this.setState({ name, username, nationality, myFavoriteTrip, description, image, _id })
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.image} alt='User profile' />
                    <h2>{this.state.name}</h2>
                    <Link to={{ pathname: `/api/editProfile/${this.state._id}`, user: this.state }}>Edit Profile</Link>
                </div>
                <div>
                    <p>{this.state.email}</p>
                    <p>{this.state.username}</p>
                    <p>{this.state.nationality}</p>
                    <p>{this.state.myFavoriteTrip}</p>
                    <p>{this.state.description}</p>
                </div>
                <div>
                    <Link exact to={`/api/favoritePost/${this.state._id}`}>
                        <button>Favorite Posts</button>
                    </Link>
                    <Link exact to='/api/createPost'>
                        <button>Create a Post</button>
                    </Link>
                    <Link exact to={`/api/travelLog/${this.state._id}`}>
                        <button>Travel Log</button>
                    </Link>
                </div>
            </div>
        )
    }

    // componentDidMount() {
    //     axios
    //         .get(`${process.env.REACT_APP_API_URI}/${this.props.user._id}`)
    //         .then((response) => {
    //             console.log("response", response.data);
    //         })
    //         .catch((err) => console.log(err));
    // }
}


export default withAuth(Profile);
