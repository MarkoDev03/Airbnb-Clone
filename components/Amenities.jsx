import React from 'react'
import { BsCheck, BsCheckAll } from "react-icons/bs";

function Amenities({ amenities }) {
    return (
        <div className='flex flex-col justify-start items-start px-2 py-2 mr-2 mt-1 border-t-2 border-gray-200' style={{width:"100%"}}>
        <div className='flex items-center justify-start'>
           <BsCheckAll className="h-7 w-7 mr-2" style={{color:"#d70466", fill:"#d70466"}} />
            <h1 className='text-xl font-semibold'>Amenities</h1>
         </div>
             <div className='relative'>
                {
                    amenities.map((amenitie) => (
                       <div className='flex items-center justify-start ml-3 amenitie' style={{width:"fit-content"}}>
                       <BsCheck className="h-5 w-5 mr-2" style={{color:"#d70466", fill:"#d70466"}} />
                        <span className='text-gray-500 font-semibold'>{amenitie.name}</span>
                    </div>      
                    ))
                }
             </div>       
       <div style={{width:"100%"}} className='py-3'></div>
     </div>
    )
}

export default Amenities
