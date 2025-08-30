import React from 'react'
import "./search.css"
const SearchBar = ({ searchInput, setSearchInput, handleSearch }) => {
    return (
        <form onSubmit={handleSearch} className="menu-search">
            <input
                type="text"
                placeholder="Search food (e.g. samosa, pasta)"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;

