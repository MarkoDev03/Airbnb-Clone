import React from 'react'

function HotelItem({ item }) {
    return (
       <React.Fragment>
           {
               item.value !== "" ? (
                <div className='className="flex justify-start items-center px-2 py-2 mr-2' style={{width:"100%"}}>
                <div className='flex items-center justify-start'>
                {item.icon}
             <h1 className='text-xl font-semibold'>{item.title}</h1>
             </div>     
                {
                    item.isLink ? (
                        <a href={item.value} target="_blank" className='text-blue-500 break-words py-2 font-semibold underline'>VISIT WEBSITE</a>
                    ) : (
                        <span className='text-gray-500 break-words w-full'>{item.value}</span>
                    )
                }
            </div>    
               ): ""
           }
       </React.Fragment> 
    )
}

export default HotelItem
