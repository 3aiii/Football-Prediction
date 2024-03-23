import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";
import Teams from "../utils/EPL_Team.json"

function Team() {
  return (
    <div className='my-4 border-solid border-[#222222] h-fit pb-3
      border-[1px] rounded-md flex-auto w-[25%] text-white'
    >
      <div className='flex items-center py-3 border-solid border-gray border-b-[1px]'>
        <CiSearch className=' mx-3 text-3xl'></CiSearch>
        <input 
          type="text" 
          name="" 
          id="" placeholder="Search" 
          className='bg-black w-full placeholder:text-light-gray 
            focus:outline-none text-white font-light'
        />
      </div>

      {/* Teams */}
      <div className='flex items-center justify-between my-2 mx-5'>
        <p>TEAMS</p>
        <MdArrowForwardIos/>
      </div>

      <div>
        {
          Teams.map((data) =>  
            <div key={data.team_id} className='flex items-center mx-5 my-2 
              bg-md-black py-2 px-1 rounded-md 
              text-white hover:bg-s-black cursor-pointer'
            >
              <img src={`/src/assets/team_logo/${data.team_name}.png`} alt="" className='w-[40px] h-[40px] mr-2'/>
              <p>{data.team_name}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Team