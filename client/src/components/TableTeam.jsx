import React from 'react'
import Navbar from './Navbar'
import Team from './Team'
import BoxSelectTeam from './BoxSelectTeam'

const TableTeam = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className='flex w-[1080px] gap-4'>
                <Team />
                <BoxSelectTeam/>
            </div>
        </div>
    )  
}

export default TableTeam