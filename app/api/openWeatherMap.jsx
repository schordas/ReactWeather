var axios = require('axios');

const OPEN_WATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=67bf20edbebfa3a703e8479493c2e1ac';

module.exports = {
	getTemp: function (location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WATHER_MAP_URL}&q=${encodedLocation}`;
		var results = {};

		return axios.get(requestUrl).then(function (res) {
			debugger;
			if (res.data.cod && res.data.message){
				throw new Error(res.data.message);
			} else{
				results.temp = res.data.main.temp;
				var city = res.data.name;
				var country = res.data.sys.country;
				results.location = city + ", " + country;
				return results;
			}
		}, function () {
			throw new Error('Unable to fetch weather for that location.');
		});
	}
}