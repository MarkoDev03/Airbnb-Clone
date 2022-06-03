import React from 'react'
import {  StarIcon } from "@heroicons/react/solid";

function RatingComponent({ ratingItem }) {
    return (
        <div className='flex items-center justify-start my-2' style={{width:"100%"}}>
        <span className='text-gray-600'>{ratingItem.name}</span>
        <StarIcon className="h-4 w-4" style={{color:"#d70466", fill:"#d70466"}} />
        <progress id="five"  value={ratingItem.value} max={ratingItem.max} className='progress'>{ratingItem.value}</progress>
        <span>{ratingItem.avg} %</span>
      </div>
    )
}

export default RatingComponent
