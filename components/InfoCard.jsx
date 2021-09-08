import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className='flex py-1 md:py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-1 md:pr-4 transition duration-200 ease-out first:border-t'>
      <div className="relative h-65 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover"  className='rounded-2xl'/>
      </div>
      <div className='flex flex-col flex-grow pl-5'>
             <div className='flex justify-between'>
                   <p className=" text-xs md:text-base">{location}</p>
                   <HeartIcon  className=' h-4 md:h-7 cursor-pointer' />
             </div>
             <h4 className='text-base md:text-xl'>{title}</h4>
             <div  className='border-b w-10 pt-2' />
             <p className='hidden md:inline-flex text-xs md:text-sm pt-2 flex-grow text-gray-500 text-'>{description}</p>
             <div className='flex justify-between items-end pt-5'>
                 <p className='flex'>
                    <StarIcon  className='h-5 text-red-400'/>
                    {star}
                 </p>
                 <div>
                   <p className='text-base font-semibold pb-2 lg:text-2xl'>{price}</p>
                   <p className='text-right font-extralight'>{total}</p>
                 </div>
             </div>
      </div>
    </div>
  );
}

export default InfoCard;
