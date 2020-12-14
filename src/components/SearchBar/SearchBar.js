import React from 'react'

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
            <div>
                <input type="text" placeholder="Search by Country/City..." name="search" value={this.state.search} onChange={this.handleSearch} />
                <button type="submit">Search</button>
            </div>
        )
    }
}

export default SearchBar;
