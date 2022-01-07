import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import LargeCard from "../components/LargeCard";
import LastCard from "../components/LastCard";
import React, { useEffect } from "react";
import TwoCards from "../components/TwoCards";


export default function Home({ exploreData, cardsData }) {

  var dataDwn = [
    {
       img:"https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720", 
       title:"Experiences",
       desc:"Find unforgettable activities nearby."
    },
    {
      img:"https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=720", 
      title:"Online experiences"
      ,desc:"Live interactive activities led by the hosts."
    },
    {
      img:"https://a0.muscache.com/im/pictures/f51f70fb-93b7-4974-86e8-1195b64f1353.jpg?im_w=720", 
      title:"Olympians and Paralympians",
      desc:"Online activities organized by athletes."
    },
  ]

useEffect(() => {
 setTimeout(() => {
  if ( "serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(registration =>{
       console.log("SW Registred");
      console.log(registration);
    }).catch(error => {
      console.log("SW Regstration failed");
       console.log(error);
   })
}
 }, 2000);
}, [])

  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/airbnb.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content='#000000'></meta>
      </Head>

      <Header></Header>
      <Banner src="https://links.papareact.com/0fm"></Banner>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-xl md:text-4xl font-semibold pb-0 md:pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section className="pt-6">
            <h2 className="text-xl md:text-4xl font-semibold py-0 md:py-7">Live anywhere</h2>
        
        <Swiper  freeMode={true}
        className='md:px-20'
        slidesPerView={1.1}
        spaceBetween={0}
       breakpoints={{
        "640": {"slidesPerView": 1.1,"spaceBetween": 10},
        "768": {"slidesPerView":2.1,"spaceBetween": 10},
        "1024": {"slidesPerView": 3.15,"spaceBetween": 10},
        "1920": {"slidesPerView": 3.15,"spaceBetween": 10},
        "2048": {"slidesPerView": 3.15,"spaceBetween": 10},
        "2160": {"slidesPerView": 3.15,"spaceBetween": 10},
        "3840": {"slidesPerView": 3.15,"spaceBetween": 10},
      }} 
        >
         {cardsData?.map(({img, title}) => (
             <SwiperSlide className="mb-3 first:ml-2">
               <MediumCard 
                key={img}
                img={img}
                title={title}
             />
             </SwiperSlide>
          ))}
          </Swiper>
       
        </section>

       <TwoCards />

      <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlist curated by Airbnb.'
          buttonText='Get Inspired'
      />


<section className=" mb-8">
            <h2 className="text-xl md:text-4xl font-semibold py-0 md:py-7">Discover activities</h2>
        
        <Swiper  className=" " freeMode={true}
        slidesPerView={1}
        spaceBetween={0}
       breakpoints={{
        "640": {"slidesPerView": 1,"spaceBetween": 10},
        "768": {"slidesPerView":1.6,"spaceBetween": 10},
        "1024": {"slidesPerView": 2.8,"spaceBetween": 0},
        "1920": {"slidesPerView": 2.8,"spaceBetween": 0},
        "2048": {"slidesPerView": 2.8,"spaceBetween": 0},
        "2160": {"slidesPerView": 2.8,"spaceBetween": 0},
        "3840": {"slidesPerView": 2.8,"spaceBetween": 0},
      }} 
        >
         {dataDwn?.map((item) => (
             <SwiperSlide className="mb-3 m-2">
               <LastCard 
                key={item.img}
                img={item.img}
                title={item.title}
                description={item.desc}
             />
             </SwiperSlide>
          ))}
          </Swiper>
       
        </section>

      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {

  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch('https://links.papareact.com/zp1').then(
    (res) => res.json()
  )

  return {
    props: {
      exploreData,
      cardsData
    },
  };

}
