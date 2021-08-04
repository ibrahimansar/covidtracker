import React, { useState ,useEffect} from 'react'
import style from './LeftSideContainer.module.css'
import LeftSubContainer from './LeftSubContainer'
import axios from 'axios'



function LeftSideContainer() {
    const [countries,setCountries]=useState([])
    const [mapCountries,setMapCountries]=useState([])

    //===========================To fetch the countries name=====================
    const getCountries=()=>{
        axios.get("https://disease.sh/v3/covid-19/countries")
        .then(response=>{
            const countries_set=response.data.map(country=>({
                name:country.country,
                value:country.countryInfo.iso2
            }))
            setCountries(countries_set)
            setMapCountries(response.data)
        })
        
    }
    //==================================================
    useEffect(()=>{
        getCountries()
    },[])
    return (
        <div className={style.container}>
            <LeftSubContainer countries={countries} mapCountries={mapCountries}/>
        </div>
    )
}

export default LeftSideContainer
