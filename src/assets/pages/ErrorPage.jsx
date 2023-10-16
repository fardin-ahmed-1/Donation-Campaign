import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='text-center'>
            <h1 className='text-8xl font-black mb-5'>Oops!</h1>
            <h1 className='text-2xl text-[#FF444A] font-semibold uppercase'>404 page not found</h1>
            <p className='mb-7 mt-4 text-lg font-medium text-black w-[500px]'> The page you're looking for might be hiding or has taken a vacation. Please check the URL or navigate back to safety using the menu</p>
            <Link to='/' className="py-3 rounded-full text-center bg-[#FF444A] px-8 text-base text-white font-semibold uppercase"> Go to Homepage </Link>
        </div>

    </div>
  )
}

export default ErrorPage