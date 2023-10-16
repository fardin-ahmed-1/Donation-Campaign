import React from 'react'
import { Link } from 'react-router-dom'

const DataItem = ({item}) => {
  const {id,category_name,  title, category_bg, title_color, container_color, image}=item
  
  return (
    <div>
      <Link to={`/detailes/${id}`}>
      <img className='rounded-t-lg' src={image} alt="" />
      <div className='py-5 px-5 space-y-2 rounded-b-lg' style={{background:`${container_color}`}}>
      <span className=" text-base font-medium py-[5px] px-[8px] rounded-lg" style={{color:`${title_color}`, background:`${category_bg}`}}>{category_name}</span>
      <h1 className='text-xl font-semibold' style={{color:`${title_color}`}}>{title}</h1>
      </div>
      </Link>
    </div>
  )
}

export default DataItem