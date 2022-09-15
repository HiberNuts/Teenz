import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./Components/Landing/Landing";
import { Navbar } from "./Components/Navbar/Navbar";
import { PreNav } from "./Components/PreNav/PreNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wedding } from "./Components/Pages/Wedding";
import { Fabrics } from "./Components/Pages/Fabrics";
import Scrolltotop from "./Scrolltotop";
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
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
