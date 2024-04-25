import React from 'react'
import './SearchInput.css'

export function SearchInput({handleChange, searchValue,clearData}) {
  return (
    <div className='Search-Input'>
     <input type="text" placeholder='Search...' value={searchValue} onChange={handleChange} />
     {searchValue && <img src="https://logowik.com/content/uploads/images/close1437.jpg" alt="" style={{width:22,height:22}} className='img-div' onClick={clearData} /> }
     
    </div>
    
  )
}

