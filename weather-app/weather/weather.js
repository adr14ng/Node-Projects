const request = require('request');

getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/7b0bd310861dbcf53d841b981b7ceba6/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200){
      callback(undefined, {
        timezone: body.timezone,
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else{
      callback(`Unable to fetch weather.`);
    }

  });
};

module.exports = {
  getWeather
}
