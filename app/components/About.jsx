var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This app was built with React for The Complete React Web Developer Course.</p>
			<p>To build the app I used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> - This is the JS framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Open Weather Map</a> - This is the weather API that 
						powers the lookup.
				</li>
				<li>
					<a href="http://foundation.zurb.com/">Foundation</a> - The UI was built using this
						front end framework.
				</li>
			</ul>
			<p>Check out some of my other stuff here:</p>
			<ul>
				<li>
					<a href="https://github.com/schordas">Github</a>
				</li>
				<li>
					<a href="http://mjolnir.io">mjolnir.io</a>
				</li>
			</ul>
		</div>
	);
};

module.exports = About;