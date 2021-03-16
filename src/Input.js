import React from "react";

import propTypes from "prop-types";

export const Input = ({ secretWord }) => {
	const [currentGuess, setCurrentGuess] = React.useState("");

	const handleChange = (e) => {
		// console.log(e.target.value);
		setCurrentGuess(e.target.value);
	}

	const handleClick = (e) => {
		// console.log(e.target);
		e.preventDefault();
		setCurrentGuess("");
	}

	return (
		<div data-test="component-input">
			<form>
				<input data-test="input-box" value={currentGuess} onChange={(e) => handleChange(e)} />
				<button data-test="submit-button" type="submit" onClick={handleClick}>Submit</button>
			</form>
		</div>
	)
}

Input.propTypes = {
	secretWord: propTypes.string.isRequired
}