import React from 'react';
import './Input.css';

const Input = (props) => {
	const { setName } = props;
	const [user, setUser] = React.useState('');
	const handleInput = (event) => setUser(event.target.value);

	return (
		<form
			className="name-input"
			onSubmit={(e) => {
				e.preventDefault();
				setName(user);
			}}>
			<label className="name-input__label" htmlFor="name">
				Name:
			</label>
			<input
				className="name-input__field"
				type="text"
				id="name"
				autoComplete="off"
				placeholder="Enter your name"
				value={user}
				onChange={handleInput}
			/>
			<button className="name-input__submit" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Input;
