import React from 'react'
import Navbar from '../components/Navbar'
import Region from '../components/Region'
import BoxContent from '../components/BoxContent'

const Content = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Navbar />
        <div className='flex w-[1080px] gap-6'>
            <Region />
            <BoxContent />
        </div>
    </div>

  )
}

export default Content