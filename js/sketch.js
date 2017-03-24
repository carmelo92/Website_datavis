var apiKey = 'b6a7961c53511003c4f5361fb485b1c7';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var units = 'metric';
var weatherData; 
var temperature = 0;
var humidity = 0;
var button;

function setup (){
    createCanvas(800,800);
    button = select ('#submit');
    city = select('#city');
    button.mousePressed(queryAPI);
  }

function  queryAPI(){
    var query = baseURL + city.value() +'&apikey=' + apiKey +'&units=' + units;
    loadJSON(query, getWeatherData);
}

function getWeatherData (apiData){
	weatherData = apiData;
	temperature = weatherData.main.temp;
	himidity = weatherData.main.humidity;
	console.log(weatherData);
}

function draw (){
	background (0);
	fill(255);
	noStroke();
	ellipse(200,200,temperature*10,temperature*10);
}