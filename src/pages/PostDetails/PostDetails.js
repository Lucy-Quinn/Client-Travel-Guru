import axios from 'axios';
// import Comment from './../../components/Comment/Comment';
import React from 'react';


class PostDetails extends React.Component {

    state = {

    }

    componentDidMount() {
        const { postId } = this.props.match.params;

        axios
            .get(`${process.env.REACT_APP_API_URI}/api/post/${postId}`, { withCredentials: true })
            .then((response) => {
                console.log('response', response.data);

            })
            .catch((err) => console.log(err));
    }



    render() {
        console.log('hello', this.props);

        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }
}


export default PostDetails;


