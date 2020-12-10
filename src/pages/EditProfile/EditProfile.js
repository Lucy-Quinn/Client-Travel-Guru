import axios from "axios";
import React from "react";
import { withAuth } from '../../context/auth-context';
import { Link } from 'react-router-dom';

class EditProfile extends React.Component {


    // componentDidMount() {
    //     const { id } = this.props.match.params;

    //     axios.get(`http://localhost:5000/api/projects/${id}`)
    //         .then((apiResponse) => {
    //             const theProject = apiResponse.data;
    //             const { title, description, tasks } = theProject;
    //             this.setState({ title, description, tasks });
    //         })
    //         .catch((err) => console.log(err));
    // }


    render() {
        return (

            <div>
                <div>
                    <img src={this.props.user.image} alt='User profile' />
                    <h2>{this.props.user.name}</h2>
                    <Link to="/api/editProfile/:userId">Edit Profile</Link>
                </div>
                <div>
                    <p>{this.props.email}</p>
                    <p>{this.props.username}</p>
                    <p>{this.props.nationality}</p>
                    <p>{this.props.myFavoriteTrip}</p>
                    <p>{this.props.description}</p>
                </div>

            </div>
        )
    }

}

export default withAuth(EditProfile);