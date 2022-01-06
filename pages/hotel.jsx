import React, { useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import axios from "axios"
import Header from '../components/Header'
import Image from "next/image";
import { useLayoutEffect } from 'react'
import Head from 'next/head'
import Rating from '@material-ui/lab/Rating';
import CardReserve from '../components/CardReserve';
import { BsInfoCircle, BsLink, BsPencil, BsCheck, BsCheckAll } from "react-icons/bs";
import Map from '../components/Map';
import { format } from 'date-fns'
import Footer from '../components/Footer';
import {  StarIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { HiLocationMarker } from "react-icons/hi";

function hotel() {
    const router = useRouter()
    const { location_id, name, latitude, longitude, ranking, rating, votecount, price, startDate, endDate, noOfGuests, distanceFromDowntown } = router.query;
    const [image, setImage] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [amenities, setAmenities] = useState(null)
    const [description, setDescription] = useState("")
    const [website, setWebsite] = useState("")
    const [write_review, setWrite_review] = useState("")
    const [hotels, setHotels] = useState([])
    const [rankingPosition, setRankingPosition] = useState(null)
    const [rankingPosition2, setRankingPosition2] = useState(null)
    const [comments, setComments] = useState([])
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")

    const [maxrate, setMaxRate] = useState(0)
    const [ratings, setRatings] = useState([])

    useLayoutEffect(() => {
        
       const getHotelData = () => {
        const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/hotels/get-details',
            params: {
              location_id: location_id  
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'a35aa7cb0amsh1ffdef678fb532bp16138bjsn550b1dccc052'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data.data[0]);
              //images
              setImage(response.data.data[0].photo.images.large.url)
              setAvatar(response.data.data[0].photo.images.thumbnail.url)

              //amenities
              setAmenities(response.data.data[0].amenities)
              setDescription(response.data.data[0].description)
              setWebsite(response.data.data[0].website)
              setWrite_review(response.data.data[0].write_review)

              var rankingPos1 = [
                  {value:response.data.data[0].ranking_position, name:" Ranking position"},
                  { value:response.data.data[0].rating, name:"Rating"},
                  {value: response.data.data[0].hotel_class, name:"Hotel class"},
                 
              ]

              setMaxRate(
                  +response.data.data[0].rating_histogram.count_1 + 
                  +response.data.data[0].rating_histogram.count_2 + 
                  +response.data.data[0].rating_histogram.count_3 + 
                  +response.data.data[0].rating_histogram.count_4 + 
                  +response.data.data[0].rating_histogram.count_5
              )

              let maxValue =  +response.data.data[0].rating_histogram.count_1 + 
              +response.data.data[0].rating_histogram.count_2 + 
              +response.data.data[0].rating_histogram.count_3 + 
              +response.data.data[0].rating_histogram.count_4 + 
              +response.data.data[0].rating_histogram.count_5;

              var ratingsList = 
              [
                  {
                      name:"5",
                      value:+response.data.data[0].rating_histogram.count_5,
                      avg:((+response.data.data[0].rating_histogram.count_5 /  maxValue) * 100).toFixed(0),
                      max:maxValue
                  },
                  {
                    name:"4",
                    value:+response.data.data[0].rating_histogram.count_4,
                    avg:((+response.data.data[0].rating_histogram.count_4 /  maxValue) * 100).toFixed(0),
                    max:maxValue
                },
                {
                    name:"3",
                    value:+response.data.data[0].rating_histogram.count_3,
                    avg:((+response.data.data[0].rating_histogram.count_3 /  maxValue) * 100).toFixed(0),
                    max:maxValue
                },
                {
                    name:"2",
                    value:+response.data.data[0].rating_histogram.count_2,
                    avg:((+response.data.data[0].rating_histogram.count_2 /  maxValue) * 100).toFixed(0),
                    max:maxValue
                },
                {
                    name:"1",
                    value:+response.data.data[0].rating_histogram.count_1,
                    avg:((+response.data.data[0].rating_histogram.count_1 /  maxValue) * 100).toFixed(0),
                    max:maxValue
                },
              ]

              setRatings(ratingsList)

            
              let dateend = new Date(endDate)
              const formattedEndDate = format(new Date(dateend), "dd MMM yyyy")

              let date = new Date(startDate)
              const formattedStartDate = format(new Date(date), "dd MMM yyyy")

              setStartTime(formattedStartDate)
              setEndTime(formattedEndDate)


              var rankingPos2 = [
                {value: response.data.data[0].guide_count, name:"Guide count"},
               { value:  response.data.data[0].photo_count, name:"Photo count"},
                {value: response.data.data[0].ranking_denominator, name:" Ranking denominator"}
              ]
              
              setRankingPosition(rankingPos1)
              setRankingPosition2(rankingPos2)

             setComments(response.data.data[0].room_tips)

              var hotelsBlank = []
              var hotel = {
                  longitude:longitude,
                  latitude:latitude,
                  name:name,
                  rating:rating, 
                  ranking:ranking,
                  price:price,
                  photo: {
                      images: {
                          large: {
                              url: response.data.data[0].photo.images.original.url
                          }
                      }
                  },

              }

              hotelsBlank.push(hotel)
              setHotels(hotelsBlank)

              //contact
              setAddress(response.data.data[0].address)
              setPhone(response.data.data[0].phone)
              
          }).catch(function (error) {
              console.error(error);
          });
       }

       getHotelData()

    }, [location_id]);


    return (
        <div>
        <Head>
        <title>{name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/airbnb.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content='#FFFFFF'></meta>
      </Head>
            <Header />
            <article className='max-w-7xl py-3 flex flex-col justify-start mx-auto'>
           <div className='w-100 flex justify-between align-middle py-2 px-2'>
               <div>
                   <h1 className='font-semibold text-xl'>{name}</h1>
                   <h3 className='text-gray-600'>{ranking}</h3>
              </div>
               <div className='flex justify-end flex-col items-end'>
                     <p className='text-gray-500'>{votecount} reviews &nbsp;</p>
                     <Rating name="read-only" value={Number(rating)} readOnly size='small' />
               </div>
           </div>
            <div className="relative h-96 min-w-[300px] px-2 image-banner mx-2">
           {
               image && (
                <Image 
                src={image}
                objectFit='cover'
                layout='fill'
                className="rounded-2xl"
             />
               )
           }
             </div>
             <div className="flex justify-between items-start  py-0 pb-3 lg:py-3 px-2 flex-col lg:flex-row" style={{width:"100%"}}>

                  <div className="flex justify-start items-center desc-width lg:px-2 py-2 mr-2 flex-col" style={{height:"fit-content"}}>       
                      <div className="flex justify-start items-center border-b-2 border-gray-200 px-2 py-2" style={{height:"fit-content", width:"100%"}}>
                      {
                             avatar && (
                                <img src={avatar} alt="" className='w-[80px] h-[80px] rounded-full shadow-md  border-2 mr-2' />
                             )
                         }
                      <div className='flex justify-start items-start flex-col pl-2'>
                          <h1 className='text-xl font-semibold'>{address}</h1>
                           <h3 className='text-gray-500'>{phone}</h3>       
                      </div>
                      </div>
                  
                  <div className='className="flex justify-start items-center px-2 py-2 mr-2' style={{width:"100%"}}>
                     <div className='flex items-center justify-start'>
                        <BsInfoCircle className="h-7 w-7 mr-2" style={{color:"#FE595E", fill:"#FE595E"}} />
                         <h1 className='text-xl font-semibold'>Hotel description</h1>
                     </div>
                    {
                        description && (
                            <span className='text-gray-500 break-all w-full'>{description}</span>
                        )
                    }
                  </div>

                  <div className='className="flex justify-start items-center px-2 py-2 mr-2 mt-1' style={{width:"100%"}}>
                     <div className='flex items-center justify-start'>
                        <BsLink className="h-7 w-7 mr-2" style={{color:"#FE595E", fill:"#FE595E"}} />
                         <h1 className='text-xl font-semibold'>Website</h1>
                     </div>
                    {
                        website && (
                            <a href={website} target="_blank" className='text-blue-500'>{website}</a>
                        )
                    }
                  </div>

                  
                  <div className='className="flex justify-start items-center px-2 py-2 mr-2 mt-1' style={{width:"100%"}}>
                     <div className='flex items-center justify-start'>
                        <BsPencil className="h-7 w-7 mr-2" style={{color:"#FE595E", fill:"#FE595E"}} />
                         <h1 className='text-xl font-semibold'>Write review</h1>
                     </div>
                    {
                        write_review && (
                            <a href={write_review} target="_blank" className='text-blue-500'>{write_review}</a>
                        )
                    }
                  </div>

                  <div className='className="flex justify-start items-center px-2 py-2 mr-2 mt-1' style={{width:"100%"}}>
                     <div className='flex items-center justify-start'>
                        <HiLocationMarker className="h-7 w-7 mr-2" style={{color:"#FE595E", fill:"#FE595E"}} />
                         <h1 className='text-xl font-semibold'>Distance from downtown</h1>
                     </div>
                   <span className='text-gray-500'>{parseFloat(distanceFromDowntown * 1.609344).toFixed(3)} km</span>
                  </div>

                  <div className='className="flex justify-start items-center px-2 py-2 mr-2 mt-1' style={{width:"100%"}}>
                     <div className='flex items-center justify-start'>
                        <BsCheckAll className="h-7 w-7 mr-2" style={{color:"#FE595E", fill:"#FE595E"}} />
                         <h1 className='text-xl font-semibold'>Amenities</h1>
                     </div>
                    {
                        amenities && (
                          <div className='relative'>
                             {
                                 amenities.map((amenitie) => (
                                    <div className='flex items-center justify-start ml-3 amenitie' style={{width:"fit-content"}}>
                                    <BsCheck className="h-5 w-5 mr-2" style={{color:"#FE595E", fill:"#FE595E"}} />
                                     <span className='text-gray-500 font-semibold'>{amenitie.name}</span>
                                 </div>      
                                 ))
                             }

                          </div>
                        )
                    }
                    <div style={{width:"100%"}} className='py-3'>     
                    </div>
                  </div>


                  </div>

                  <CardReserve rating={rating} price={price} votecount={votecount} className='flex-grow' start={startTime} end={endTime}  noOfGuests={noOfGuests} />

             </div>




             <div className='flex justify-start items-start flex-col border-t-2 border-gray-200 py-2 pt-5 my-2 px-2' style={{width:"100%"}}>
              <div className='flex justify-start items-center my-2' style={{width:"100%"}}>
                  <StarIcon className="h-7 w-7" style={{color:"#FE595E", fill:"#FE595E"}} />
                  <span className='text-xl font-semibold'>{rating}</span>
                  <span className='ml-1 text-gray-700 text-xl'>{comments.length} reviews</span>
              </div>
             
          
              <div  className='grid grid-cols-1 lg:grid-cols-2' style={{width:"100%"}}>
              {
                  rankingPosition && (
                  <div className='col-span-1 flex flex-col items-start justify-start  ml-2 py-3'>
                       {
                           rankingPosition.map((rank) => (
                            <div  className='flex justify-around items-center my-2'  style={{width:"100%"}}>
                               <h1 className='text-gray-900 text-lg'style={{width:"45%"}}>{rank.name}</h1>
                               <div className='flex justify-start items-center'  style={{width:"55%"}}>
                                   <div className='w-[150px] h-[5px] bg-black rounded-full mx-1'></div>
                                   <span className='text-gray-500 font-semibold'>{rank.value}</span>
                               </div>
                        </div>
                           ))
                       }
                  </div>
                  )}
                   {
                  rankingPosition2 && (
                  <div className='col-span-1 flex flex-col items-start justify-start py-3'>
                       {rankingPosition2.map((rank) => (
                             <div  className='flex justify-around items-center my-2'  style={{width:"100%"}}>
                             <h1 className='text-gray-900 text-lg'style={{width:"45%"}}>{rank.name}</h1>
                             <div className='flex justify-start items-center'  style={{width:"55%"}}>
                                 <div className='w-[150px] h-[5px] bg-black rounded-full mx-1'></div>
                                 <span className='text-gray-500 font-semibold'>{rank.value}</span>
                             </div>
                      </div>
                       ))}
                  </div>
                    )}
              </div>

              <div className='flex flex-col items-start justify-start my-4 px-2'  style={{width:"100%"}}>
                <h1 className='text-xl font-semibold'>Rating</h1>

               <div className='flex justify-start items-center flex-col lg:flex-row'  style={{width:"100%"}}>
                  <div className='flex justify-start items-start flex-col stars'>
                  {
                    ratings.length > 0 && (
                        ratings.map((ratingItem) => (
                            <div className='flex items-center justify-start my-2' style={{width:"100%"}}>
                            <span className='text-gray-600'>{ratingItem.name}</span>
                            <StarIcon className="h-4 w-4" style={{color:"#999999", fill:"#999999"}} />
                            <progress id="five"  value={ratingItem.value} max={ratingItem.max} className='progress'>{ratingItem.value}</progress>
                            <span>{ratingItem.avg} %</span>
                          </div>
                        ))
                    )
                }
                  </div>
                  <div className='flex justify-start items-center my-3 lg:my-0'>
                       <h1 className='text-3xl font-semibold mr-1'>{rating}</h1>
                       <div className='flex justify-end items-center flex-col'>
                       <p className='text-gray-500'>{votecount} reviews &nbsp;</p>
                          <Rating name="read-only" value={Number(rating)} readOnly size="small" />
                       </div>

                  </div>
                </div>
              </div>
                
                {comments.length > 0 && (
              <div  className='grid grid-cols-1 lg:grid-cols-2 my-2' style={{width:"100%"}}>
                  
                     {comments.map((comment) => (
                         <div className='col-span-1 flex flex-col items-start justify-start py-3 my-2 mx-1'>
                            <div className='flex justify-start items-center' style={{width:"100%"}}>
                                 <img src={comment.user.avatar.large.url} alt="" className='w-[80px] h-[80px] rounded-full mr-2' />
                                 <div className='flex justify-start items-start flex-col'>
                                       <span className='text-lg font-semibold'>{comment.user.username}</span>
                                     <div className='flex justify-start items-center'>
                                        <HiLocationMarker className="h-3 w-3 mr-1" />
                                       <span className='text-base text-gray-500'>{comment.user.user_location.name}</span>
                                     </div>
                                 </div>
                            </div>
                            <p className='text-base break-all my-1' style={{width:"80%"}}>
                                 {comment.text}
                            </p>
                            <Rating name="read-only" value={Number(comment.rating)} readOnly />
                            <span className='text-xs text-gray-500'>{format(new Date(comment.created_time), "dd MMM yyyy")}</span>
                         </div>
                    ))}            
             </div>
              )}
             </div>





                <div className='px-2'>
                <h1 className='text-xl font-semibold'>Where will you be</h1>
                <div className='rounded-lg py-3' style={{width:"100%", height:"450px"}}>
                {
                    longitude && latitude ? (
                        <Map  lat={+latitude} lon={+longitude} hotels={hotels}  classset="rounded-lg" />
                    ) : ""
                }
                </div>
                </div>
                
         
            </article>
            <Footer />
        </div>
    )
}

export default hotel
