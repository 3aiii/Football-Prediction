import React from 'react'
import Logo from '../assets/main_logo/Logo';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoFootball } from "react-icons/io5";
import { GoStar } from "react-icons/go";
import { BsNewspaper } from "react-icons/bs";

function Navbar() {
  return (
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
            </div>
        </div>
    </div>
  )
}

export default Navbar