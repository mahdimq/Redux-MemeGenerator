import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_DATA = {
	topText: '',
	bottomText: '',
	url: ''
};

function MemeForm({ addMeme }) {
	const [form, setForm] = useState(INITIAL_DATA);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((data) => ({ ...data, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addMeme({ ...form, id: uuid() });
		setForm(INITIAL_DATA);
	};

	return (
		<div>
			<h2>Make a Meme!</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='topText'>Top Text</label>
				<input
					id='topText'
					type='text'
					value={form.topText}
					name='topText'
					onChange={handleChange}
				/>
				<label htmlFor='bottomText'>Bottom Text</label>
				<input
					id='bottomText'
					type='text'
					value={form.bottomText}
					name='bottomText'
					onChange={handleChange}
				/>
				<label htmlFor='url'>Meme Url</label>
				<input id='url' type='url' value={form.url} name='url' onChange={handleChange} />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

export default MemeForm;
