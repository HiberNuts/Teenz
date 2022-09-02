import logo from "./logo.svg";
import "./App.css";
import { Landing } from "./Components/Landing/Landing";
import { Navbar } from "./Components/Navbar/Navbar";
import { PreNav } from "./Components/PreNav/PreNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<PreNav></PreNav>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Landing />}></Route>
				</Routes>
			</BrowserRouter>
			,
		</div>
	);
}

export default App;
