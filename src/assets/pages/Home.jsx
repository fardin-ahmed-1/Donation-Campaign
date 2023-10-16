import React, { useState } from 'react'
import Hero from '../components/Hero'
import { useLoaderData } from 'react-router-dom'
import DataItems from '../components/DataItems'
 import { createContext } from 'react';



const Home = () => {
    const dataItems=useLoaderData();

     const [searchText, setSearchText]=useState('')
     
    const searchData=(getSearchData)=>{
      const makelower=getSearchData.toLowerCase()
      setSearchText(makelower)
    }

  return (
    <div>
        <Hero searchData={searchData}> </Hero>
        <DataItems dataItems={dataItems} searchText={searchText} > </DataItems>

    </div>
  )
}

export default Home