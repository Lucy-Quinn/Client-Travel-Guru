import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import './../../App.css';

class Card extends React.Component {
    render() {
        return (
            <div className="travel-post-card">
                <Link to={`/postDetails/${this.props.post._id}`}>
                    <img id="post-image" src={this.props.post.image} alt="a photo of this post" />
                    <section className="travel-post-card-section">
                        <div className="travel-card-title">
                            <h2>{this.props.post.title}</h2>
                        </div>
                        <div className="location-info">
                            <h4>{this.props.post.country}</h4>
                            <h5>{this.props.post.city}</h5>
                        </div>
                    </section>
                </Link>
            </div>
        )
    }
}

export default Card;
