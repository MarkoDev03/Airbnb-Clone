import Image from "next/image";
import {  StarIcon } from "@heroicons/react/solid";
import { HiOutlineHeart , HiLocationMarker} from "react-icons/hi";
import Rating from '@material-ui/lab/Rating';

function InfoCard({ img, location, title, description, star, price, total , votecount, distance, range}) {
  return (
    <div className=' active:scale-105 data-card flex-col md:flex md:flex-row md:items-center py-5 px-3 border-b cursor-pointer hover:opacity-80 hover:shadow-lg  transition duration-200 ease-out first:border-t' style={{width:'100%'}}>
      <div className="relative h-[250px] md:h-52 md:w-72 flex-grow md:flex-grow-0 md:flex-shrink-0  ">
        
        <Image src={img} layout="fill" objectFit="cover"  className='rounded-2xl'/>
      </div>
      <div className='flex flex-col flex-grow pl-1 md:pl-5 pt-4 md:pt-0'>
             <div className='flex justify-between'>
                   <p className="text-base text-gray-600 location">{location}</p>
                   <HiOutlineHeart  className='text-2xl cursor-pointer active:scale-105 transition duration-150 ease-out' />
             </div>
             <h4 className='text-xl font-semibold title'>{title}</h4>
             <div  className='border-b w-60 md:w-60 pt-1' />
            <div >
            <p className='text-base pt-1 flex-grow text-gray-600 title'>{description}</p>
             <p className='text-xs flex-grow text-gray-400'>{distance} km from downtown</p>
            </div>
             <div className='flex'>
             <p className='py-1 px-2  border-2 border-gray-200 rounded-md w-auto flex-grow-0 text-xs mt-2 active:scale-105 transition duration-150 ease-out'>{range}</p>
             </div>
     
             <div className='flex justify-between items-center md:items-center pt-3 md:pt-5 data-dwn'>
                 <p className='flex text-lg'>
                 <Rating name="read-only" value={Number(star)} readOnly />
                 </p>
                 <div>
                   <p className='font-semibold pb-2 text-xl'>{price} <span className='text-base text-gray-400 pb-2 title'>/ per night</span>
                   </p>
                   {/* <p className='text-right font-extralight'>{total}</p> */}
                 </div>
             </div>
      </div>
    </div>
  );
}

export default InfoCard;
