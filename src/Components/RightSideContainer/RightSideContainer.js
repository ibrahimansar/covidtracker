import React, { useEffect, useState } from 'react'
import style from './RightSideContainer.module.css'
import { Card,CardContent } from '@material-ui/core'
import axios from 'axios'
import Table from './Table'


const sortedData=(data)=>{
    const sortedData=[...data]
    return sortedData.sort((a,b)=>(a.cases>b.cases?-1:1))
}

function RightSideContainer() {
    
    const [countriesData,setCountriesData]=useState([])
    useEffect(()=>{
        axios.get("https://disease.sh/v3/covid-19/countries")
        .then(res=>{
            const sortedValues=sortedData(res.data)
            setCountriesData(sortedValues)
        })
    },[])
    return (
        <div >
            <Card  className={style.container}>
                <CardContent>
                    <h3>Live Cases By Country</h3>
                    <Table tableData={countriesData}/>
                </CardContent>

            </Card>
        </div>
    )
}

export default RightSideContainer
