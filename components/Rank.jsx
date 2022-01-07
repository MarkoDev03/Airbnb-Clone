import React from 'react'

function Rank({ rank }) {
    return (
        <div  className='flex justify-around items-center my-2'  style={{width:"100%"}}>
        <h1 className='text-gray-900 text-lg'style={{width:"45%"}}>{rank.name}</h1>
        <div className='flex justify-start items-center'  style={{width:"55%"}}>
            <div className='w-[150px] h-[5px] bg-black rounded-full mx-1'></div>
            <span className='text-gray-500 font-semibold'>{rank.value}</span>
        </div>
       </div>
    )
}

export default Rank
