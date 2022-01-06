import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import axios from "axios";
import Head from 'next/head'
import $ from "jquery"
import { useState, useEffect } from "react";

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
    const [list, setList] = useState([]);

    useEffect(() => {
    const getWeatherData = async () => {
        try {

            const  { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=5b0b77f30d7a29f9e84f4b5bde0b8708`);

             setLat(data.coord.lat)
             setLon(data.coord.lon)

             let lat = data.coord.lat
             let lon = data.coord.lon
             const localPlaces = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
                params: { lat, lon },
                headers: {
                   'x-rapidapi-key': "9ba6490420msh35e083a18335c5cp17dac9jsn87d5b3c7254d",
                   'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                },
            })

            //2f3da6e1f8msh0e218d3c91c9bfep1c2e3ajsnfa590390a0c4
            //98a2512d5cmsh99bf0098efeb84dp16ab63jsn48c57a347928
            //7f4fd1a717msh403ad75a852159dp1ea7e8jsn2736aeb92d7b
            //c8c1d01a2emsh7b5c3a45fdce500p13cb2bjsne7743f13805d --429
            //a35aa7cb0amsh1ffdef678fb532bp16138bjsn550b1dccc052

            //dea56d0affmshbd2be03d197e2fdp1100ecjsn197827d81e5f -- 429 bandwidth
            if (localPlaces.data.list.length > 0) {
            const places1 = await axios.get('https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng', {
            params: {latitude: localPlaces.data.list[0].coord.lat, longitude:localPlaces.data.list[0].coord.lon},
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '2f3da6e1f8msh0e218d3c91c9bfep1c2e3ajsnfa590390a0c4'
            }
            })

            const places2 = await axios.get('https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng', {
                params: {latitude: localPlaces.data.list[1].coord.lat, longitude:localPlaces.data.list[1].coord.lon},
                headers: {
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                  'x-rapidapi-key': '98a2512d5cmsh99bf0098efeb84dp16ab63jsn48c57a347928'
                }
            })

            const places3 = await axios.get('https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng', {
                params: {latitude: localPlaces.data.list[2].coord.lat, longitude:localPlaces.data.list[2].coord.lon},
                headers: {
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                  'x-rapidapi-key': '7f4fd1a717msh403ad75a852159dp1ea7e8jsn2736aeb92d7b'
                }
            })

            const places4 = await axios.get('https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng', {
                params: {latitude: localPlaces.data.list[3].coord.lat, longitude:localPlaces.data.list[3].coord.lon},
                headers: {
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                  'x-rapidapi-key': 'a35aa7cb0amsh1ffdef678fb532bp16138bjsn550b1dccc052'
                }
            })

            const places5 = await axios.get('https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng', {
                params: {latitude: localPlaces.data.list[4].coord.lat, longitude:localPlaces.data.list[4].coord.lon},
                headers: {
                  'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                  'x-rapidapi-key': 'a35aa7cb0amsh1ffdef678fb532bp16138bjsn550b1dccc052'
                }
            })

            let results = [
                ...places1.data.data,
                ...places2.data.data,
                ...places3.data.data,
                ...places4.data.data,
                ...places5.data.data,
            ]

            results = results.filter(
                (thing, index, self) =>
                  index ===
                  self.findIndex(
                    (t) => t.name === thing.name
                  )
              );

              let selected = []

              results.forEach((hotel) => {
                  if (hotel.photo !== undefined) {
                      selected.push(hotel)
                  }
              })


              setHotels(selected)
              console.log(selected)
            }
     

        } catch (error) {
          console.log(error);
        }
      };

      const getHotels =  (itemInList) => {      
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=${itemInList.coord.lat}&longitude=${itemInList.coord.lon}`,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key": "a35aa7cb0amsh1ffdef678fb532bp16138bjsn550b1dccc052"
            }
        };
        
        $.ajax(settings).done(function (response) {
            let data = response.data.filter((item) => {
                return item.photo !== undefined
            })
            setHotels(data)
        });
 }

      getWeatherData()

      setPlaceHolder(window.innerWidth > 900 ? location + " |  " + range + " | " +  noOfGuests + " guests" : location)

}, [location])



    return (
        <div>
            <Head>
        <title>Airbnb</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/airbnb.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content='#000000'></meta>
      </Head>
            <Header placeholder={placeHolder} />

            <main className='flex flex-col-reverse md:flex-none md:grid md:grid-cols-1 xl:grid-cols-2 search-component'>
               <section className='flex-grow pt-4 md:px-6 sm:rounded-t-lg ' id='container1'>
                   <p className='pl-2 text-base'>{hotels.length} stays for - {range} - {noOfGuests} guests</p>
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
                           data={hotel}
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
                           startDate={startDate}
                           endDate={endDate}
                           noOfGuests={noOfGuests}
                       />
                   ))}
                  </div>
               </section>
               <section className='h-[450px] xl:h-[1000px]' id='container2'>
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

