import React from 'react';
import './App.css';
import MemeForm from './MemeForm';
import Meme from './Meme';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const memes = useSelector((state) => state.memes);
	const dispatch = useDispatch();

	const addMeme = (newMeme) => dispatch({ type: 'ADD_MEME', meme: newMeme });
	const removeMeme = (id) => dispatch({ type: 'REMOVE_MEME', id });

	const handleMeme = memes.map((meme) => (
		<Meme
			key={meme.id}
			topText={meme.topText}
			bottomText={meme.bottomText}
			url={meme.url}
			removeMeme={() => removeMeme(meme.id)}
		/>
	));

	return (
		<div className='App'>
			<MemeForm addMeme={addMeme} />
			<hr />
			{handleMeme}
		</div>
	);
}

export default App;
