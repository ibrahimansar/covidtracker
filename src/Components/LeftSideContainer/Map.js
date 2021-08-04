import React from 'react'
import{MapContainer,TileLayer} from 'react-leaflet'
import style from './Map.module.css'
import 'leaflet/dist/leaflet.css';
import MapChild from './MapChild';
import {showData} from './util'


function Map({center,zoom,countries,caseType}) {
    return (
        <div className={style.map}>
         <MapContainer className={style.map2} center={center} zoom={zoom}>
         <TileLayer
             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />
            {showData(countries,caseType)}
          <MapChild center={center}/>
         </MapContainer>
          
        </div>
    )
}

export default Map
