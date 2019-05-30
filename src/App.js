import React from 'react';
import './App.css';
import Input from './components/Input';
import Lipsync from './components/Lipsync';
import Counter from './components/Counter';

function App() {
	const [name, setName] = React.useState('');
	const [score, setScore] = React.useState(0);
	const [result, setResult] = React.useState('');

	return (
		<div className="App">
			<header className="header">
				<h1 className="header__text">Sashay or Shantay?</h1>
			</header>
			{name ? (
				<div>
					<Counter name={name} score={score} setScore={setScore} />
					<Lipsync result={result} setResult={setResult} score={score} setScore={setScore} />
				</div>
			) : (
				<Input name={name} setName={setName} />
			)}
		</div>
	);
}

export default App;
