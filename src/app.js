// esling-disable-next-line
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Navbar from './components/Navbar';

class App extends React.Component {
	render () {
		return (
			<div>
				<Navbar />
				<p> Altour Portal React App</p>
			</div>
		);
	}
}

export default App;
