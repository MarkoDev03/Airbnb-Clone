import React from 'react'
import axios from "axios"
import Header from '../components/Header'
import Image from "next/image";
import Head from 'next/head'
import Rating from '@material-ui/lab/Rating';
import CardReserve from '../components/CardReserve';
import { BsInfoCircle, BsLink, BsPencil, BsBuilding, BsBarChart, BsClock, BsCardText } from "react-icons/bs";
import Map from '../components/Map';
import { format } from 'date-fns'
import Footer from '../components/Footer';
import {  StarIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { HiLocationMarker } from "react-icons/hi";
import { createContext } from 'react';
import Comments from '../components/Comments';
import HotelItem from '../components/HotelItem';
import HotelHeading from '../components/HotelHeading';
import Rank from '../components/Rank';
import RatingComponent from '../components/RatingComponent';
import Amenities from '../components/Amenities';

export const CommentsAPI = createContext(null)

function hotel({ name, latitude, longitude, rating, votecount, price, startTime, endTime, noOfGuests, ratings, address, phone, hotels, amenities, image, avatar, comments, rankingPosition, rankingPosition2, ranking_description, web_url, write_review, website, hotel_class_attribution, category_name, isClosed, distance_km, hotel_description, ranking }) {

    let items = [
        {
            title: "Hotel description",
            value: hotel_description,
            icon: <BsInfoCircle className="h-7 w-7 mr-2" style={{color:"#d70466", fill:"#d70466"}} />,
            isLink: false
        },
        {
            title: "Distance from downtown",
            value: distance_km,
            icon: <HiLocationMarker className="h-7 w-7 mr-2" style={{color:"#d70466", fill:"#d70466"}} />,
            isLink: false
        },
        {
            title:"Working",
            value: isClosed,
            icon: <BsClock className="h-7 w-7 mr-2" style={{color:"#d70466", fill:"#d70466"}} />,
            isLink: false
        },
        {
            title: "Category",
            value: category_name,
            icon: <BsBuilding className="h-7 w-7 mr-2" style={{color:"#d70466", fill:"#d70466"}} />,
            isLink: false
        },
        {
            title: "Ranking description",
            value: ranking_description,
            icon: <BsCardText className="h-7 w-7 mr-2" style={{color:"#d70466", fill:"#d70466"}} />,
            isLink: false
        },
        {
            title: "Hotel class attribution",
            value: hotel_class_attribution,
            icon: <BsBarChart className="h-7 w-7 mr-2" style={{color:"#d70466", fill:"#d70466"}} />,
            isLink: false
        },
        {
          title: "Website",
          value: website,
          icon: <BsLink className="h-7 w-7 mr-2" style={{color:"#d70466", fill:"#d70466"}} />,
          isLink: true
        },
        {
          title: "Write review",
          value: write_review,
          icon: <BsPencil className="h-7 w-7 mr-2" style={{color:"#d70466", fill:"#d70466"}} />,
          isLink: true
        },
        {
          title: "Web url - Trip Advisor",
          value: web_url,
          icon: <BsPencil className="h-7 w-7 mr-2" style={{color:"#d70466", fill:"#d70466"}} />,
          isLink: true
        }
    ];

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
            <HotelHeading votecount={votecount} name={name} ranking={ranking} rating={rating} />
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] min-w-[300px] px-2 image-banner mx-2">
           {image && (
                <Image 
                    src={image}
                    objectFit='cover'
                    layout='fill'
                    className="rounded-2xl"
                />
            )}
             </div>
             <div className="flex justify-between items-start  py-0 pb-3 lg:py-3 px-2 flex-col lg:flex-row" style={{width:"100%"}}>

                  <div className="flex justify-start items-center desc-width lg:px-2 py-2 mr-2 flex-col" style={{height:"fit-content"}}>       
                      <div className="flex justify-start items-center border-b-2 border-gray-200 px-2 py-2" style={{height:"fit-content", width:"100%"}}>
                      {avatar && (
                                <img src={avatar} alt="" className='w-[80px] h-[80px] rounded-full mr-2' />
                             )}
                      <div className='flex justify-start items-start flex-col pl-2'>
                          <h1 className='text-xl font-semibold'>{address}</h1>
                           <h3 className='text-gray-500'>{phone}</h3>       
                      </div>
                      </div>
                 
                   {items && (
                         items.map((item) => (           
                            <HotelItem item={item} />           
                         ))
                     )} 
                  </div>
                  <CardReserve rating={rating} price={price} votecount={votecount} className='flex-grow' start={startTime} end={endTime}  noOfGuests={noOfGuests} />
             </div>
             {amenities.length > 0 ? (
                     <Amenities amenities={amenities} />
              ) : ""}

             <div className='flex justify-start items-start flex-col border-t-2 border-gray-200 py-2 pt-5 my-2 px-2' style={{width:"100%"}}>
              <div className='flex justify-start items-center my-2' style={{width:"100%"}}>
                  <StarIcon className="h-7 w-7" style={{color:"#d70466", fill:"#d70466"}} />
                  <span className='text-xl font-semibold'>{rating}</span>
                  <span className='ml-1 text-gray-700 text-xl'>{votecount} reviews</span>
              </div>
             
          
              <div  className='grid grid-cols-1 lg:grid-cols-2' style={{width:"100%"}}>
              {rankingPosition && (
                  <div className='col-span-1 flex flex-col items-start justify-start  ml-2 py-3'>
                       {
                           rankingPosition.map((rank) => (
                               <Rank rank={rank} />  
                           ))
                       }
                  </div>
                  )}
                {
                  rankingPosition2 && (
                  <div className='col-span-1 flex flex-col items-start justify-start py-3'>
                       {rankingPosition2.map((rank) => (
                          <Rank rank={rank} />
                       ))}
                  </div>
                )}
              </div>

              <div className='flex flex-col items-start justify-start my-4 px-2'  style={{width:"100%"}}>
                <h1 className='text-xl font-semibold'>Rating</h1>

               <div className='flex justify-start items-center flex-col lg:flex-row'  style={{width:"100%"}}>
                  <div className='flex justify-start items-start flex-col stars'>
                  {ratings.length > 0 && (
                        ratings.map((ratingItem) => (
                           <RatingComponent ratingItem={ratingItem} />
                        ))
                    )}
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
                {comments && (
                  <CommentsAPI.Provider value={comments}>
                      <Comments />
                 </CommentsAPI.Provider>     
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

export async function getServerSideProps({ query })  {

    let location_id = query.location_id;
    let longitude = query.longitude;
    let latitude = query.latitude;
    let name = query.name;
    let ranking = query.ranking;
    let rating = query.rating;
    let votecount = query.votecount;
    let price = query.price;
    let startDate = query.startDate;
    let endDate = query.endDate;
    let noOfGuests = query.noOfGuests;
    let distanceFromDowntown = query.distanceFromDowntown;

    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/get-details',
        params: {
          location_id: location_id  
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': '2f3da6e1f8msh0e218d3c91c9bfep1c2e3ajsnfa590390a0c4'
        }
      };

      let response = await axios.get('https://travel-advisor.p.rapidapi.com/hotels/get-details', options)
        
      let image = response.data.data[0].photo.images.large.url;
      let avatar = response.data.data[0].photo.images.thumbnail.url;
      let amenities = response.data.data[0].amenities ? response.data.data[0].amenities : [];

      var rankingPos1 = [
              {
                  value: response.data.data[0].ranking_position ?  response.data.data[0].ranking_position : 0, 
                  name:" Ranking position"
                },
              {
                  value: response.data.data[0].rating ? response.data.data[0].rating : 0, 
                  name:"Rating"
                },
              {
                  value: response.data.data[0].hotel_class ?  response.data.data[0].hotel_class : 0, 
                  name:"Hotel class"
              },
             
        ];

          let maxValue = Number(response.data.data[0].rating_histogram.count_1) + 
          Number(response.data.data[0].rating_histogram.count_2) + 
          Number(response.data.data[0].rating_histogram.count_3) + 
          Number(response.data.data[0].rating_histogram.count_4) + 
          Number(response.data.data[0].rating_histogram.count_5);

          var ratings = 
          [
              {
                  name:"5",
                  value:+response.data.data[0].rating_histogram.count_5,
                  avg: isNaN(((Number(response.data.data[0].rating_histogram.count_5) /  maxValue) * 100).toFixed(0)) ? 0 : ((Number(response.data.data[0].rating_histogram.count_5) /  maxValue) * 100).toFixed(0),
                  max:maxValue
              },
              {
                name:"4",
                value:+response.data.data[0].rating_histogram.count_4,
                avg: isNaN(((Number(response.data.data[0].rating_histogram.count_4) /  maxValue) * 100).toFixed(0)) ? 0 : ((Number(response.data.data[0].rating_histogram.count_4) /  maxValue) * 100).toFixed(0),
                max:maxValue
            },
            {
                name:"3",
                value:+response.data.data[0].rating_histogram.count_3,
                avg: isNaN(((Number(response.data.data[0].rating_histogram.count_3) /  maxValue) * 100).toFixed(0)) ? 0 : ((Number(response.data.data[0].rating_histogram.count_3) /  maxValue) * 100).toFixed(0),
                max:maxValue
            },
            {
                name:"2",
                value:+response.data.data[0].rating_histogram.count_2,
                avg: isNaN(((Number(response.data.data[0].rating_histogram.count_2) /  maxValue) * 100).toFixed(0)) ? 0 : ((Number(response.data.data[0].rating_histogram.count_2) /  maxValue) * 100).toFixed(0),
                max:maxValue
            },
            {
                name:"1",
                value:+response.data.data[0].rating_histogram.count_1,
                avg: isNaN(((Number(response.data.data[0].rating_histogram.count_1) /  maxValue) * 100).toFixed(0)) ? 0 : ((Number(response.data.data[0].rating_histogram.count_1) /  maxValue) * 100).toFixed(0),
                max:maxValue
            },
          ];
        
          let dateend = new Date(endDate)
          const formattedEndDate = format(new Date(dateend), "dd MMM yyyy")

          let date = new Date(startDate)
          const formattedStartDate = format(new Date(date), "dd MMM yyyy")

          let startTime = formattedStartDate;
          let endTime = formattedEndDate;

          var rankingPos2 = [
            {
                value: response.data.data[0].guide_count ? response.data.data[0].guide_count : 0, 
                name:"Guide count"
            },
            {
                value: response.data.data[0].photo_count ? response.data.data[0].photo_count : 0, 
                name:"Photo count"
            },
            {
                value: response.data.data[0].ranking_denominator ? response.data.data[0].ranking_denominator : 0, 
                name:" Ranking denominator"
            }
          ];
          
        let rankingPosition = rankingPos1;
        let rankingPosition2 = rankingPos2; 

        let comments = response.data.data[0].room_tips ? response.data.data[0].room_tips : [];

          var hotels = [];
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
          };

          hotels.push(hotel)

          let ranking_description = response.data.data[0].ranking ? response.data.data[0].ranking : "";
          let web_url = response.data.data[0].web_url ? response.data.data[0].web_url : "";
          let write_review = response.data.data[0].write_review ? response.data.data[0].write_review : "";
          let website = response.data.data[0].website ? response.data.data[0].website : "";
          let hotel_class_attribution = response.data.data[0].hotel_class_attribution ? response.data.data[0].hotel_class_attribution : "";
          let category_name = response.data.data[0].category.name ? response.data.data[0].category.name : "";
          let isClosed = response.data.data[0].is_closed ? "Closed" : "Open";
          let distance_km = parseFloat(distanceFromDowntown * 1.609344).toFixed(3) + "km";
          let hotel_description = response.data.data[0].description ? response.data.data[0].description : "";

         let address = response.data.data[0].address ? response.data.data[0].address : "";
         let phone = response.data.data[0].phone ?  response.data.data[0].phone : "";
        
          return {
              props: {
                name, 
                latitude, 
                longitude, 
                rating, 
                votecount, 
                price, 
                startTime, 
                endTime, 
                noOfGuests, 
                ratings,
                address,
                phone,
                hotels,
                amenities,
                image,
                avatar,
                comments,
                rankingPosition,
                rankingPosition2,
                ranking_description, 
                web_url, 
                write_review, 
                website, 
                hotel_class_attribution, 
                category_name, 
                isClosed, 
                distance_km, 
                hotel_description,
                ranking
              }
          }
}