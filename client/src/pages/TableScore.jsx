import React from 'react'
import Navbar from '../components/Navbar'
import Team from '../components/Team'
import BoxTeam from '../components/BoxTeam'

const TableScore = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <Navbar />
        <div className='flex w-[1080px] gap-6'>
            <Team />
            <BoxTeam />
        </div>
    </div>
    )
}

export default TableScore