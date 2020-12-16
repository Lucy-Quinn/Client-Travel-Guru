import axios from "axios";
import React from "react";
import { withAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import './DeleteProfileConfirmation.css'

class DeleteProfileConfirmation extends React.Component {

    deleteHandler = () => {
        const userId = this.props.user._id;

        axios
            .delete(
                `${process.env.REACT_APP_API_URL}/api/deleteProfileConfirmation/${userId}`,
                {
                    withCredentials: true,
                }
            )
            .then((response) => {
                console.log("reponse", response);
                this.props.logout();

            })
            .catch((err) => console.log(err));
    };


    render() {
        console.log('props', this.props);
        return (
            <div className="delete-confirmation-container">
                <div className="delete-header">

                    {/* <div className="delete-title"> */}
                    <h1>Delete Your Account</h1>
                    {/* </div> */}
                    <p>Are you sure you want to delete your account? This will permanently erase your profile and all your posts</p>
                </div>
                <div className="button-container">
                    <Link to={`/profile/${this.props.user._id}`}>
                        <button className="form-button">Cancel</button>
                    </Link>
                    <button className="delete-button" onClick={this.deleteHandler}>Delete</button>
                </div>
            </div>
        )
    }
}


export default withAuth(DeleteProfileConfirmation);
