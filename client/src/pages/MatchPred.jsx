import React from 'react'
import Navbar from '../components/Navbar'
import Team from '../components/Team'

const MatchPred = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Navbar />
        <div className='flex w-[1080px] gap-6'>
          <Team />
          <p>dwdw</p>
        </div>
    </div>
  )
}

export default MatchPred