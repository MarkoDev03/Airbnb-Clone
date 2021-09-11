import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
;

function search({ searchResults }) {

    const router = useRouter()
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMM yy")
    const formattedEndDate= format(new Date(endDate), "dd MMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`;
        
    return (
        <div>
            <Header placeholder={`${location} | ${range} `} />
            <main className=' grid grid-cols-1 xl:grid-cols-2'>
               <section className='flex-grow pt-14 md:px-6'>
                   <p className='pl-2 text-xs'>300+ stays for - {range} - {noOfGuests} guests</p>
                   <h1 className='pl-2 text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                   <div className='hidden md:inline-flex mb-5 text-gray-800 space-x-3 whitespace-nowrap'>
                       <p className='button'>Cancellation Flexibility</p>
                       <p className='button'>Type of Place</p>
                       <p className='button'>Price</p>
                       <p className='button'>Rooms and Beds</p>
                       <p className='button'>Stars</p>
                       <p className='button'>More filters</p>
                   </div>
                  <div className="flex flex-col">
                  {searchResults.map(({img, location, title, description, star, price, total}) => (
                       <InfoCard  
                           key={img}
                           img={img}
                           location={location}
                           title={title}
                           description={description}
                           star={star}
                           price={price}
                           total={total}
                       />
                   ))}
                  </div>
               </section>
               <section className='hidden xl:inline-flex '>
                    <Map />
               </section>
            </main>
            <Footer />
        </div>
    )
}

export default search

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(
        (response) => response.json()
    )
    return {
        props: {
                searchResults,
        },
    }
}
