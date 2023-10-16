// import banner from '../Images/Banner.png'
const Hero = ({searchData}) => {

    const formSubmite=(e)=>{
        e.preventDefault()
         return searchData(e.target.Search.value)
    }

    return (
        <div className='-mt-28 '>
            <div  style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover' }}>
                <div className="bg-opacity-80 bg-white">
                    <div className='h-[500px] flex justify-center items-center '>
                        <div>
                            <h1 className='text-4xl md:text-5xl text-[#0B0B0B] font-bold text-center px-3'>I Grow By Helping People In Need</h1>
                            <div class="relative w-[60%] mx-auto  mt-5 text-center">
                                <form onSubmit={formSubmite}>
                                <input type="text" name='Search' className="px2 py-3 h-full w-full rounded-[7px]  border border-[#DEDEDE]  px-3 pr-20 text-lg outline-0 focus:border focus:border-[#FF444A]"
                                    placeholder="Search here...." />
                                <input type='submit' value='Search' className=" py-3 rounded-md mt-2 md:mt-0  md:py-0 md:!absolute right-0 top-0 z-10 text-center bg-[#FF444A]  md:rounded-r md:rounded-l-none h-full px-8 text-base text-white font-semibold"/> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero