import React, { useState, useEffect } from "react";
import axios from "axios";

const Location = () => {
  const [countryName, setcountryName] = useState("");
  const [countryCode, setcountryCode] = useState("");
  const [city, setcity] = useState("");
  const [region, setregion] = useState("");
  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;

        setcountryName(data.country_name);
        setcountryCode(data.country_calling_code);
        setcity(data.city);
        setregion(data.region);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getGeoInfo();
  }, []);

  return (
    <div style={{ fontSize: "40px", marginTop: "50px" }}>
      <h4>{countryName}</h4>
      <h4>{city}</h4>
      <h4>{region}</h4>
    </div>
  );
};

export default Location;
