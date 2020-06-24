import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
	const [searchWord, setSearchWord] = useState('');

	const resetState = () => {
		setSearchWord('');
	};

	const onSubmit = (event) => {
		event.preventDefault();

		const query = searchWord;

		props.submitSearchTermCallback(query);
		resetState();
	};

	const onFormChange = (event) => {
		const updatedState = {};

		const field = event.target.name;
		const value = event.target.value;

		updatedState[field] = value;
		setSearchWord(updatedState);
	};

	return (
		<div>
			<h2>Search Movie Here</h2>
			<form onSubmit={onSubmit}>
				<div>
					<input
						onChange={onFormChange}
						value={searchWord}
						name="searchWord"
						placeholder="Psycho"
					/>
				</div>
				<input type="submit" name="submit" value="Search the Movie" />
			</form>
		</div>
	);
};

export default SearchBar;
