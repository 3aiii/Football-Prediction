import React from 'react'
import { IoIosStarOutline } from "react-icons/io";
import { convertDate } from '../utils/Date';

const Card = ({ match }) => {
    const { formattedDate,formattedTime } = convertDate(match?.DateUtc)
    const [HomeTeam_winRate, AwayTeam_winRate, Draw_winRate] = (match?.predictions?.[0] || []).map(rate => rate.toFixed(2));

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
                        <p className={`ml-4`}>{ match.HomeTeamScore }</p>
                    </div>
                    <div>
                        {
                            HomeTeam_winRate !== undefined
                                ? <p className='bg-medium-or px-2 rounded-md '>{ HomeTeam_winRate } %</p>
                                : <p className='bg-[#ffffff] text-black px-2 rounded-md '>NoData</p>
                            }
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center '>
                        <img src={`/src/assets/team_logo/${match.AwayTeam}.png`} alt="" className='w-[30px] h-[30px] mr-2'/>
                        <p>{ match.AwayTeam }</p>
                        <p className={`ml-4`}>{ match.AwayTeamScore }</p>
                    </div>
                    <div>
                        {
                            AwayTeam_winRate !== undefined
                                ? <p className='bg-medium-or px-2 rounded-md '>{ AwayTeam_winRate } %</p>
                                : <p className='bg-[#ffffff] text-black px-2 rounded-md '>NoData</p>
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center font-extralight'>
                <p>DRAW</p>
                {
                    Draw_winRate !== undefined
                        ? <p>{ Draw_winRate }</p>
                        : <p></p>
                    }
            </div>

            {/* Draw  */}
            <div className='px-3 flex justify-center items-center text-xl'>
                <IoIosStarOutline/>
            </div>
        </div>
    )
}

export default Card