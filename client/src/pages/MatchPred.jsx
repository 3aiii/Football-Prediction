import React from 'react'
import Navbar from '../components/Navbar'
import Team from '../components/Team'
import BoxPred from '../components/BoxPred'

const MatchPred = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Navbar />
        <div className='flex w-[1080px] gap-4'>
          <Team />
          <BoxPred />
        </div>
    </div>
  )
}

export default MatchPred