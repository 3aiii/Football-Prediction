import React from 'react'
import Navbar from '../components/Navbar'
import Team from '../components/Team'
import BoxMatch from '../components/BoxMatch'

const Favorite = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
      <div className='flex w-[1080px] gap-4'>
        <Team />
        <BoxMatch />
      </div>
    </div>
  )
}

export default Favorite