import axios from "axios";
import React from "react";
import { withAuth } from '../../context/auth-context';
import { Link } from 'react-router-dom';


class Profile extends React.Component {
    state = {
    }
    componentDidMount() {
        const { userId } = this.props.match.params;
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/api/profile/${userId}`,
                { withCredentials: true }
            )
            .then((response) => {
                const { name, username, nationality, email, myFavoriteTrip, description, image, _id } = response.data;
                this.setState({ name, username, nationality, email, myFavoriteTrip, description, image, _id })
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.image} alt='User profile' />
                    <h2>name {this.state.name}</h2>
                    <Link to={
                        {
                            pathname: `/editProfile/${this.state._id}`,
                            state: { userInfo: this.state }
                        }
                    }>Edit Profile</Link>
                </div>
                <div>
                    <p>email {this.state.email}</p>
                    <p>username {this.state.username}</p>
                    <p>nationality {this.state.nationality}</p>
                    <p>fav trip {this.state.myFavoriteTrip}</p>
                    <p>description {this.state.description}</p>
                </div>
                <div>
                    <Link exact to={`/favoritePosts/${this.state._id}`}>
                        <button>Favorite Posts</button>
                    </Link>
                    <Link exact to='/createPost'>
                        <button>Create a Post</button>
                    </Link>
                    <Link exact to={`/travelLogs`}>
                        <button>Travel Log</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withAuth(Profile);
