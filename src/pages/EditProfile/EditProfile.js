import axios from "axios";
import React from "react";
import { withAuth } from '../../context/auth-context';
import { Link } from 'react-router-dom';

class EditProfile extends React.Component {
    state = {
        name: "",
        username: "",
        nationality: "",
        myFavoriteTrip: "",
        description: "",
        image: ""
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get(`http://localhost:5000/api/projects/${id}`)
            .then((apiResponse) => {
                const theProject = apiResponse.data;
                const { title, description, tasks } = theProject;
                this.setState({ title, description, tasks });
            })
            .catch((err) => console.log(err));
    }



    // componentDidMount() {
    //     const { userId } = this.props.match.params;

    //     axios
    //         .get(`${process.env.REACT_APP_API_URI}/${userId}`)
    //         .then((response) => {
    //             console.log("response", response.data);
    //         })
    //         .catch((err) => console.log(err));
    // }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.image} alt='User profile' />
                    <h2>{this.state.name}</h2>
                    <Link to="/editProfile/:userId">Edit Profile</Link>
                </div>
                <div>
                    <p>{this.state.email}</p>
                    <p>{this.state.username}</p>
                    <p>{this.state.nationality}</p>
                    <p>{this.state.myFavoriteTrip}</p>
                    <p>{this.state.description}</p>
                </div>
                <div>
                    <Link exact to='/editProfile/:userid'>
                        <button>Favorite Posts</button>
                    </Link>
                    <Link exact to='/createPost'>
                        <button>Create a Post</button>
                    </Link>
                    <Link exact to='/travelLog/:userid'>
                        <button>Travel Log</button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default withAuth(EditProfile);