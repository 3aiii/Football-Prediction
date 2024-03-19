import React, { useEffect, useState } from 'react'
import Matchs from '../utils/Matchs.json'

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
      <p>Test</p>
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