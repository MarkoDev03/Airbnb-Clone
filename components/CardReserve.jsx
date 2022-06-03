import React from 'react'
import {  StarIcon } from "@heroicons/react/solid";

function CardReserve({price, votecount, rating, start, end, noOfGuests}) {
    return (
        <section className='rounded-lg shadow-md flex justify-start flex-col items-start px-2 border-2 py-2 lg:w-[330px] sticky top-[100px] card-box'>
                       
        <div className='flex justify-between items-center py-1' style={{width:"100%"}}>
         <h1 className='font-semibold text-lg'>{price}
         <span className='text-sm text-gray-400 pb-2 title'>/ per night</span>
         </h1>
          
          <div className='flex items-center'>
             <StarIcon className="h-5 w-5" style={{color:"#d70466", fill:"#d70466"}} />
             <span>{rating}</span>
             <span className='underline ml-1 text-gray-700'>({votecount} reviews)</span>
          </div>
        </div>

        <div className='mx-auto flex flex-col justify-start rounded-r-lg rounded-l-lg border-2  border-black my-2' style={{width:"100%"}}>
           <div className="flex flex-start border-b-2 border-black px-2 " style={{width:"100%"}}>
                <div className="flex justify-start items-start flex-col" style={{width:"50%"}}>
                    <div className="flex justify-start items-start flex-col py-3">
                       <span className='font-semibold text-sm uppercase'>Arrival</span>
                      <span className='text-sm' style={{marginTop:"-5px"}}>{start}</span>
                    </div>
                </div>
                <div className="flex justify-start items-start flex-col border-l-2 border-black px-2 " style={{width:"50%"}}>
                <div className="flex justify-start items-start flex-col py-3">
                   <span className='font-semibold text-sm uppercase'>Departure</span>
                   <span className='text-sm' style={{marginTop:"-5px"}}>{end}</span>
                   </div>
                </div>
           </div>
                <div className='px-2 ' style={{width:"100%"}}>
                <div className="flex justify-start items-start flex-col py-3">
                   <span className='font-semibold text-sm uppercase'>Guests</span>
                   <span className='text-sm' style={{marginTop:"-5px"}}>{noOfGuests}</span>
                </div>
               </div>
        </div>
        
         <button style={{width:"100%", backgroundColor:"#d70466"}} className='rounded-lg uppercase py-2 font-semibold text-lg my-2 text-white'>reserve</button>

          <div className='text-center my-1'  style={{width:"100%"}}>
              <span className='text-gray-500 text-sm'>We still won't charge you anything</span>
          </div>

          <div  className='flex justify-start items-start flex-col py-2'  style={{width:"100%"}}>
               <div className='flex justify-between items-start pt-2'  style={{width:"100%"}}>
                    <span className='underline text-base'>Accomodation</span>
                    <span className='text-base'>$50</span>
               </div>
               <div className='flex justify-between items-start pt-2'  style={{width:"100%"}}>
                    <span className='underline text-base'>Monthly discount</span>
                    <span className='font-semibold text-green-500 text-base'>-$10</span>
               </div>
               <div className='flex justify-between items-start pt-2'  style={{width:"100%"}}>
                    <span className='underline text-base'>Cleaning fee</span>
                    <span className='text-base'>$5</span>
               </div>
               <div className='flex justify-between items-start pt-2'  style={{width:"100%"}}>
                    <span className='underline text-base'>Service fee</span>
                    <span className='text-base'>$5</span>
               </div>
          </div>
          <div className='my-3 border-b-2 border-gray-200' style={{width:"100%"}}></div>
          <div className='flex justify-between items-start pb-1'  style={{width:"100%"}}>
                    <span className='text-lg font-semibold'>Total</span>
                    <span className='text-lg font-semibold'>$50</span>
               </div>
     </section>
    )
}

export default CardReserve
