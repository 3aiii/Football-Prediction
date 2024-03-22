import React from 'react'
import Card from './Card'
import Matchs from '../utils/Matchs.json'
import { TbPlayFootball } from "react-icons/tb";

const Cards = () => {

  return (
    <>
        { 
            Matchs.map((match)=>(
                <div>
                    <div className='flex items-center gap-2 my-4'>
                        <TbPlayFootball 
                            className='text-5xl text-light-or'
                    />
                        <div className='mt-[6px] text-2xl leading-5'>
                            <h1 className=' font-bold text-light-or'>Round {match.RoundNumber}</h1>
                            {(() => {
                                    const matchDate = new Date(match.DateUtc);
                                    const months = [
                                        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                                    ];
                                    const day = matchDate.getDate();
                                    const monthIndex = matchDate.getMonth();
                                    const year = matchDate.getFullYear();
                                    const formattedDate = `${day} ${months[monthIndex]} ${year}`;
                                    
                                    return <p className='font-extralight text-sm'>{formattedDate}</p>;
                                })()
                            }
                    </div>
                </div>
                    <Card
                        match = { match }
                    />
                </div>
            ))
        }
    </>
  )
}

export default Cards