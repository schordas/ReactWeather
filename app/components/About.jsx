var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center">About</h1>
			<p>This app was built with React for The Complete React Web Developer Course.</p>
			<p>Check out some of my other stuff here:</p>
			<ol>
				<li>
					<a href="https://github.com/schordas">Github</a>
				</li>
				<li>
					<a href="http://mjolnir.io">mjolnir.io</a>
				</li>
			</ol>
		</div>
	);
};

module.exports = About;