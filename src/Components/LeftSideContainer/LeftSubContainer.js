import React, { useState, useEffect } from "react";
import style from "./LeftSubContainer.module.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import axios from "axios";
import Map from "./Map";
import CountContainer from "./CountContainer";
import { prettyPrint } from "./util";

function LeftSubContainer({ countries, mapCountries }) {
  const [country, setCountry] = useState("worldWide");
  const [countryInfo, setCountryInfo] = useState({});
  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);
  const [mapZoom, setMapZoom] = useState(3);
  const [caseType, setCaseType] = useState("cases");

  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/all").then((res) => {
      setCountryInfo(res.data);
    });
  }, []);

  const handleChange = (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode == "worldWide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    axios.get(url).then((response) => {
      setCountry(countryCode);
      setCountryInfo(response.data);
      setMapCenter([
        response.data.countryInfo.lat,
        response.data.countryInfo.long,
      ]);
      setMapZoom(4);
    });
  };

  return (
    <div className={style.subContainer}>
      <div className={style.header}>
        <h1 className={style.h1}>Covid-19 Tracker</h1>
        <FormControl>
          <Select
            variant="outlined"
            value={country}
            onChange={handleChange}
            className={style.select}
          >
            <MenuItem value="worldWide">World Wide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className={style.container}>
        <CountContainer
          title="Corona Virus Cases"
          cases={prettyPrint(countryInfo.todayCases)}
          onClick={(e) => setCaseType("cases")}
          total={prettyPrint(countryInfo.cases)}
          active={caseType === "cases"}
          isRed
        />

        <CountContainer
          title="Recovered"
          onClick={(e) => setCaseType("recovered")}
          cases={prettyPrint(countryInfo.todayRecovered)}
          total={prettyPrint(countryInfo.recovered)}
          active={caseType === "recovered"}
        />

        <CountContainer
          title="Death"
          onClick={(e) => setCaseType("deaths")}
          cases={prettyPrint(countryInfo.todayDeaths)}
          total={prettyPrint(countryInfo.deaths)}
          active={caseType === "deaths"}
          isRed
        />
      </div>

      <Map
        center={mapCenter}
        zoom={mapZoom}
        countries={mapCountries}
        caseType={caseType}
      />
    </div>
  );
}

export default LeftSubContainer;
