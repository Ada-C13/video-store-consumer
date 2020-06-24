import React, { useState, useEffect } from 'react';

const SearchBar = ({submitSearchTermCallback}) => {
	const [searchWord, setSearchWord] = useState('');

	const resetState = () => {
		setSearchWord("");
	};

	const onSubmit = (event) => {
		event.preventDefault();

		const query = searchWord;

		submitSearchTermCallback(query);
		resetState();
	};

	const onFormChange = (event) => {
		const value = event.target.value;
		setSearchWord(value);
	};

    console.log(
        searchWord
    )
	return (
		<div>
			<h2>Search Movie Here</h2>
			<form onSubmit={onSubmit}>
				<div>
					<input
						onChange={onFormChange}
						value={searchWord}
						name="searchWord"
						placeholder=""
					/>
				</div>
				<input type="submit" name="submit" value="Search the Movie" />
			</form>
		</div>
	);
};

export default SearchBar;
