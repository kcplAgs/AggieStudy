import React from 'react';
import './SearchBar.css'

const SearchBar = ({ query, setQuery }) => (
    <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for courses..."
        className="course-search-input"
        autoFocus
    />
);

export default SearchBar;