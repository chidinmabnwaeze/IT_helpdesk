import React, {useState} from 'react'

const Search = ({search, setSearch}) => {
    
   
  return (
    <form className='searchForm'  onSubmit={(e) => e.preventDefault()}>
        <input
            type="search"
            placeholder="Search here..."
            className="rounded p-1"
            value= {search}
            onChange={(event)=> setSearch(event.target.value)}
           
            // {...users.filter(user =>((users.user).toLowerCase()).includes (search.toLowerCase))}
          /> 
    </form>
  )
}

export default Search