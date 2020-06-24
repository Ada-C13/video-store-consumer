import React, { useState, useEffect } from "react";
import axios from "axios";

const Library = ({ API_URL_BASE }) => {
	const [movieList, setMovieList] = useState([]);
	useEffect(() => {
		axios.get(API_URL_BASE + "/movies").then((response) => {
			// Load in the data
			setMovieList(response.data);
			// }).catch((error) => {
			// Show an error
			// setError("There was an error with this request!");
		});
	}, []);
	return (
		<ol>
			{movieList.map((movie) => (
				<li> {movie.title} </li>
			))}
		</ol>
	);
};

export default Library;
