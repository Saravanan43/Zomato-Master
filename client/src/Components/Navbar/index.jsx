import React from 'react'

//Icons
import {FaUserAlt} from "react-icons/fa";
import {HiLocationMarker} from "react-icons/hi";
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io";
import {RiSearchLine} from "react-icons/ri";

const SmNav = () =>{
    return (
        <div className='flex w-full items-center justify-between lg:hidden'>  
        <div className='w-28'>
            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
            alt='logo'
            className='w-full h-full'
            />
        </div>
        <div className='flex items-center gap-2'>
            <button className='bg-zomato-400  text-white px-2 py-1 rounded-full'>Use App</button>
            <span className='border border-gray-500 rounded-full text-zomato-300 p-2'>
            <FaUserAlt/>
            </span>
        </div>
        </div>
    )
}

const LgNav = () =>{
    return (
        <>
           <div className='hidden container px-16 mx-auto lg:inline'>
           <div className='lg:flex w-full items-center justify-around gap-2'>
    
           <div className='w-40'>
            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
            alt='logo'
            className='w-full h-full'
            />
            </div>
            
            <div className='w-3/4 ml-8 mr-60 bg-white shadow-md px-3 py-2 border border-gray-200 rounded flex items-center gap-3 '>
                <div className=' flex items-center gap-2 border-r-2 border-gray-400'>
                    <span className='text-zomato-400'>
                        <HiLocationMarker/>
                    </span>
                    <input className='focus:outline-none' type="text" placeholder="Chennai"/>
                    <span className='pr-3'>
                        <IoMdArrowDropdown/>
                    </span>
                </div>
                
                <div className='flex items-center gap-1 w-full'>
                    <span>
                        <RiSearchLine/>
                    </span>
                    <input className='focus:outline-none w-full' type="text" placeholder="Search for restaurants"/>
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <button className='text-lg text-gray-500 hover:text-gray-800'>Login</button>
                <button className='text-lg text-gray-500 hover:text-gray-800'>Signup</button>
            </div>
            
           </div>
           </div>  
        </>
    )
}

function Navbar() {
  return (
    <>
    <nav className='p-4 bg-white flex shadow-md w-full items-center'>
          <SmNav/>
          <LgNav/>
    </nav>
    </>
  )
}

export default Navbar;