import { useState, useEffect } from 'react'
import itemAPI from '../util/API/itemAPI'

const SearchPage = () => {
  let [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    itemAPI.searchItem(searchInput)
  }, [searchInput])

  return (
    <div id='searchbar'>
      <form>
        <input type='text' id='searchInput' placeholder='Search Items:' onChange={(e) => { setSearchInput(e.target.value) }} />
      </form>
    </div>
  )

}

export default SearchPage