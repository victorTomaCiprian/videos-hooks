import React, { useState } from 'react'

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('')

  const onFormSubmit = (event) => {
    event.preventDefault()
    onTermSubmit(term)
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Search for a video</label>
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
