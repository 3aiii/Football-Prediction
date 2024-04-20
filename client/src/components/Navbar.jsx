import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu';

function Navbar() {
    
  return (
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
            </div>
        </div>
    </div>
  )
}

export default Navbar