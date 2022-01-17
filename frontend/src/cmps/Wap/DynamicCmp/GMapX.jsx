import React, { useEffect, useState } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const _GMap = ({ style, data, google }) => {
    const { lat, lng, zoom, markerName } = data
    const [pos, setPos] = useState({ lat, lng })

    useEffect(() => {
        setPos({ lat, lng })
    }, [data])

    return (
        <div className="gmap" style={style}>
            <Map
                google={google}
                zoom={zoom}
                center={pos}
            >
                <Marker
                    position={{ lat, lng }}
                    name={markerName}
                    title={markerName}
                />
            </Map>
        </div>
    )
}

export const GMap = GoogleApiWrapper({ apiKey: ('<apiKey>') })(_GMap)