import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
    render() {
        return (
            <div>
                <Link to={`/postDetails/${this.props.post._id}`}>
                    <h2>{this.props.post.title}</h2>
                    <h3>{this.props.post.country}</h3>
                    <h4>{this.props.post.city}</h4>
                </Link>
            </div>
        )
    }
}

export default Card;
