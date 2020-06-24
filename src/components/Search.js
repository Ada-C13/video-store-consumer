import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const Search = ({ API_URL_BASE }) => {
	const [selectedMovie, setSelectedMovie] = useState({});
	const [searchedMovies, setSearchedMovies] = useState([]);
	const [newMovie, setNewMovie] = useState({});
	const [error, setError] = useState(undefined);

	const resetSearchState = () => {
		setSearchedMovies([]);
	};

	const selectMovie = (movie) => {
		setSelectedMovie(movie);
	};

	const searchMovie = (query) => {
		if (query !== null) {
			axios
				.get(API_URL_BASE + `/movies?query=${query}`)
				.then((response) => {
					if (response.data !== undefined) {
						console.log(response);
						setSearchedMovies(response.data);
					}
				})
				.catch((error) => {
					setError(error.errors);
					setSearchedMovies([]);
				});
		}
	};

	const addMovie = (movie) => {
		axios
			.post(API_URL_BASE + "/movies", movie)
			.then((response) => {
				if (response.data !== undefined) {
					setNewMovie(response.data);
				}
			})
			.catch((error) => {
                console.log({error})
				setError(error.response.data.errors);
			});
	};

	const listMovies = () => {
		return searchedMovies.map((movie, i) => {
			let movieURL = movie.image_url;
			return (
				<div key={i}>
					<h4>{movie.title}</h4>
					<img
						src={movieURL}
						alt={movie.title}
						onClick={() => {
							selectMovie(movie);
						}}
						className={movie === selectedMovie ? "" : null}></img>
					<p>{movie.overview}</p>
					<button onClick={() => addMovie(movie)}>
						Add Movie to Inventory
					</button>
				</div>
			);
		});
	};

	return (
		<section>
			<SearchBar submitSearchTermCallback={searchMovie} />
			{error}
			<section>{listMovies()}</section>
		</section>
	);
};

Search.propTypes = {};

export default Search;
