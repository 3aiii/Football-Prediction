import React from 'react'
import { CiSearch } from "react-icons/ci";


function Region() {
  return (
    <div className='my-4 mx-4 border-solid border-gray-800 border-2 rounded-md w-1/4'>
        <div className='flex items-center py-3'>
          <CiSearch className='text-gray-400 mx-3 text-xl'></CiSearch>
          <input type="text" name="" id="" placeholder="Search" className='bg-inherit w-full placeholder:text-gray-500'/>
        </div>
    </div>
  )
}

export default Region