import React from 'react'
import Rating from '@material-ui/lab/Rating';

function HotelHeading({votecount, name, ranking, rating}) {
    return (
        <div className='w-100 flex justify-start lg:justify-between items-start lg:items-center py-2 px-2 flex-col lg:flex-row'>
               <div>
                   <h1 className='font-semibold text-xl break-words'>{name}</h1>
                   <h3 className='text-gray-600 break-words'>{ranking}</h3>
              </div>
               <div className='flex justify-end flex-col items-start lg:items-end'>
                     <p className='text-gray-500'>{votecount} reviews &nbsp;</p>
                     <Rating name="read-only" value={Number(rating)} readOnly size='small' />
               </div>
        </div>
    )
}

export default HotelHeading
