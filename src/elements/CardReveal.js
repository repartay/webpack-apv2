import React from 'react';
import { Link } from 'react-router-dom';
// import MdClose from 'react-icons/lib/md/close';
import './CardReveal.css';

class CardReveal extends React.Component {
	renderContent() {
		const content = this.props.content;
		console.log('content', content);
		return(
			<ul>
				{content.map((c, idx) => (
					<li key={idx}>
						<a href={c.link}>
						{c.title}
						</a>
					</li>
				))}
			</ul>
		);
	}
	render () {
		const {name, src} = this.props;
		return (
			<div className="card card-wrap" >
    			<div className="card-image waves-effect waves-block waves-light">
      				<img className="activator" src={src}/>
    			</div>
			    <div className="card-content" >
				    <span className="card-title activator grey-text text-darken-4">
				      	{name}
				    </span>
			    </div>
			    <div className="card-reveal">
			      <span className="card-title grey-text text-darken-4" >
			      	{name}
			      </span>
			      {this.renderContent()}
			      <Link to="/users" >Users List</Link>
			    </div>
			  </div>
		);
	}
}

export default CardReveal;
