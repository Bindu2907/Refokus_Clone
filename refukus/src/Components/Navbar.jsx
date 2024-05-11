import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto p-3 py-6 flex item-center justify-between border-b-[1px] border-zinc-700'>
    <div className='nleft flex item-center'>
    <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt=""/>
    <div className='links flex gap-14 ml-20'>
        {["Home","work","Culture", "","News" ].map((elem,index)=>(
            elem.length===0? 
            <span
            key={index}
             className='w-1  h-15 bg-zinc-700'></span>:
            <a 
             key={index}
            className="text-sm flex items-center gap-1" href="#">
           {index===1 ? (<span  style={{boxShadow:" 0 0 0.25em #00FF19"}} className='inline-block w-2 h-2  rounded-full bg-green-500'></span>) : null} 
            {elem}
            </a>
            
            ))}
    </div>
 </div>
 <div>
    <Button/>
 </div>
    </div>
  )
}

export default Navbar