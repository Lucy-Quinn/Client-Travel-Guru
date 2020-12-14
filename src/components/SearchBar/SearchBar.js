import React from 'react'

class SearchBar extends React.Component {
    state = {
        search: '',
    }
    handleSearch = (event) => {
        event.preventDefault();
        const searchInput = event.target.value;
        this.setState({ search: searchInput });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filteredPostsSearch(this.state.search);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search by Country/City..." name="search" value={this.state.search} onChange={this.handleSearch} />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;


{/* <div>
<form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Search by Country..." name="searchCountry" value={this.state.searchCountry} onChange={this.handleSearch} />
    <button type="submit">Search</button>
</form>
</div> */}