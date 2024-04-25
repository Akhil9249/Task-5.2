import React from 'react'
import './SearchList.css'

export function SearchList({tempSearchResult}) {
  return (
    <div className='Search-List'>
      {tempSearchResult.map((data)=>(
          <div className='Search-List-Rult' key={data.id}>
          <div><img src={data.image}  alt="" style={{width:50,height:50}} className='image-data' /></div>
          <p>{data.title}</p>
        </div>
      )) 
      }
      
    </div>
  )
}


