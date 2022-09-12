// import './App.css';
import SearchIcon from './searc.svg';
import { useEffect, useState } from "react";

const API_URL = 'http://omdbapi.com?apikey=a28de950'

function App() {

	const [searchTerm, setSearchTerm] = useState("")

	useEffect(() => {
		searchFilms('Batman')
	},[]);
	
	
	const searchFilms = async (title) => {
		const req = await fetch(`${API_URL}&s=${title}`);
		const res = await req.json();
		console.log(res.Search)
	}

	return (
		<div className="App">
			<h1>My Movie App</h1>
			<div className="search">
				<input 
					placeholder="Search for a film"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value) }				
				/>
			</div>

		</div>
	);
}

export default App;
