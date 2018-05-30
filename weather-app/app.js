const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: `Address to fetch weather for`,
      string: true
    }
})
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
   if(errorMessage){
     console.log(errorMessage);
   } else {
     console.log(results.address);
     weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
       if(errorMessage){
         console.log(errorMessage);
       } else {
         console.log(`It's currently ${weatherResults.temperature} F and feels like ${weatherResults.apparentTemperature} F.`);
       }
     });
   }
});

//https://api.darksky.net/forecast/7b0bd310861dbcf53d841b981b7ceba6/37.8267,-122.4233
//7b0bd310861dbcf53d841b981b7ceba6
