import React from 'react'
import { IoIosStarOutline } from "react-icons/io";
import { convertDate } from '../utils/Date';

const Card = ({ match }) => {
    const { formattedDate,formattedTime } = convertDate(match?.DateUtc)

    return (
        <div 
            key={match.MatchNumber}
            className='flex mb-2 bg-md-black py-2 px-1
                rounded-md text-white hover:bg-s-black justify-between'>

            {/* Date */}
            <div className='px-3 flex flex-col justify-center font-extralight items-center'>
                <p className='font-extralight text-sm'>{formattedDate}</p>
                <p className='font-extralight text-sm'>{formattedTime}</p>
            </div>

            {/* Teams */}
            <div className='w-2/4'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center '>
                        <img src={`/src/assets/team_logo/${match.HomeTeam}.png`} alt="" className='w-[30px] h-[30px] mr-2'/>
                        <p>{ match.HomeTeam }</p>
                    </div>
                    <div>
                        <p className='bg-medium-or px-2 rounded-md '>22.9 %</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center '>
                        <img src={`/src/assets/team_logo/${match.AwayTeam}.png`} alt="" className='w-[30px] h-[30px] mr-2'/>
                        <p>{ match.AwayTeam }</p>
                    </div>
                    <div>
                        <p className='bg-medium-or px-2 rounded-md '>99.9 %</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center font-extralight'>
                <p>DRAW</p>
                <p>00.0</p>
            </div>

            {/* Draw  */}
            <div className='px-3 flex justify-center items-center text-xl'>
                <IoIosStarOutline/>
            </div>
        </div>
    )
}

export default Card