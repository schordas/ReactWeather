var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState: function() {
		return{
			isLoading: false
		};
	},
	handleSearch: function(location){
		var that = this;
		
		this.setState({isLoading: true});
		openWeatherMap.getTemp(location).then(function (results) {
			that.setState({
				isLoading: false,
				location: results.location,
				temp: results.temp
			});
		}, function (errorMessage) {
			that.setState({
				isLoading: false
			});
			alert(errorMessage);
		});
		
	},

	render: function () {
		var {isLoading, temp, location} = this.state;

		function renderMessage () {
			if (isLoading){
				return <h3 className="text-center">Fetching weather...</h3>
			} else if (temp && location){
				return <WeatherResult location={location} temp={temp}/>
			}
		}
		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;