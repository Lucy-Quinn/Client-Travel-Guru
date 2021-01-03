import React from 'react';
import { withAuth } from '../../context/auth-context';
import './Comment.css';

class Comment extends React.Component {

    render() {
        return (
            <div className="comment-container">

                <div className="comment-author-container">
                    <img src={this.props.postDetails.commentAuthor.image} alt="comment author" />

                    <p className="comment-author-name">{this.props.postDetails.commentAuthor.username}</p>
                </div>
                <p className="comment-text">{this.props.postDetails.description}</p>
            </div>
        )
    }
}

export default withAuth(Comment);