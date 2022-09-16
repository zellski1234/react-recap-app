import './App.css';
import SearchIcon from './search.svg';
import { useEffect, useState } from "react";
import MovieCard from './components/MovieCard';
import styled from 'styled-components';
import ListUser from './components/ListUser';
import Update from './components/Update';
import DeleteUsers from './components/DeleteUsers';
import UserModal from './components/Modal';

const API_URL = process.env.REACT_APP_API_MOVIE

function App() {

	const [searchTerm, setSearchTerm] = useState("")
	const [movies, setMovies] = useState([])
	const [user, setUser] = useState()
	const [status, setStatus] = useState()
	const [token, setToken] = useState("")
	const [clicked2, setClicked2] = useState(false)
	const [loggedIn, setLoggedIn] = useState(false)
	const [showUpdate, setShowUpdate] = useState(false)
	const [showDelete, setShowDelete] = useState(false)
	const [showMovies, setShowMovies] = useState (true)

	useEffect(() => {
		searchFilms('Batman')
	},[]);
	

	
	const searchFilms = async (title) => {
		const req = await fetch(`${API_URL}&s=${title}`);
		const res = await req.json();
		// console.log(res.Search)
		setMovies(res.Search)
	}
	let page = <></>;

	// page if statement
	if (user) {
		page = <div>
			<GreenDiv>

			<NavBar>
				<button onClick={()=> {setShowUpdate(true); setShowDelete(false); setShowMovies(false);}}>{!showUpdate ? "Edit": "Edit"}</button>
				<button onClick={()=> {setShowUpdate(false); setShowDelete(true); setShowMovies(false);}}>{!showDelete ? "Delete": "Delete"}</button>
				<button onClick={()=> {setShowUpdate(false); setShowDelete(false); setShowMovies(true);}}>{!showMovies ? "Movies": "Movies"}</button>
				<button onClick={()=>{setLoggedIn(false); setClicked2(false)}}>Logout</button>
			</NavBar>
				<h1>You are logged as {user}</h1>
				<ListUser clicked={clicked2} setClicked={setClicked2}/>
			{showUpdate ? (
				<Update setUser={setUser} token={token} />
				): (
					<>
					</>
				)
			}
			{showDelete ? (
					<DeleteUsers token={token} setLoggedIn={setLoggedIn} setClicked={setClicked2} />
				): (
					<>
					</>
				)
			}
			{showMovies ? (
				<div className='movieContainer'>
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
								{movies.map((movie, index) => (
									<MovieCard key={index} movie={movie} />
									))}
							</div>
						) : (
							<div className='empty'>
								<h2>No movies found</h2>
							</div>
						)
					}
				</div>
				): (
					<>
					</>
				)
			}
			
		</GreenDiv>
		</div>
	} else {
		page = <h1>user not logged in </h1>
	}
	return (
		<GreatDiv >
			<div>
				<h1>Welcome</h1>
			</div>
		
			{!loggedIn ?(
				<div>	
						<SignInDiv>
							<UserModal setUser={setUser} setLoggedIn={setLoggedIn} setToken={setToken} setClicked2={setClicked2} setStatus={setStatus} />
						</SignInDiv>
					
					<h1>{status}</h1>
				</div>

				) : (
					<GreenDiv>
						{page}		
					</GreenDiv>
				)
			}
			<GreenDiv></GreenDiv>
		</GreatDiv>
	);
}

export default App;

const GreatDiv = styled.div`
  /* color: grey; */
  align-content: center;
  text-align: center;
  height: 100%;
`;

const SignInDiv = styled.div`
  /* color: grey; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
`;

const NavBar = styled.div`
	display: flex;
	background: rgb(19,19,19);
	background: linear-gradient(0deg, rgba(19,19,19,1) 0%, rgba(81,81,81,1) 85%);
	justify-content: center;
	width: 100vw;
	button{
		border: none;
		background: transparent;
		color: 2;
	}

`
const GreenDiv =styled.div`
	background-color: #1ba559;
`