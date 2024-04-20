import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { MdArrowForwardIos } from "react-icons/md";
import axios from 'axios'
import { Link } from 'react-router-dom'

function Team() {
  const [Teams,setTeams] = useState([])
  const [searchTeam,setSearchTeam] = useState('')

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(()=>{
    const fetch_data = async () =>{
      const data = await axios.get(`http://127.0.0.1:5000/api/getTeam?team=${searchTeam}`)
      setTeams(data.data)
    }
    fetch_data()
  },[searchTeam])

  return (
    <div className='my-4 border-solid border-[#222222] h-fit pb-3
      border-[1px] rounded-md flex-auto w-[25%] text-white'
    >
      <div className='flex items-center py-3 border-solid border-gray border-b-[1px]'>
        <CiSearch className=' mx-3 text-3xl'></CiSearch>
        <input 
          type="text" 
          placeholder="Search" 
          className='bg-black w-full placeholder:text-light-gray 
            focus:outline-none text-white font-light'
          onChange={(e)=>setSearchTeam(e.target.value)}
        />
      </div>

      {/* Teams */}
      <div className='flex items-center my-2 mx-5'>
        <p>TEAMS</p>
      </div>

      <div onClick={handleScrollToTop}>
        { 
          Teams.length !== 0 
            ? (
                Teams.map((data) =>
                    <Link to={`/TeamDetail/${data.team_name}`} key={data.team_id} className='flex items-center mx-5 my-2 
                      bg-md-black py-2 px-1 rounded-md 
                      text-white hover:bg-s-black cursor-pointer'                
                    >
                      <img src={`/src/assets/team_logo/${data.team_name}.png`} alt="" className='w-[40px] h-[40px] mr-2'/>
                      <p>{data.team_name}</p>
                    </Link>
                  )
              ) : (
                <div className='flex items-center justify-center mx-5 my-2 py-2 px-1 rounded-md 
                  text-[#707070] font-extralight text-lg'
                >
                  <p >Not found this team</p>
                </div>
              )
        }
      </div>
    </div>
  )
}

export default Team