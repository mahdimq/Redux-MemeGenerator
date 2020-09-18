import React from 'react';
import PropTypes from 'prop-types';

function Meme({ id, topText, bottomText, url, deleteMeme }) {
	const handleDelete = () => deleteMeme(id);

	return (
		<div>
			<span>{topText}</span>
			<img src={url} alt='meme pic' />
			<span>{bottomText}</span>
			<button onClick={handleDelete}>Delete</button>
		</div>
	);
}

Meme.propTypes = {
	topText: PropTypes.string.isRequired,
	bottomText: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
};

export default Meme;
