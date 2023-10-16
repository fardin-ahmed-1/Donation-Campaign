import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import '../../index.css'
import StatisticsChart from '../components/StatisticsChart';

const Statistics = () => {
  const dataItems=useLoaderData();
 

  // const [price, setPrice]=useState([])

  const priceArray=[]

  // console.log(priceArray)

{  for(var i=0; i<dataItems.length; i++){
   priceArray.push(dataItems[i].price)

    
  }}


  return (
    <>

    <StatisticsChart priceArray={priceArray}> </StatisticsChart>

  
    </>
  );
};

export default Statistics;
