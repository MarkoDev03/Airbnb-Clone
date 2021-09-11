import ReactMapGL from 'react-map-gl'
import { useState } from 'react'

function Map() {

    const [viewport, setViewport] = useState({
        width:'100%',
        height:'100%',
        latitude:37.7577,
        longitude:-122.4376,
        zoom:8,
    })

    return (
        <ReactMapGL
           mapStyle='mapbox://styles/perovicmarko/cktd5g6ig10tk17pp59qqowtd'
           mapboxApiAccessToken={process.env.mapbox_key}
           {...viewport}
           onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >

        </ReactMapGL>
    )
}

export default Map
