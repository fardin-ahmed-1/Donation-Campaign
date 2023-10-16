import { Link } from "react-router-dom"

const DonateItem = ({donate}) => {
    const {id,category_name,  title, category_bg, title_color, container_color, image, price}=donate

  return (
    <div className="md:flex">

      
      <div className="flex-1">

        <img className="w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg " src={image} alt="" />

        </div>


      <div className=' flex-1 py-5 px-5 space-y-2 rounded-b-lg md:rounded-none
      md:rounded-r-lg ' style={{background:`${container_color}`}}>
      <span className=" text-base font-medium py-[5px] px-[8px] rounded-lg" style={{color:`${title_color}`, background:`${category_bg}`}}>{category_name}</span>
      <h1 className='text-2xl font-semibold text-[#0B0B0B]'>{title}</h1>
      <h1 className='text-base font-semibold pb-4' style={{color:`${title_color}`}}>${price}</h1>
      <Link to={`/detailes/${id}`} className='mt-5 text-base text-white font-semibold px-7 py-2 rounded-md' style={{background:`${title_color}`}}>View Details</Link>
      </div>
    </div>
  )
}

export default DonateItem