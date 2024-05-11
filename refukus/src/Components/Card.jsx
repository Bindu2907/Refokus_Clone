import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Card({width,start,para,hover="false"}) {
  return (
    <div className={` bg-zinc-800 p-5 rounded-xl hover:bg-violet-600 ${width} min-h-[30rem]  flex flex-col justify-between`}>
<div className='w-full flex justify-between items-center'>
    <h3>one heading</h3>
    <FaArrowRightLong/> 
</div>
<div>
<h1 className='text-3xl font-medium mt-5'>Who we are?</h1>
</div>
<div className='down w-full'>
{
    start===true&&(
        <>
        <h1 className="text-6xl font-bold tracking-tight leading-none">Start a project</h1>
    <button className='mt-5 rounded-full py-2 px-3 border-[1px] border-zinc-50'>Contact us</button>    
        </>
    )
}
{para&&(<p className='text-sm text-zinc-500 font-medium '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>)}
    
</div>
    </div>
  )
}

export default Card