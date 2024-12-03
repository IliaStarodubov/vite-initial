// import reactLogo from './assets/react.svg';
import ReactLogo from './assets/react.svg?react';
import './App.css';

const date = new Date();

export const App = () => (
	<div className="App">
		<header className="App-header">
			<p>
				Edit <code>src/App.js</code> and save to reload .
			</p>
			<h1>Vite + React</h1>
			{/* <img src={reactLogo} alt="react Logo" /> */}
			<ReactLogo className="logo" /> {/* Декларативный стиль-используется JSX */}
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
			<p>{date.getFullYear()}</p>
			{/* Декларативный стиль-используется JSX */}
		</header>
	</div>
);
