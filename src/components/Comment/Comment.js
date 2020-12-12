import React from 'react';
import axios from 'axios';
import { withAuth } from '../../context/auth-context';

class Comment extends React.Component {

    render() {

        return (

            <div>
                <p>{this.props.postDetails.commentAuthor.username}</p>

                <p>{this.props.postDetails.commentAuthor.description}</p>


            </div>
        )
    }
}

export default withAuth(Comment);