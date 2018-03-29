// esling-disable-next-line
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import CardReveal from './elements/CardReveal';


class App extends React.Component {
	render () {
		const content = [
			{
				link: "https://www.google.com",
				title: "Link 1"
			}, {
				link: "https://www.facebook.com",
				title: "Link 2"
			}
		];
		return (
			<div>
				<Navbar />
				<PromoBanner />
				<div style={{ maxWidth: 1000, padding: 20 }}>
					<CardReveal
						src={require("./img/00_travelTeam.png")}
						name="Travel Team"
						content={content}
					/>
				</div>
			</div>
		);
	}
}

export default App;
