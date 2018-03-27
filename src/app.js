import React from 'react';
import { render } from 'react-dom';
import './app.css';

class App extends React.Component {
	render () {
		return <p> Altour Portal React App</p>;
	}
}

render(<App/>, document.getElementById('root'));