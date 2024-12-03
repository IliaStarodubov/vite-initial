// import reactLogo from './assets/react.svg';
import ReactLogo from './assets/react.svg?react';
import './App.css';
import React from 'react';

const date = new Date();
export const App = () =>
	/*#__PURE__*/ React.createElement(
		// Императивный стиль
		'div',
		{
			className: 'App',
		},
		/*#__PURE__*/ React.createElement(
			// Императивный стиль
			'header',
			{
				className: 'App-header',
			},
			/*#__PURE__*/ React.createElement(
				// Императивный стиль
				'p',
				null,
				'Edit ',
				/*#__PURE__*/ React.createElement('code', null, 'src/App.js'), // Императивный стиль
				' and save to reload .',
			),
			/*#__PURE__*/ React.createElement('h1', null, 'Vite + React'), // Императивный стиль
			/*#__PURE__*/ React.createElement(ReactLogo, {
				// Императивный стиль
				className: 'logo',
			}),
			' ',
			/*#__PURE__*/ React.createElement(
				// Императивный стиль
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			/*#__PURE__*/ React.createElement('p', null, date.getFullYear()), // Императивный стиль
		),
	);
