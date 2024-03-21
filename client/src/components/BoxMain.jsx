import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import Card from './Card';


function BoxMain() {
    return (
    <div className='text-light-gray my-4 border-solid 
        border-[#222222] border-[1px] rounded-md w-[75%]
        p-3'
    >
        <div className='flex justify-between border-b-[1px] 
            border-solid border-[#222222] pb-2 items-center text-[#707070]'>
            <button
                className='hover:text-light-or text-xl duration-150'
            >Premier League</button>
            <MdArrowForwardIos className='text-3xl'/>
        </div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    )
}

export default BoxMain