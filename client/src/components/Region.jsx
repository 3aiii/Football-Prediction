import React from 'react'
import { CiSearch } from "react-icons/ci";


function Region() {
  return (
    <div className='my-4 border-solid border-[#222222] border-[1px] rounded-md flex-auto w-[20%]'>
      <div className='flex items-center py-3 text-[#707070] '>
        <CiSearch className='text-2xl mx-2 '></CiSearch>
        <input 
          type="text" 
          placeholder="Search" 
          className='bg-inherit w-full placeholder:text-gray-500 
            focus:outline-none text-white bg-black font-light'
        />
      </div>
    </div>
  )
}

export default Region