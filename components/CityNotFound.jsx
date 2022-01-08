import Link from 'next/link'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from 'next/head'
import React from 'react';

export default function CityNotFound() {
  return (
      <React.Fragment>
       <Head>
          <title>City Not Found</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <link rel="icon" href="/airbnb.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content='#FFFFFF'></meta>
      </Head>
      <Header />
      <div className='bg-white flex justify-center items-center' style={{height:"500px"}}>
                 <div className='flex justify-center items-center flex-col'>
                       <h1 className='font-semibold text-red-500' style={{fontSize:"150px"}}>404</h1>
                       <h1 className='font-semibold text-gray-700' style={{fontSize:"37px", marginTop:"-55px"}}>City Not Found</h1>
                       <Link href='/' className='text-blue-900 underline' style={{fontSize:"30px"}}>Go back to Home</Link>
                 </div>
      </div>
      <Footer />
  </React.Fragment>
  )
}