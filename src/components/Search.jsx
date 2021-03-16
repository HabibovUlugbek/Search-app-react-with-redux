import React from 'react'

 const Search = ({keywords}) => {
    return (
        <div className="search_container">
            <h1>Search your artist</h1>
            <input type="text" onChange={e => keywords(e)}/>
        </div>
    )
}

export default Search;
