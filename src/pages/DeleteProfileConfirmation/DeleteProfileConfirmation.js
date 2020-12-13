import axios from "axios";
import React from "react";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

class DeleteProfileConfirmation extends React.Component {

    deleteHandler = () => {
        const userId = this.props.user._id;

        axios
            .delete(
                `${process.env.REACT_APP_API_URI}/api/deleteProfileConfirmation/${userId}`,
                {
                    withCredentials: true,
                }
            )
            .then((response) => {
                console.log("reponse", response);
                this.props.history.push(`/`);

            })
            .catch((err) => console.log(err));
    };


    render() {
        console.log('props', this.props);
        return (
            <div>
                <h1>Delete Your Account</h1>
                <p>Are you sure you want to delete your account? This will permanently erase your profile and all your posts</p>
                <div>
                    <button onClick={this.deleteHandler}>Delete</button>
                    <Link to={`/profile/${this.props.user._id}`}>
                        <button>Cancel</button>
                    </Link>


                </div>
            </div>
        )
    }
}


export default withAuth(DeleteProfileConfirmation);
