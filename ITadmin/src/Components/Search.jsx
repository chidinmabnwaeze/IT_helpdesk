import React, {useState} from 'react'

const Search = () => {
    const [search, setSearch] = useState("")
   
  return (
    <div>
        <input
            type="search"
            placeholder="Search here..."
            className="rounded p-1"
            value= {search}
            onChange={(event)=>{setSearch(event.target.value)}}
            onSubmit={(e) => e.preventDefault()}
            // {...users.filter(user =>((users.user).toLowerCase()).includes (search.toLowerCase))}
          /> 
    </div>
  )
}

export default Search