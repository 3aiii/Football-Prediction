import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import BoxResultTeam from './BoxResultTeam'

const BoxTeam = () => {
  const location = useLocation().pathname.split('/')[2]
  const [Match,setMatch] = useState([])
  const [Team,setTeam] = useState()
  
  useEffect(()=>{
    const fetch_data = async () =>{
      const data = await axios.get(`http://127.0.0.1:5000/api/latest-date?team_name=${location}`)
      setMatch(data.data.Details)
    }

    const fetch_data_team= async () =>{
      const data = await axios.get(`http://127.0.0.1:5000/api/getTeam?team=${location}`)
      setTeam(data.data?.[0])
    }
    fetch_data()
    fetch_data_team()

  },[location])
  
  return (
    <div className='my-4 p-3 border-solid border-[#222222] h-fit
      border-[1px] rounded-md flex-auto w-[75%] text-white'
    >
      <div className='flex flex-col items-center'>
        <img src={`/src/assets/team_logo/${location}.png`} alt="" className='w-[170px]' />
        <div className='text-center'>
          <h1 className='font-bold text-4xl'>{ Team?.team_name }</h1>
          <p>{ Team?.team_stadium }</p>
        </div>
      </div>

      <div className='w-full mt-5  border-solid border-[#222222] border-[1px] rounded-md overflow-hidden'>
        <div className='text-center bg-medium-or py-3'>
          <p>Result</p>
        </div> 
        <div>
          {
            Match?.map((match)=>(
              <>
                {
                  match == 'Not Found' ?(
                    <BoxResultTeam
                      Record = { 'Not Found' }
                    />
                  ) :(
                    <BoxResultTeam
                      Record = { match }
                      key={ match?.Date }
                    />
                  )
                }
              </>
            ))
          }
        </div>       
      </div>
    </div>
  )
}

export default BoxTeam