import React from 'react'

const BoxResultTeam = ({ Record }) => {
  console.log(Record);
  return (
    <>
      {
        Record == 'Not Found' ? (
          <p className='p-3 text-left mx-5 my-2 text-[#707070] font-extralight text-lg'>
            Can't find enough of this team's latest matches? The developer may not have this team's information in their database.
          </p>
        ) : (
          <div className='flex flex-col items-center'>
            {
              (() => {
                const matchDate = new Date(Record.Date);
                const months = [
                  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ];
                const day = matchDate.getDate();
                const monthIndex = matchDate.getMonth();
                const year = matchDate.getFullYear();
                const formattedDate = `${day} ${months[monthIndex]} ${year}`;
                
                return <p className='font-extralight text-lg my-3'>=== {formattedDate} ===</p>;
              })()
            }
            <div className='w-full py-3 flex 
              justify-center items-center hover:bg-s-black'>
              {/** team1 */}
              <div className='flex items-center'>
                <p>{Record.HomeTeam}</p>
                <img src={`/src/assets/team_logo/${Record.HomeTeam}.png`} alt="" className='w-[50px] ml-1' />
              </div>

              {/** result */}
              <div className='mx-2 px-2 py-1 bg-medium-or rounded-md'>
                <p>{ Record.FTHG } - { Record.FTAG }</p>
              </div>

              {/** team2 */}
              <div className='flex items-center'>
                <img src={`/src/assets/team_logo/${Record.AwayTeam}.png`} alt="" className='w-[50px] ml-1' />
                <p>{Record.AwayTeam}</p>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default BoxResultTeam