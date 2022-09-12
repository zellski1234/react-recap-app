// import './App.css';
import SearchIcon from './search.svg';
import { useEffect, useState } from "react";
import MovieCard from './components/MovieCard';

const API_URL = 'http://omdbapi.com?apikey=a28de950'

function App() {

	const [searchTerm, setSearchTerm] = useState("")
	const [movies, setMovies] = useState([])

	useEffect(() => {
		searchFilms('Batman')
	},[]);
	
	
	const searchFilms = async (title) => {
		const req = await fetch(`${API_URL}&s=${title}`);
		const res = await req.json();
		// console.log(res.Search)
		setMovies(res.Search)
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
				<img
					src={SearchIcon}
					alt='search'
					onClick={()=> searchFilms(searchTerm)}
				/>
			</div>
			{ movies?.length > 0
			// if movies length is greater than zero
				?(
					<div className='container'> 
						{movies.map((movie) => (
							<MovieCard movie={movie} />
						))}
					</div>
				) : (
					<div className='empty'>
						<h2>No movies found</h2>
					</div>
				)
			}
		</div>
	);
}

export default App;
