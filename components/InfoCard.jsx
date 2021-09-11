import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className=' flex-col md:flex md:flex-row py-5 px-3 border-b cursor-pointer hover:opacity-80 hover:shadow-lg  transition duration-200 ease-out first:border-t'>
      <div className="relative h-[250px] md:h-52 md:w-80 flex-grow md:flex-grow-0 md:flex-shrink-0  ">
        
        <Image src={img} layout="fill" objectFit="cover"  className='rounded-2xl'/>
      </div>
      <div className='flex flex-col flex-grow pl-1 md:pl-5'>
             <div className='flex justify-between'>
                   <p className="text-lg">{location}</p>
                   <HeartIcon  className=' h-7 cursor-pointer' />
             </div>
             <h4 className='text-2xl'>{title}</h4>
             <div  className='border-b w-60 md:w-60 pt-2' />
             <p className='text-base pt-2 flex-grow text-gray-500'>{description}</p>
             <div className='flex justify-between items-center md:items-end '>
                 <p className='flex text-lg'>
                    <StarIcon  className='h-7 text-red-400'/>
                    {star}
                 </p>
                 <div>
                   <p className='font-semibold pb-2 text-2xl'>{price}</p>
                   <p className='text-right font-extralight'>{total}</p>
                 </div>
             </div>
      </div>
    </div>
  );
}

export default InfoCard;
