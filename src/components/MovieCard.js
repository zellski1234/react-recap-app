import React from 'react'
import styled from 'styled-components';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) =>{
    return (
        <div className='movie' key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>

            <div>
                <img src={Poster !== "N/A" ? Poster: "https://via.placeholder.com/400"} alt={Title}/>
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;

// const Button = styled.button`
//   color: grey;
// `;