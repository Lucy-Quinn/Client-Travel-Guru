import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withAuth } from '../../context/auth-context';


class CreateComment extends React.Component {

    state = {
        description: undefined
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }


    handleFormSubmit = (event) => {
        event.preventDefault();
        const { description } = this.state;
        const postId = this.props.postDetails._id;

        axios
            .post(
                `${process.env.REACT_APP_API_URI}/api/createComment/${postId}`,
                { description }, { withCredentials: true }
            )
            .then((response) => {
                console.log('response', response.data);
            })
            .catch((err) => console.log(err))
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>

                    <textarea
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}


export default withAuth(CreateComment);