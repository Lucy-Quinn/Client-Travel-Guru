import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
    render() {
        // console.log('propssss', this.props);
        return (
            <div>

                <Link to={`/postDetails/${this.props.posts._id}`}>
                    <h2>{this.props.posts.title}</h2>
                    <h3>{this.props.posts.country}</h3>
                    <h4>{this.props.posts.city}</h4>
                </Link>
            </div>
        )
    }
}

export default Card;
