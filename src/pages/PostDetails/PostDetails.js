import axios from 'axios';
import Comment from './../../components/Comment/Comment';
import CreateComment from './../../components/CreateComment/CreateComment';

import React from 'react';



class PostDetails extends React.Component {

    state = {
        postDetails: '',
        postAuthor: ''
    }

    componentDidMount() {
        const { postId } = this.props.match.params;

        axios
            .get(`${process.env.REACT_APP_API_URI}/api/post/${postId}`, { withCredentials: true })
            .then((response) => {
                this.setState({ postDetails: response.data, postAuthor: response.data.postAuthor.name })
            })
            .catch((err) => console.log(err));
    }


    handleFavorite = () => {
        // const { postId } = this.state
        const { postId } = this.props.match.params;
        axios
            .post(`${process.env.REACT_APP_API_URI}/api/favoritePost/add/${postId}`, { withCredentials: true })
            .then((response) => {
                console.log('response', response.data);
            })
            .catch((err) => console.log(err));
    }


    render() {
        const { title, image, country, city, description, updated_at } = this.state.postDetails
        return (
            <div>
                <h1>{title}</h1>
                <img src={image} alt="a photo of this post" />
                <h2>{country}</h2>
                <h3>{city}</h3>
                <p>{description}</p>
                <div>
                    {/* {this.state.postDetails.postAuthor.name ? <p>{this.state.postDetails.postAuthor.name}</p> : null} */}
                    <p>{this.state.postAuthor}</p>
                    <p>{updated_at}</p>
                </div>
                {/* <input type="submit" value="Submit" disabled={!this.state.isReady} /> */}

                {/* {console.log(this.state.postDetails)} */}

                <button type="submit" onClick={this.handleFavorite}>Save to Favorites</button>

                <Comment />
                <CreateComment postDetails={this.state.postDetails} />

            </div>
        )
    }
}


export default PostDetails;


