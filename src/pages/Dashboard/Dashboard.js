import React from 'react';
import SearchBar from './../../components/SearchBar/SearchBar';
import axios from 'axios';
import Card from './../../components/Card/Card';
import { withAuth } from '../../context/auth-context';



class Dashboard extends React.Component {

    state = {
        postArray: [],
        search: [],
        // searchCity: []
    }

    componentDidMount() {
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/dashboard`, { withCredentials: true })
            .then((response) => {
                // console.log('response', response.data);

                this.setState({ postArray: response.data })
            })
            .catch((err) => console.log(err));
    }

    filteredPost = (postSearchInput) => {
        const postArray = [...this.state.postArray];
        const filteredSearch = postArray.filter((post) => {
            const searchInput = postSearchInput.toLowerCase();
            const country = post.country.toLowerCase();
            const city = post.city.toLowerCase();
            return country.includes(searchInput) || city.includes(searchInput)
        });
        // const foundCity = postArray.filter((post) => {
        //     return post.city === postSearchInput
        // });
        this.setState({ search: filteredSearch });

    }

    render() {
        return (
            <div>
                <SearchBar postSearch={this.state.postArray} filteredPostsSearch={this.filteredPost} />
                {this.state.search[0] ? //if there is at least one position in the array
                    (this.state.search.map((post) => {
                        return <Card post={post} />
                    }))

                    : (this.state.postArray.map((post) => {
                        return <Card post={post} />
                    }))}
            </div>
        )
    }
}

export default withAuth(Dashboard);