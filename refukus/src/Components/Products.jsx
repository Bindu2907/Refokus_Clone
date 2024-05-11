import React from 'react'
import Product from './Product'
import { motion } from 'framer-motion';
import { useState } from 'react';

function Products() {
    var products=[
        {title:"arquitel",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        live:true,
        case:false
    },
    {title:"TTR",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    live:true,
    case:false
},
{title:"YIR 2022",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
live:true,
case:true
},
{title:"Yahoo!",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
live:true,
case:true
},,
    ];

    const[Pos,setPos]=useState(0);
    const mover=(val)=>{
      setPos(val*20);
    }
  return (
    <div className='mt-32 relative'>
    {products.map((val, index)=> 
      <Product count={index} val={val} mover={mover} />
      )}
    <div className=' absolute top-0 w-full h-full pointer-events-none'>
      <motion.div 
      initial={{y:Pos}}
      animate={{y:Pos+`rem`}}
      transition={{ease:[0.76,0,0.24,1],duration:.6}}
       className='window absolute w-[32rem] h-[20rem] bg-white left-[25%]  -translate-x-[-50%] overflow-hidden'>
      <motion.div animate={{y:-Pos+`rem`}} 
      transition={{ease:[0.76,0,0.24,1],duration:.5}}
      className='w-full h-full bg-sky-100'>
      </motion.div>
      <motion.div animate={{y:-Pos+`rem`}} 
      transition={{ease:[0.76,0,0.24,1],duration:.5}}
      className='w-full h-full bg-sky-200'>
      </motion.div>
      <motion.div animate={{y:-Pos+`rem`}} 
      transition={{ease:[0.76,0,0.24,1],duration:.5}}
      className='w-full h-full bg-sky-300'>
      </motion.div>
      <motion.div animate={{y:-Pos+`rem`}} 
      transition={{ease:[0.76,0,0.24,1],duration:.5}}
      className='w-full h-full bg-sky-400'>
      </motion.div>
      </motion.div>
    </div>
     
    </div>
  )
}

export default Products