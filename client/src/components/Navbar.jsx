import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom'
import { PiSoccerBall  } from "react-icons/pi";
import Menu from './Menu';

function Navbar() {
  return (
<<<<<<< HEAD
    <div className='border-solid border-[#222222] w-full justify-center
        border-b-[1px] h-16 flex text-white text-bold text-2xl'
    >
        <div className='flex w-[1080px] justify-between'>
            <div className="text-center flex items-center">
                {/* <RxHamburgerMenu className='text-gray-50 mx-7'/> */}
                <Link 
                    to={'/'} 
                    className='flex text-3xl gap-2 font-medium'
                >
                    Football <span className=' text-light-or'>Predictions</span>
                </Link>
            </div>
            <div className='flex gap-2'>
                <Menu/>
=======
    <div className='w-full border-solid border-gray border-b-2 h-16 flex justify-between'>
        <div className="text-center flex items-center">
            <RxHamburgerMenu className='text-s-light-gray mx-7'/>
            <Logo></Logo>
        </div>
        <div className='flex text-light-gray'>
            <div className='flex items-center mx-5 hover:cursor-pointer'>
                <IoFootball className='mr-2'/>
                <p>Scores</p>
            </div>
            <div className='flex items-center mx-5 hover:cursor-pointer'>
                <GoStar className='mr-2'/>
                <p>Favourites</p>
            </div>
            <div className='flex items-center mx-5 hover:cursor-pointer'>
                <BsNewspaper className='mr-2'/>
                <p>News</p>
>>>>>>> prem
            </div>
        </div>
    </div>
  )
}

export default Navbar