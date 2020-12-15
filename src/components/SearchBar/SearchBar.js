import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    state = {
        search: '',
    }
    handleSearch = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
        this.props.filteredPostsSearch(value);
    }

    render() {
        return (
            <div className="searchbar">
                <input type="text" placeholder="Search by Country/City..." name="search" value={this.state.search} onChange={this.handleSearch} />
            </div>
        )
    }
}

export default SearchBar;
