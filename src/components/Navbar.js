import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	render () {
		return (
			<nav>
			    <div className="nav-wrapper blue darken-4">
			  		<Link 
			  			to="/altour-redirect"
			  			className="left brand-logo"
					>	
						<img style={{ maxHeight: 30, paddingLeft: 10 }} src={require("../img/Altour_cream_sm.png")} alt="logo"/>
					</Link>
			  		<ul className="right">
			  			<Link to="/" className="right">Admin</Link>
			  			<Link to="/" className="right">Logout</Link>
			  		</ul>
			    </div>
			</nav>
		);
	}
}

export default Navbar;
