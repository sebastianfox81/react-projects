import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const { query, handleSearch } = useGlobalContext();

  return (
    <div>
      <form className='search-form' onSubmit={e => e.preventDefault()}>
        <h2>Search Hacker News</h2>
        <label htmlFor="">Search Story</label>
        <input
          type="text"
          className='form-input'
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchForm