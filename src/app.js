// esling-disable-next-line
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ManageUsers from './components/ManageUsers';
import Loading from './elements/Loading';

import path from 'path';

class App extends React.Component {
	render () {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Navbar />
						<Route path="/" exact component={Home} />
						<Route path="/users" component={ManageUsers} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
