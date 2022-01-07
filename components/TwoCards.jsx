import React from 'react'
import ImageOne from "../media/photoone.jpg"
import ImageTwo from "../media/imagetwo.jpg"

function TwoCards() {
    return (
        <div className="relative py-5 md:py-12">
        <h2 className='text-xl md:text-4xl font-semibold pb-0 md:pb-6 mt-2 md:pt-5' >Discover Airbnb adventures</h2>
        <div className="pb-3 grid grid-cols-2">
              <section className="relative py-2 cursor-pointer col-span-2 md:col-span-1 px-2">
             <img 
                 src={ImageOne.src}      
                 loading='lazy'
                 alt="asd"
                 className="rounded-2xl"
                 style={{width:"100%", height:"auto"}}
              />
             <div className="absolute top-32 left-5 md:left-12">
                  <h3 className="text-xl md:text-5xl mb-3 w-64 text-white font-semibold">Activities during the trip</h3>
                  <button className="text-sm text-black bg-white px-4 py-2 md:py-4 rounded-lg mt-3  font-semibold">Experience</button>
             </div>
        </section>
        <section className="relative py-2 cursor-pointer col-span-2 md:col-span-1 px-2">
             <img 
                 src={ImageTwo.src}
                 alt="asdasd"
                 loading='lazy'
                 className="rounded-2xl"
                 style={{width:"100%", height:"auto"}}
              />
             <div className="absolute top-32 left-5 md:left-12" >
             <h3 className="text-xl md:text-5xl mb-3 w-64 text-white font-semibold">Things you can do from yoour own home</h3>
                  <button className="text-sm text-black bg-white px-4 py-2 md:py-4 rounded-lg mt-3 font-semibold">Online experience</button>
             </div>
        </section> 
        </div>
        </div>
    )
}

export default TwoCards
