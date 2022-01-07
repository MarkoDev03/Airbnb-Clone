import React, { useContext } from 'react'
import { CommentsAPI } from '../pages/hotel'
import { HiLocationMarker } from "react-icons/hi";
import Rating from '@material-ui/lab/Rating';
import { format } from 'date-fns'

function Comments() {
    const value  = useContext(CommentsAPI)
    return (
        <div  className='grid grid-cols-1 lg:grid-cols-2 my-2' style={{width:"100%"}}>         
                     {value.map((comment) => (
                         <div className='col-span-1 flex flex-col items-start justify-start py-3 my-2 mx-1'>
                            <div className='flex justify-start items-center' style={{width:"100%"}}>
                                 <img src={comment.user.avatar.large.url} alt="" className='w-[80px] h-[80px] rounded-full mr-2' />
                                  <div className='flex justify-start items-start flex-col'>
                                       <span className='text-lg font-semibold break-all'>{comment.user.username}</span>
                                     <div className='flex justify-start items-center'>
                                        <HiLocationMarker className="h-3 w-3 mr-1" />
                                       <span className='text-base text-gray-500 break-words'>{comment.user.user_location.name}</span>
                                     </div>
                                 </div>
                            </div>
                            <p className='text-base break-words my-1' style={{width:"80%"}}>
                                 {comment.text}
                            </p>
                            <Rating name="read-only" value={Number(comment.rating)} readOnly />
                            <span className='text-xs text-gray-500'>{format(new Date(comment.created_time), "dd MMM yyyy")}</span>
                        </div>
                ))}            
             </div>
    )
}

export default Comments