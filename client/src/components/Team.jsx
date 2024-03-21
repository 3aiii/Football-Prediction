import React from 'react'
import { CiSearch } from "react-icons/ci";
import { SlArrowRight } from "react-icons/sl";
import { MdArrowForwardIos } from "react-icons/md";
import Teams from "../utils/EPL_Team.json"

function Team() {
  return (
    <div className='text-light-gray my-4 mx-4 border-solid border-gray border-2 rounded-md w-1/4'>
        {/* Search Input */}
        <div className='flex items-center py-3 border-solid border-gray border-b-2'>
          <CiSearch className=' mx-3 text-xl'></CiSearch>
          <input type="text" name="" id="" placeholder="Search" className='bg-black w-full placeholder:text-light-gray focus:outline-none'/>
        </div>

        {/* Teams */}
        <div className='flex items-center justify-between my-2 mx-5'>
          <p>TEAMS</p>
          <MdArrowForwardIos/>
        </div>

        <div>
          {Teams.map((data, index) =>  
            <div className='flex items-center mx-7 my-2 bg-md-black py-2 px-1 rounded-md text-white hover:bg-s-black'>
              <img src={`/src/assets/team_logo/${data.team_name}.png`} alt="" className='w-[40px] h-[40px] mr-2'/>
              <p>{data.team_name}</p>
            </div>
          )}
        </div>
    </div>
    
  )
}

export default Team