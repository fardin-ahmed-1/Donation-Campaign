import { useEffect, useState } from "react"
import DonateItem from "../components/DonateItem"
const Donation = () => {
  const [donate, setDonate]=useState([])
  const [noData, setNoData]=useState()
  const [showMore, setShowMore]=useState(false)

  useEffect(()=> {

    const donateItems=JSON.parse(localStorage.getItem('donate'))
    if(donateItems){
      setDonate(donateItems)
    }
    else{
      setNoData('Your donation history is empty...!')
    }
  },[])
  
  console.log(showMore)
  
  return (
    <div className="container mx-auto px-4 my-3">
      {noData? <p className="h-[80vh] text-3xl text-black font-bold flex justify-center items-center">{noData}</p>
       :
       <div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
              showMore? donate.map(donate => <DonateItem key={donate.id} donate={donate}> </DonateItem> ) :
              donate.slice(0,4).map(donate => <DonateItem key={donate.id} donate={donate}> </DonateItem> )

            }
          </div>
       </div>
        
        }  
          
            {
              
        donate.length > 4 ?   <div className="text-center mt-7 mb-6">
        <button onClick={()=>!setShowMore(!showMore)} className="text-white bg-[#009444] text-base font-semibold  px-8 rounded-lg leading-[40px]">{showMore?'': "See All" }</button>
        </div>  : null
      }
        
    </div>
  )
}

export default Donation