var React = require('react');
var {Link} = require()

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<h2 className="text-center">This app was created by Sam Chordas.</h2>
			<p className="text-center">Check out some of my other stuff here:</p>
			<ol>
				<li>
					<Link to="github.com/schordas">Github</Link>
				</li>
				<li>
					<Link to="mjolnir.io">mjolnir.io</Link>
				</li>
			</ol>
		</div>
	);
};

module.exports = About;