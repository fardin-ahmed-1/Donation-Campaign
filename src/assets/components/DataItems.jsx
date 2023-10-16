import DataItem from "./DataItem"
import React from 'react';

const DataItems = ({dataItems, searchText}) => {
  return (
  <div className="container mx-auto px-4">
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-16">
        {
            dataItems?.filter((items)=>{
              return searchText ===''? items:items.category_name.toLowerCase().includes(searchText)
            }).map((item)=> <DataItem key={item.id} item={item}> </DataItem>)
        }
    </div>
  </div>
  )
}

export default DataItems