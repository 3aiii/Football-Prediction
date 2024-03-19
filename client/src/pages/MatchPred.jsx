import React from 'react'
import Navbar from '../components/Navbar'
import Team from '../components/Team'

const MatchPred = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Navbar />
        <div className='flex w-[1080px] gap-6'>
            <Team />
        </div>
    </div>
  )
}

export default MatchPred