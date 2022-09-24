import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./Components/Landing/Landing";
import { Navbar } from "./Components/Navbar/Navbar";
import { PreNav } from "./Components/PreNav/PreNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wedding } from "./Components/Pages/Wedding";
import { Fabrics } from "./Components/Pages/fabrics/Fabrics";
import { Ordernow } from "./Components/Pages/Ordernow";
import Scrolltotop from "./Scrolltotop";
import { Ethnic } from "./Components/Pages/Ethinic";
import { OrdernowEthinic } from "./Components/Pages/OrdernowEthinic";
import { Partywear } from "./Components/Pages/Partywear";
import { Ordernowparty } from "./Components/Pages/OrdernowParty";
import { Indo } from "./Components/Pages/Indo";
import { Ordernowindo } from "./Components/Pages/Ordernowindo";
import  Sidebar  from "./Components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <PreNav></PreNav>
      <BrowserRouter>
        <Scrolltotop></Scrolltotop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/wedding" element={<Wedding />}></Route>
          <Route path="/fabrics" element={<Fabrics />}></Route>
          <Route path="/Ethnic" element={<Ethnic />}></Route>
          <Route path="/Partywear" element={<Partywear />}></Route>
          <Route path="/indo" element={<Indo />}></Route>

          <Route path="/ordernow/wedding" element={<Ordernow />}></Route>
          <Route path="/ordernow/Ethnic" element={<OrdernowEthinic />}></Route>
          <Route path="/ordernow/Party" element={<Ordernowparty />}></Route>
          <Route path="/ordernow/indo" element={<Ordernowindo />}></Route>
          <Route path="/sidebar" element={<Sidebar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
