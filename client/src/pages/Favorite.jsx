import React from 'react'
import Navbar from '../components/Navbar'
import Region from '../components/Region'
import BoxMatch from '../components/BoxMatch'

const Favorite = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
      <div className='flex w-[1080px] gap-6'>
        <Region />
        <BoxMatch />
      </div>
    </div>
  )
}

export default Favorite