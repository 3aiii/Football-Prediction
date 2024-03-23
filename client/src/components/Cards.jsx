import React, { useEffect, useState } from 'react'
import Card from './Card'
import { TbPlayFootball } from "react-icons/tb";
import { v4 as uuidv4 } from 'uuid';
import { MdArrowForwardIos } from "react-icons/md";
import Pagination from './Pagination';
import axios from 'axios'

const Cards = () => {
    const [accordionOpen ,setAccordionOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [Matchs, setMatchs] = useState([]);
    const totalPages = 19; 

    useEffect(()=>{
        const fetch_data = async () =>{
            const data = await axios.get(`http://127.0.0.1:5000/?page=${currentPage}`)
            setMatchs(data.data)
        }
        fetch_data()
    },[currentPage])
    
    const onPageChange = pageNumber => {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
        <>
            { 
                Matchs.map((match)=>(
                    <div key= {uuidv4()}>
                        {/* Round */}
                        <div className='flex w-full items-center'>
                            <div className='flex items-center text-left gap-2 my-4'>
                                <TbPlayFootball 
                                    className='text-5xl text-light-or'
                                />
                                <div className='mt-[6px] text-2xl leading-5'>       
                                    <h1 className=' font-bold text-light-or'>Round {match.RoundNumber}</h1>
                                    {(() => {
                                        const matchDate = new Date(match.Date);
                                        const months = [
                                            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                                        ];
                                        const day = matchDate.getDate();
                                        const monthIndex = matchDate.getMonth();
                                        const year = matchDate.getFullYear();
                                        const formattedDate = `${day} ${months[monthIndex]} ${year}`;
                                        
                                        return <p className='font-extralight text-sm'>{formattedDate}</p>;
                                    })()}
                                </div>  
                            </div>
                        </div>

                        {/*  Each Matchs */}
                        <div className={`grid transition-all duration-300 ease-in-out
                        `}>
                            {
                                match?.Matchs?.map((m)=>(
                                    <Card
                                        match = { m }
                                        key={ uuidv4() }
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </>
    )            
}

export default Cards