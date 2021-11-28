import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import axios from "axios";
import { useState, useLayoutEffect } from "react";

function search() {

    const router = useRouter()
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMM yy")
    const formattedEndDate= format(new Date(endDate), "dd MMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    const [hotels, setHotels] = useState([])
    const [placeHolder, setPlaceHolder] = useState("");

    useLayoutEffect(() => {
    const getWeatherData = async () => {
        try {
          
            const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
              params: { q:location },
              headers: {
                'x-rapidapi-key':'9ba6490420msh35e083a18335c5cp17dac9jsn87d5b3c7254d',
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
              },
            });

             setLat(data.list[0].coord.lat)
             setLon(data.list[0].coord.lon)

             const options = {
                method: 'GET',
                url: 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng',
                params: {
                  latitude: data.list[0].coord.lat,
                  longitude: data.list[0].coord.lon,
                  lang: 'en_US',
                  hotel_class: '1,2,3',
                  limit: '80',
                  adults: '1',
                  rooms: '1',
                  child_rm_ages: '7,10',
                  currency: 'USD',
                  zff: '4,6',
                  subcategory: 'hotel,bb,specialty',
                  nights: '2'
                },
                headers: {
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                  'x-rapidapi-key': '9ba6490420msh35e083a18335c5cp17dac9jsn87d5b3c7254d'
                }
              };
              
              axios.request(options).then(function (response) {

                  var a = []
                  response.data.data.forEach(item => {
                      if (item.photo != undefined) {
                            a.push(item)
                      }
                  });

                  setHotels(a)
            
              }).catch(function (error) {
                  console.error(error);
              });
                 
            return data;
          
        } catch (error) {
          console.log(error);
        }
      };

      getWeatherData()

      setPlaceHolder(window.innerWidth > 900 ? location + " |  " + range + " | " +  noOfGuests + " guests" : location)
      
}, [location])

    return (
        <div style={{overflowX:'none'}}>
            <Header placeholder={placeHolder} />
           
            <main className='flex flex-col-reverse md:flex-none md:grid md:grid-cols-1 xl:grid-cols-2 search-component'>
               <section className='flex-grow pt-4 md:px-6 sm:rounded-t-lg ' id='container1'>
                   <p className='pl-2 text-base'>300+ stays for - {range} - {noOfGuests} guests</p>
                   <h1 className='pl-2 text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                   <div className='overflow-auto px-2 md:px-0 pb-2 flex mb-5 text-gray-800 space-x-3 whitespace-nowrap'>
                       <p className='button'>Cancellation Flexibility</p>
                       <p className='button'>Type of Place</p>
                       <p className='button'>Price</p>
                       <p className='button'>Rooms and Beds</p>
                       <p className='button'>Stars</p>
                       <p className='button'>More filters</p>
                   </div>
                  <div className="flex flex-col xl:max-h-[800px] overflow-y-auto" >
                  {hotels.map((hotel) => (
                       <InfoCard  
                           key={hotel.photo.images.large.url != undefined  ? hotel.photo.images.large.url : ""}
                           img={hotel.photo.images.large.url != undefined ? hotel.photo.images.large.url : ""}
                           location={hotel.ranking}
                           title={hotel.name}
                           description={hotel.hotel_class_attribution}
                           star={hotel.rating}
                           price={hotel.price}
                           total={hotel.price}
                           votecount={hotel.num_reviews}
                           range={range}
                           distance={Math.round(hotel.distance, 1)}
                       />
                   ))}
                  </div>
               </section>
               <section className='h-[380px] xl:h-[1000px]' id='container2'>
                    <Map  lat={lat} lon={lon} hotels={hotels} />
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

