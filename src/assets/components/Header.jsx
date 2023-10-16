import React from 'react'
import logo from '../Images/Logo.png'
import { NavLink,Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='container mx-auto px-3'>
            <div className='flex justify-between gap-x-10 py-5 items-start'>
                <Link to='/'><img src={logo} alt="" /></Link> 

                <div className='flex gap-x-5 md:gap-x-7'>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "text-[#FF444A] text-lg font-medium underline" : "text-[#0B0B0B] text-lg font-medium"}>  Home</NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "text-[#FF444A] text-lg font-medium underline" : "text-[#0B0B0B] text-lg font-medium"}> Donation </NavLink>
                    <NavLink
                        to="/Statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "text-[#FF444A] text-lg font-medium underline" : "text-[#0B0B0B] text-lg font-medium"}> Statistics</NavLink>
                </div>
            </div>


        </div>
    )
}

export default Header