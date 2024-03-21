import React from 'react'
import Matchs from '../utils/Matchs.json'
import Navbar from '../components/Navbar'
import Team from '../components/Team'
import Result from '../components/Result'

const Main = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar/>
      <div className='w-[1080px] flex'>
        <Team/>
        <Result/>
      </div>
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