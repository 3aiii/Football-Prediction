import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import Teams from "../utils/EPL_Team.json"
import { IoIosStarOutline } from "react-icons/io";


function Result() {
  return (
    <div className='text-light-gray my-4 border-solid border-gray border-2 rounded-md w-3/4 h-min'>
        <div className='flex items-center justify-between my-2 mx-5'>
          <p>RESULT</p>
          <MdArrowForwardIos/>
        </div>

        <div className='flex mx-5 my-3 bg-md-black py-2 px-1 rounded-md text-white hover:bg-s-black justify-between'>
          {/* Date */}
          <div className='px-3 flex flex-col justify-center font-extralight items-center'>
            <p>17 Mar</p>
            <p>Posts.</p>
          </div>

          {/* Teams */}
          <div className='w-2/4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center '>
                <img src="/src/assets/team_logo/Brighton.png" alt="" className='w-[30px] h-[30px] mr-2'/>
                <p>Brighton</p>
              </div>
              <div>
                <p>22.9</p>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center '>
                <img src="/src/assets/team_logo/Man City.png" alt="" className='w-[30px] h-[30px] mr-2'/>
                <p>Manchester City</p>
              </div>
              <div>
                <p>99.9</p>
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
    </div>
  )
}

export default Result