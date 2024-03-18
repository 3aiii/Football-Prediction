import React, { useEffect, useState } from 'react'
import Matchs from '../utils/Matchs.json'
import axios from 'axios'

const Main = () => {
  const [data, setData] = useState([]);
  const [HomeTeam, setHomeTeam] = useState('');
  const [AwayTeam, setAwayTeam] = useState('');
  const [Day, setDay] = useState();

  const handleSend = async() =>{
    const resp = await axios.post('http://127.0.0.1:5000/api/form', {
      HomeTeam,
      AwayTeam,
      Day
    })
    
    console.log(resp.data);
  }

  const fetch = async () =>{
    const {data}  = await axios.get('http://127.0.0.1:5000/api/user')
    setData(data.user)
  }

  useEffect(() => {
    fetch()
  }, []);

  return (
    <div className='text-bold text-xl'>
      <form 
        className='flex flex-col text-white' 
        method='POST'
      >
        <input
          type='text'
          placeholder='HomeTeam'
          onChange={(e)=> setHomeTeam(e.target.value)}
          className='bg-black p-2 text-xl'
          name='HomeTeam'
        />
        <input
          type='text'
          placeholder='AwayTeam'
          onChange={(e)=> setAwayTeam(e.target.value)}
          className='bg-black p-2 text-xl'
          name='AwayTeam'
        />
        <input
          type='number'
          placeholder='Day'
          onChange={(e)=> setDay(e.target.value)}
          className='bg-black p-2 text-xl'
          name='Day'
        />
        <button type='button' onClick={handleSend} className='bg-slate-500 p-4'>Submit</button>
      </form>
       {/* <ul className='bg-black text-white'>
        {
          Matchs.map(team => (
            <li key={team.MatchNumber} className=''>
              <div className='flex items-center gap-2'>
                <img
                  src={`src/assets/team_logo/${team.HomeTeam}.png`}
                  alt='none-png'
                  className='w-[40px] h-[40px]'
                />
                {team.HomeTeam} - {team.AwayTeam}
                <img
                  src={`src/assets/team_logo/${team.AwayTeam}.png`}
                  alt='none-png'
                  className='w-[40px] h-[40px]'
                />
              </div>
            </li>
          ))
        }
      </ul> 
      */}
    </div>
  )
}

export default Main