import { useLoaderData, useParams } from "react-router-dom"
import swal from 'sweetalert';

const Detailes = () => {
  const dataItems = useLoaderData([])
  const { id } = useParams()
  const idParse = (parseInt(id))

  const dataItem = dataItems.find(item => item.id === idParse)
  
  const { image, title,price, title_color, description } = dataItem

  const handelDonate=()=>{
    
    const addDonateItems=[];
    const donateItems=JSON.parse(localStorage.getItem('donate'))
     swal("Success!", "Thank you for your donation!", "success");
     
    if(!donateItems){

      addDonateItems.push(dataItem)
      localStorage.setItem('donate', JSON.stringify(addDonateItems))


    } else{

      const isHave=donateItems.find(donateItem => donateItem.id===idParse)

      if(!isHave){
        addDonateItems.push(...donateItems,dataItem)
        localStorage.setItem('donate', JSON.stringify(addDonateItems))
       
      } 
      else{
        swal("Error", "You have already donated!", "error");
      }




    }

  }
  return (
    <div className="container mx-auto px-4">
      <div className="relative">

        <img className="w-full h-[500px]  object-fill " src={image} alt="" />
        
        <div className=" absolute w-full left-0 bottom-0">
          <div className="bg-[#0000007c]  py-7">
            <button onClick={handelDonate} className="text-xl font-semibold py-3 px-8 rounded-lg ml-5 text-white bg-red-500" style={{background:`${title_color}`}}>Donate ${price}</button>
          </div>
        </div>
      </div>

      <div className="my-10 space-y-2">
        <h1 className="text-[40px] text-[#0B0B0B] font-bold">{title}</h1>
        <p className="text-base text-[#0B0B0BB2] font-normal">{description}</p>

      </div>

    </div>

  )
}

export default Detailes