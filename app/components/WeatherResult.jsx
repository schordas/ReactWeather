var React = require('react');

var WeatherResult = React.createClass({
	render: function () {

		var {temp, location} = this.props;

		return (
			<h3>The temperature in {location} is {temp} degrees fahrenheit</h3>
		);
	}
});

module.exports = WeatherResult;