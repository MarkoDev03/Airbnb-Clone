import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { useState, useEffect } from 'react'
import getCenter from 'geolib/es/getCenter'

function Map({lon, lat, hotels}) {

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
                      <p onClick={() => setSelectedLocation(hotel)} className='cursor-pointer text-2xl animate-bounce z-10'>📌</p>
                  </Marker>
                  {selectedLocation.longitude == hotel.longitude ? (
                        <Popup
                           onClose={() => setSelectedLocation({})}
                           closeOnClick={true}
                           longitude={+hotel.longitude}
                           latitude={+hotel.latitude}
                           className='z-20'
                           width={150}
                        >
                            <img src={hotel.photo.images.large.url != undefined ? hotel.photo.images.large.url : ""} alt="" className='w-100 h-auto rounded-md'  />
                           {hotel.name}
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
