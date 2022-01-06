import { useRouter } from 'next/dist/client/router'
import { HiOutlineHeart , HiLocationMarker} from "react-icons/hi";
import { format } from 'date-fns'
import Rating from '@material-ui/lab/Rating';

function InfoCard({ img, location, title, description, star, price, total , votecount, distance, range, data, startDate, endDate, noOfGuests}) {
  const router = useRouter()

  const formattedStartDate = format(new Date(startDate), "dd MMM yy")
  const formattedEndDate= format(new Date(endDate), "dd MMM yy")

  const visitHotel = () => {
    router.push({
      pathname:'/hotel',
      query: {
        location_id: data.location_id,
        name: data.name,
        latitude: data.latitude,
        longitude: data.longitude,
        ranking: data.ranking, 
        rating:star,
        votecount:votecount,
        price:price,
        startDate: startDate,
        endDate: endDate,
        noOfGuests: noOfGuests,
        distanceFromDowntown:data.distance 
      }
    })

  }

  return (
    <div 
    onClick={visitHotel}
    className=' active:scale-105 data-card flex-col md:flex md:flex-row md:items-center py-5 px-3 border-b cursor-pointer hover:opacity-80 hover:shadow-lg  transition duration-200 ease-out first:border-t'>
      <div className="relative h-[250px] md:h-52 md:w-72 flex-grow md:flex-grow-0 md:flex-shrink-0  ">
        
        <img src={img} layout="fill" objectFit="cover"  className='rounded-2xl cart-img' loading="lazy" />
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
             <p className='py-1 px-2  border-2 border-gray-200 rounded-md w-auto flex-grow-0 text-xs mt-2 active:scale-105 transition duration-150 ease-out'>{votecount} reviews</p>
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
