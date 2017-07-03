var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<h2 className="text-center">Created by Sam Chordas.</h2>
			<p className="text-center">Based on a course by Andrew Mead.</p>
			<p className="text-center">Check out some of my other stuff here:</p>
			<ol>
				<li>
					<a href="github.com/schordas">Github</a>
				</li>
				<li>
					<a href="mjolnir.io">mjolnir.io</a>
				</li>
			</ol>
		</div>
	);
};

module.exports = About;