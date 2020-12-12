import axios from 'axios';
import Comment from './../../components/Comment/Comment';
import React from 'react';


class PostDetails extends React.Component {

    state = {
        postDetails: ''
    }

    componentDidMount() {
        const { postId } = this.props.match.params;

        axios
            .get(`${process.env.REACT_APP_API_URI}/api/post/${postId}`, { withCredentials: true })
            .then((response) => {
                this.setState({ postDetails: response.data })
            })
            .catch((err) => console.log(err));
    }



    render() {
        const { title, image, country, city, description, postAuthor, updated_at } = this.state.postDetails
        return (
            <div>
                <h1>{title}</h1>
                <img src={image} alt="a photo of this post" />
                <h2>{country}</h2>
                <h3>{city}</h3>
                <p>{description}</p>
                <div>
                    <p>{postAuthor}</p>
                    <p>{updated_at}</p>
                </div>
                <button>Save to Favorites</button>

                <Comment />
            </div>
        )
    }
}


export default PostDetails;


