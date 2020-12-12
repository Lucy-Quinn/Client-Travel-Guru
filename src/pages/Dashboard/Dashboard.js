import React from 'react';
import SearchBar from './../../components/SearchBar/SearchBar';
import axios from 'axios';
import Card from './../../components/Card/Card';
import { withAuth } from '../../context/auth-context';



class Dashboard extends React.Component {

    state = {
        postArray: [],
        searchCountry: []
    }

    componentDidMount() {
        axios
            .get(`${process.env.REACT_APP_API_URI}/api/dashboard`, { withCredentials: true })
            .then((response) => {
                // console.log('response', response.data);

                this.setState({ postArray: response.data })
            })
            .catch((err) => console.log(err));
    }

    filteredPost = (postSearchInput) => {
        const postArray = [...this.state.postArray];
        const foundPost = postArray.filter((post) => {
            return post.country === postSearchInput
        });
        this.setState({ searchCountry: foundPost });
    }

    render() {
        return (
            <div>
                <SearchBar postSearch={this.state.postArray} filteredPostsSearch={this.filteredPost} />
                {this.state.searchCountry[0] ? //if there is at least one position in the array
                    (this.state.searchCountry.map((post) => {
                        return <Card posts={post} />
                    }))

                    : (this.state.postArray.map((post) => {
                        return <Card posts={post} />
                    }))}
            </div>
        )
    }
}

export default withAuth(Dashboard);