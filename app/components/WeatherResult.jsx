var React = require('react');

var WeatherResult = ({temp, location}) => {

	return (
		<h3 className="text-center">The temperature in {location} is {temp} °F</h3>
	);
}

module.exports = WeatherResult;