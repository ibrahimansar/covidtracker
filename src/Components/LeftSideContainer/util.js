  
import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import style from './util.module.css'
const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      rgb: "rgb(204, 16, 52)",
      half_op: "rgba(204, 16, 52, 0.5)",
      multiplier: 800,
    },
    recovered: {
      hex: "#7dd71d",
      rgb: "rgb(125, 215, 29)",
      half_op: "rgba(125, 215, 29, 0.5)",
      multiplier: 1200,
    },
    deaths: {
      hex: "#fb4443",
      rgb: "rgb(251, 68, 67)",
      half_op: "rgba(251, 68, 67, 0.5)",
      multiplier: 2000,
    },
  };

export const prettyPrint=(stat)=> 
    stat ? `${numeral(stat).format("0.0a")}` : "0";

export const showData=(data,caseType="cases")=>(
    data.map((country)=>(
        <Circle
        center={[country.countryInfo.lat,country.countryInfo.long]}
        fillOpacity={0.4}
        pathOptions={{color: casesTypeColors[caseType].hex,
            fillColor: casesTypeColors[caseType].hex }}
        radius={
            Math.sqrt(country[caseType])*casesTypeColors[caseType].multiplier
        }        
        >
            <Popup>
               <div className={style.infoContainer}>
                   <div style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                   className={style.infoFlag}
                   ></div>
                   <div className={style.infoCountry}>{country.country}</div>
                   <div  className={style.infoConfirmed}> Cases: {numeral(country.cases).format("0,0")}</div>
                   <div  className={style.infoRecovered}>Recovered:{numeral(country.recovered).format("0,0")}</div>
                   <div  className={style.infoDeaths}>Death:{numeral(country.deaths).format("0,0")}</div>
               </div>

            </Popup>
        </Circle>
    ))
)
