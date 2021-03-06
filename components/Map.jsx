import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { useState, useEffect } from 'react'
import getCenter from 'geolib/es/getCenter'
import Rating from '@material-ui/lab/Rating';

function Map({lon, lat, hotels, classset}) {

    const [selectedLocation, setSelectedLocation] = useState({})

    const [center, setCenter] = useState({
        longitude:lon,
        latitude:lat
    });

    const [viewport, setViewport] = useState({
        width:'100%',
        height:'100%',
        latitude:lat,
        longitude:lon,
        zoom:8,
    })
   
    useEffect(() => {
        const coordinates = hotels.map(result => ({
            longitude:result.longitude,
            latitude:result.latitude
       }))

       const center = getCenter(coordinates)

       setCenter(center)

       setViewport({
        width:'100%',
        height:'100%',
        latitude:center.latitude,
        longitude:center.longitude,
        zoom:12,
       })     
    }, [hotels])
    

    return (
        <ReactMapGL
           mapStyle='mapbox://styles/perovicmarko/cktd5g6ig10tk17pp59qqowtd'
           mapboxApiAccessToken={process.env.mapbox_key}
           {...viewport}
           style={{width:"100%", height:"100%"}}
           width={'100%'}
           height={'100%'}
           className={classset}
           onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
          {hotels.map((hotel) => (
              <div key={hotel.longitude}>
                  <Marker
                     longitude={+hotel.longitude}
                     latitude={+hotel.latitude}
                     offsetTop={-10}
                     offsetLeft={-20}
                  >

                      <div
                    onClick={() => setSelectedLocation(hotel)}
                    className='w-[95px] px-1 pt-1 rounded-sm  md:w-[95px] bg-white'          
                 >
                    <p className='font-semibold' style={{fontSize:"10px"}}>{hotel.name}</p>
                     <img src={hotel.photo.images.large.url != undefined ? hotel.photo.images.large.url : ""} alt="" className='w-100 h-auto rounded-sm'  />
                     <Rating name="read-only" value={Number(hotel.rating)} readOnly size="small" />
                 </div>
                  </Marker>
                  {selectedLocation.longitude == hotel.longitude ? (
                        <Popup
                           onClose={() => setSelectedLocation({})}
                           closeOnClick={true}
                           longitude={+hotel.longitude}
                           latitude={+hotel.latitude}
                           className='z-20 w-[250px]  md:w-[350px] rounded-lg'
                           
                        >
                           <p className='text-base font-semibold'>{hotel.name}</p>
                           <p className="text-xs text-gray-600">{hotel.ranking}</p>
                        <img src={hotel.photo.images.large.url != undefined ? hotel.photo.images.large.url : ""} alt="" className='w-100 h-auto rounded-lg'  />
                            <Rating name="read-only" value={Number(hotel.rating)} readOnly />
                            <p className='font-semibold pl-1 text-sm'>{hotel.price} <span className='text-base text-gray-400 title'>/ per night</span></p>
                        </Popup>
                  ) : 
                      " "
                  }
              </div>
          ))}
        </ReactMapGL>
    )
}

export default Map
