import React, { useState, useEffect } from "react";
import axios from "axios";

const Library = ({ API_URL_BASE, onSelectedMovieCallback }) => {
	const [movieList, setMovieList] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState({});
	const [error, setError] = useState("");

	useEffect(() => {
		axios.get(API_URL_BASE + "/movies").then((response) => {
			// Load in the data
			setMovieList(response.data);
			 }).catch((error) => {
			// Show an error
			setError(error.message);
		});
	}, []);

	const selectMovie = (movie) => {
		setSelectedMovie(movie);
		onSelectedMovieCallback(movie);
	};

	return (
		<ol>
			{movieList.map((movie, i) => (
				<div key={i}>
					<h4>{movie.title}</h4>
					<img
						src={movie.image_url}
						alt={movie.title}
						onClick={() => {
							selectMovie(movie);
						}}></img>
					<p>{movie.overview}</p>
				</div>
			))}
		</ol>
	);
};

export default Library;
