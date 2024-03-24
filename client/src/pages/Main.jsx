import React from 'react'
import Navbar from '../components/Navbar'
import Team from '../components/Team'
import axios from 'axios'
import BoxMain from '../components/BoxMain'

const Main = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar/>
      <div className='flex gap-4 w-[1080px]'>
        <Team/>
        <BoxMain />
      </div>
    </div>
  )
}

export default Main