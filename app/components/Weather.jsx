var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');

var Weather = React.createClass({
	// getDefaultProps: function(){
	// 	return{
	// 		city: ' '
	// 	};
	// },

	getInitialState: function() {
		return{
			location: 'San Francisco',
			temp: 62
		};
	},
	handleSearch: function(location){
		this.setState({
			location: location,
			temp: 58
		});
		
	},

	render: function () {
		var {temp, location} = this.state;
		return (
			<div>
				<h3>Get Weather</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				<WeatherResult location={location} temp={temp}/>
			</div>
		);
	}
});

module.exports = Weather;