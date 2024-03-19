import React from 'react'
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const BoxMatch = () => {
  return (
    <div className='my-4 p-3 border-solid border-[#222222] h-fit
            border-[1px] rounded-md flex-auto w-[75%] text-white'
    >
        <div className='flex justify-between border-b-[1px] 
            border-solid border-[#222222] pb-2 items-center text-[#707070]'
        >
            <button
                className='hover:text-light-or text-xl duration-150'
            >Favourites</button>
            <FaStar className='text-light-or text-3xl'/>
        </div>
        <div className='flex flex-col'>
            <div className='flex gap-2 items-center mt-4 text-xl text-light font-light'>
                <div className='flex gap-2 items-center'>
                    <FaRegCalendarTimes />
                    <p>11 Aug 2023 19:00</p>
                </div>
            </div>
            <Link to={`/favourites/1`} className='flex flex-col bg-light-black rounded-md
                 cursor-pointer text-extralight p-3 mt-4 hover:text-white 
                 text-[#aaaaaa] duration-150 font-extralight'>  
                <div className='flex justify-end'>
                    <FaStar className='text-light-or text-3xl'/>
                </div>
                <div className='w-full flex text-center gap-4'>
                    <div className='w-1/3'>
                        <img
                            src='/src/assets/team_logo/Aston Villa.png'
                            alt='HomeTeam-img'
                            className='w-full h-[60px] object-contain'
                        />
                        <h4 className='my-[4px] text-lg'>Aston Villa</h4>
                        <p className='bg-medium-or text-center font-light text-white text-xl rounded-md'>29.34</p>
                    </div>
                    <div className='flex flex-col justify-end w-1/3'>
                        <h4 className='my-[4px] text-lg'>Draw</h4>
                        <p className='bg-medium-or text-center font-light text-white text-xl rounded-md w-full'>44.34</p>
                    </div>
                    <div className='w-1/3'>
                        <img
                            src='/src/assets/team_logo/Liverpool.png'
                            alt='HomeTeam-img'
                            className='w-full h-[60px] object-contain'
                            />
                        <h4 className='my-[4px] text-lg'>Liverpool</h4>
                        <p className='bg-medium-or text-center font-light text-white text-xl rounded-md'>32.54</p>
                    </div>
                </div>
            </Link>
            <div className='flex flex-col bg-light-black rounded-md cursor-pointer text-extralight 
                p-3 mt-4 hover:text-white text-[#aaaaaa] 
                duration-150 font-extralight'
            >  
                <div className='flex justify-end'>
                    <FaStar className='text-light-or text-3xl'/>
                </div>
                <div className='w-full flex text-center gap-4'>
                    <div className='w-1/3'>
                        <img
                            src='/src/assets/team_logo/Luton.png'
                            alt='HomeTeam-img'
                            className='w-full h-[60px] object-contain'
                        />
                        <h4 className='my-[4px] text-lg'>Luton</h4>
                        <p className='bg-medium-or text-center font-medium text-white rounded-md'>29.34</p>
                    </div>
                    <div className='flex flex-col justify-end w-1/3'>
                        <h4 className='my-[4px] text-lg'>Draw</h4>
                        <p className='bg-medium-or text-center font-medium text-white rounded-md w-full'>44.34</p>
                    </div>
                    <div className='w-1/3'>
                        <img
                            src='/src/assets/team_logo/Man City.png'
                            alt='HomeTeam-img'
                            className='w-full h-[60px] object-contain'
                            />
                        <h4 className='my-[4px] text-lg'>Man City</h4>
                        <p className='bg-medium-or text-center font-medium text-white rounded-md'>32.54</p>
                    </div>
                </div>
            </div>
            {/* Time */}
            <div className='flex gap-2 items-center mt-4 text-xl text-light font-light'>
                <div className='flex gap-2 items-center'>
                    <FaRegCalendarTimes />
                    <p>12 Aug 2023 21:00</p>
                </div>
            </div>
            <div className='flex flex-col bg-light-black rounded-md cursor-pointer text-extralight 
                p-3 mt-4 hover:text-white text-[#aaaaaa] 
                duration-150 font-extralight'
            >  
                <div className='flex justify-end'>
                    <FaStar className='text-light-or text-3xl'/>
                </div>
                <div className='w-full flex text-center gap-4'>
                    <div className='w-1/3'>
                        <img
                            src='/src/assets/team_logo/Everton.png'
                            alt='HomeTeam-img'
                            className='w-full h-[60px] object-contain'
                        />
                        <h4 className='my-[4px] text-lg'>Everton</h4>
                        <p className='bg-medium-or text-center font-medium text-white rounded-md'>29.34</p>
                    </div>
                    <div className='flex flex-col justify-end w-1/3'>
                        <h4 className='my-[4px] text-lg'>Draw</h4>
                        <p className='bg-medium-or text-center font-medium text-white rounded-md w-full'>44.34</p>
                    </div>
                    <div className='w-1/3'>
                        <img
                            src='/src/assets/team_logo/Crystal Palace.png'
                            alt='HomeTeam-img'
                            className='w-full h-[60px] object-contain'
                            />
                        <h4 className='my-[4px] text-lg'>Crystal Palace</h4>
                        <p className='bg-medium-or text-center font-medium text-white rounded-md'>32.54</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BoxMatch