var React = require('react');

var WeatherResult = React.createClass({
	render: function () {

		var location = this.props.location;
		var temp = this.props.temp;

		return (
			<h3>The temperature in {location} is {temp} degrees fahrenheit</h3>
		);
	}
});

module.exports = WeatherResult;