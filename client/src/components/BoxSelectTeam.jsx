import React from 'react'
import { SiPremierleague } from "react-icons/si";
import Teams from '../utils/EPL_Team.json'
import { Link } from 'react-router-dom'

const BoxSelectTeam = () => {
    return (
        <div className='my-4 p-3 border-solid border-[#222222] h-fit
          border-[1px] rounded-md flex-auto w-[75%] text-white'
        >
            <div className='flex justify-between border-b-[1px] 
                border-solid border-[#222222] pb-2 items-center text-[#707070]'
            >
                <button
                    className='hover:text-light-or text-xl duration-150'
                >Premier league 23/24
                </button>
                <SiPremierleague className='text-light-or text-3xl'/>
            </div>
            <div className='grid grid-cols-4 justify-center my-3 gap-4'>
                {
                    Teams.map((team)=>(
                        <Link to={`/TeamDetail/${team.team_name}`} className='flex flex-col justify-center rounded-md 
                            items-center cursor-pointer bg-md-black hover:bg-s-black'>
                            <img src={`/src/assets/team_logo/${team.team_name}.png`} alt="" className='w-[120px]' />
                            <div className='text-center my-[5px]'>
                                <h1 className='font-bold text-xl'>{team.team_name}</h1>
                                <p>{team.team_stadium}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default BoxSelectTeam