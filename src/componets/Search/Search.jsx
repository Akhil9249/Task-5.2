import React, { useEffect, useState } from 'react'
import './Search.css'
import { SearchInput } from './SearchInput/SearchInput'
import { SearchList } from './SearchList/SearchList'
import axios from "axios";

const URL = "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";
const URL_F="https://fakestoreapi.com/products"
export function Search() {

 const [searchValue,setSearchValue] = useState("");
 const [searchResult,setSearchResult] = useState([]);
 const [tempSearchResult,setTempSearchResult] = useState([]);

const handleChange = (event)=>{
      setSearchValue(event.target.value)
      const Result = searchResult.filter(data=>data.title.toLowerCase().includes(event.target.value) )
      setTempSearchResult(Result) 
}

const clearData = ()=>{
  setSearchValue("")
  setTempSearchResult(searchResult)
}

const getMovie = async ()=>{
  const result = await axios(URL_F,{params:{query:"movie"}})
  setSearchResult(result.data)
  setTempSearchResult(result.data) 
}

useEffect(()=>{
  getMovie()
},[])

  return (
    <>
    <h1 className='head-tag'>Filtering a List <br /> With a Text <br /> Input</h1>
    <div className='search-container'>
      <div className='search-container-in'>
        <div className='search-container-in-top'></div>
        <SearchInput searchValue={searchValue} handleChange={handleChange} clearData={clearData}/>
        <SearchList tempSearchResult={tempSearchResult} /> 
      </div>
 
    </div>
    <div className='search-container-right-button'></div>
    </>
  )
}

