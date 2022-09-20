import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Landing } from "./Components/Landing/Landing";
import { Navbar } from "./Components/Navbar/Navbar";
import { PreNav } from "./Components/PreNav/PreNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wedding } from "./Components/Pages/Wedding";
import { Fabrics } from "./Components/Pages/fabrics/Fabrics";
import { Ordernow } from "./Components/Pages/Ordernow";
import Scrolltotop from "./Scrolltotop";
import Location from "./Components/location/Location";
import { Footer } from "./Components/Footer/Footer";
function App() {
  // const [countryName, setcountryName] = useState("");
  // const [countryCode, setcountryCode] = useState("");
  // const [city, setcity] = useState("");
  // const [region, setregion] = useState("");
  // const getGeoInfo = () => {
  //   axios
  //     .get("https://ipapi.co/json/")
  //     .then((response) => {
  //       let data = response.data;

  //       setcountryName(data.country_name);
  //       setcountryCode(data.country_calling_code);
  //       setcity(data.city);
  //       setregion(data.region);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   getGeoInfo();
  // }, [countryName, city, region]);



  return (
    <div className="App">
      <PreNav></PreNav>
      <BrowserRouter>
        <Scrolltotop></Scrolltotop>
        {/* <Navbar countryName={countryName} city={city} region={region} /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/wedding" element={<Wedding />}></Route>
          <Route path="/fabrics" element={<Fabrics />}></Route>
          <Route path="/ordernow/:type" element={<Ordernow />}></Route>
          <Route path="/location" element={<Location />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
