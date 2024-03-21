import React from 'react'

const BoxResult = ({ HomeTeam,AwayTeam,pred }) => {
    // console.log(pred);
    // console.log(pred?.[0]);
  return (
    <div className='mt-4'>
        <div className='flex flex-col bg-light-black rounded-md font-extralight'>  
            <div className='w-full flex text-center gap-4'>
                <div className='w-1/3'>
                    <img
                        src={`src/assets/team_logo/${HomeTeam}.png`}
                        alt='HomeTeam-img'
                        className='w-full h-[250px] object-contain'
                    />
                    <h4 className='my-[4px] text-lg'>{ HomeTeam }</h4>
                    <p className='bg-medium-or text-center font-light text-white text-xl rounded-md'>{ pred?.[1].toFixed(2) }</p>
                </div>
                <div className='flex flex-col justify-end w-1/3'>
                    <h4 className='my-[4px] text-lg'>Draw</h4>
                    <p className='bg-medium-or text-center font-light text-white text-xl rounded-md w-full'>{ pred?.[2].toFixed(2) }</p>
                </div>
                <div className='w-1/3'>
                    <img
                        src={`src/assets/team_logo/${AwayTeam}.png`}
                        alt='HomeTeam-img'
                        className='w-full h-[250px] object-contain'
                    />
                    <h4 className='my-[4px] text-lg'>{ AwayTeam }</h4>
                    <p className='bg-medium-or text-center font-light text-white text-xl rounded-md'>{ pred?.[0].toFixed(2) }</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BoxResult