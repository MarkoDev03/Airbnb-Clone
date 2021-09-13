import Image from "next/image";
import {  StarIcon } from "@heroicons/react/solid";
import { HiOutlineHeart , HiLocationMarker} from "react-icons/hi";

function InfoCard({ img, location, title, description, star, price, total , votecount, distance, cityname}) {
  return (
    <div className=' flex-col md:flex md:flex-row py-5 px-3 border-b cursor-pointer hover:opacity-80 hover:shadow-lg  transition duration-200 ease-out first:border-t'>
      <div className="relative h-[250px] md:h-52 md:w-80 flex-grow md:flex-grow-0 md:flex-shrink-0  ">
        
        <Image src={img} layout="fill" objectFit="cover"  className='rounded-2xl'/>
      </div>
      <div className='flex flex-col flex-grow pl-1 md:pl-5 pt-4 md:pt-0'>
             <div className='flex justify-between'>
                   <p className="text-lg text-gray-600">{location}</p>
                   <HiOutlineHeart  className='text-3xl cursor-pointer ' />
             </div>
             <h4 className='text-2xl font-semibold'>{title}</h4>
             <div  className='border-b w-60 md:w-60 pt-2' />
            <div>
            <p className='text-base pt-2 flex-grow text-gray-600'>{description}</p>
             <p className='text-xs flex-grow text-gray-400'>{distance} km from downtown</p>
            </div>
     
             <div className='flex justify-between items-center md:items-end pt-3 md:pt-5'>
                 <p className='flex text-lg'>
                    <StarIcon  className='h-7 text-red-400'/>
                    {star} <span className='text-gray-600 ml-1'>({votecount} votes)</span>
                 </p>
                 <div>
                   <p className='font-semibold pb-2 text-xl'>{price} <span className='text-base text-gray-400 pb-2'>/ per night</span>
                   </p>
                   <p className='text-right font-extralight'>{total}</p>
                 </div>
             </div>
      </div>
    </div>
  );
}

export default InfoCard;
