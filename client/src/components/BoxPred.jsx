import React, { useEffect, useState } from 'react'
import Teams from '../utils/EPL_Team.json'
import axios from 'axios'
import { SiAffine } from "react-icons/si";
import BoxResult from './BoxResult';

const BoxPred = () => {
    const [pred,setPred] = useState([])
    const [homeTeam,setHomeTeam] = useState('')
    const [awayTeam,setAwayTeam] = useState('')
    const [day,setDay] = useState(0)

    const Predictions = async () =>{
        const data = await axios.post(`http://127.0.0.1:5000/api/form`, {
                HomeTeam : homeTeam,
                AwayTeam : awayTeam,
                Day : day
            })
            setPred(data.data.Prediction[0])
    }

    const handleChange = (event,Input) =>{
        if (Input == 'HomeTeam'){
            setHomeTeam(event.target.value)
        } else if (Input == 'AwayTeam'){
            setAwayTeam(event.target.value)
        } else if (Input == 'Day'){
            setDay(event.target.value)
        } 
    }

  return (
    <div className='my-4 p-3 border-solid border-[#222222] h-fit
            border-[1px] rounded-md flex-auto w-[75%] text-white'
    >
        <div className='flex justify-between border-b-[1px] 
            border-solid border-[#222222] pb-2 items-center text-[#707070]'
        >
            <button
                className='hover:text-light-or text-xl duration-150'
            >Predictions</button>
            <SiAffine className='text-light-or text-3xl'/>
        </div>
        <div className='flex w-full mt-2 gap-4'>
            <div className='w-full'>
                <label className='text-xl'>HomeTeam</label>
                <div className='flex justify-center my-2'>
                    {
                        homeTeam !== '' 
                            ? (
                                <img
                                    src={`src/assets/team_logo/${homeTeam}.png`}
                                    className='w-[250px] h-[250px] object-contain'
                                />
                            ) : (
                                <img
                                    src={`src/assets/team_logo/None-Team.png`}
                                    className='w-[250px] h-[250px] object-contain'
                                />
                            )
                        }
                </div>
                <select 
                    className='w-full rounded-md text-black border border-gray-300 
                        px-3 py-2 focus:outline-none focus:border-blue-500 bg-white shadow-md'
                    onChange={(e) => handleChange(e,"HomeTeam")}
                >
                    {
                        Teams.map((team)=>(
                            <option 
                            key={ team.team_id }
                            value={team.team_name}
                            className=''>   
                                { team.team_name }
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className='w-full'>
                <label className='text-xl'>AwayTeam</label>
                <div className='flex justify-center my-2'>
                    {
                        awayTeam !== '' 
                            ? (
                                <img
                                    src={`src/assets/team_logo/${awayTeam}.png`}
                                    className='w-[250px] h-[250px] object-contain'
                                    />
                                    ) : (
                                    <img
                                        src={`src/assets/team_logo/None-Team.png`}
                                        className='w-[250px] h-[250px] object-contain'
                                        />
                                        )
                                    }
                </div>
                <select 
                    className='w-full rounded-md text-black border border-gray-300 
                        px-3 py-2 focus:outline-none focus:border-blue-500'
                    onChange={(e) => handleChange(e,"AwayTeam")}
                >
                    {
                        Teams.map((team)=>(
                            <option 
                            key={ team.team_id }
                            value={team.team_name}
                            className=''>
                                { team.team_name }
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
        <div className='flex mt-4 gap-4'>
            {/* <label className='  '>Day</label> */}
            <select 
                onChange={(e) => handleChange(e,'Day')}
                className='w-full rounded-md text-black border border-gray-300 
                px-3 py-2 focus:outline-none focus:border-blue-500 bg-white shadow-md'>
                <option value={0}>Monday</option>
                    <option value={1}>Tuesday</option>
                    <option value={2}>Wednesday</option>
                    <option value={3}>Thursday</option>
                    <option value={4}>Friday</option>
                    <option value={5}>Saturday</option>
                    <option value={6}>Sunday</option>
            </select>
        </div>
        <button 
            onClick={Predictions}
            type='button' 
            className='bg-medium-or px-2 w-full py-[5px] 
                rounded-md mt-4 text-xl'>Predictions</button>
        {
            pred?.length !== 0 
                ? (
                    <BoxResult 
                        HomeTeam = { homeTeam }
                        AwayTeam = { awayTeam }
                        pred = { pred }
                    />
                ) : (
                    <></>
                )
        }
    </div>
  )
}

export default BoxPred