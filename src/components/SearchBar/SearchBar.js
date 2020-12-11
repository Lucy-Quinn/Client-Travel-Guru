import React from 'react'

class SearchBar extends React.Component {
    state = {
        searchCountry: '',
    }
    handleSearch = (event) => {
        event.preventDefault();
        const searchInput = event.target.value;
        this.setState({ searchCountry: searchInput });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filteredPostsSearch(this.state.searchCountry);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search by Country..." name="searchCountry" value={this.state.searchCountry} onChange={this.handleSearch} />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;