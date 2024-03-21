import React from 'react'
import Navbar from '../components/Navbar'
import Team from '../components/Team'
import BoxContent from '../components/BoxContent'

const Content = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar />
      <div className='flex w-[1080px] gap-6'>
        <Team />
        <BoxContent />
        <p>dwd</p>
      </div>
    </div>

  )
}

export default Content