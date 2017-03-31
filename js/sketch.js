var apiKey = 'b6a7961c53511003c4f5361fb485b1c7';
var baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var city;
var units = 'metric';
var weatherData; 
var temperature = 0;
var temp_min = 0;
var temp_max = 0;
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
	temp_max = weatherData.main.temp_max;
	temp_min = weatherData.main.temp_min;
	humidity = weatherData.main.humidity;
	console.log(weatherData);
}

function draw (){
	background (0);
	fill(255,99,71);
	noStroke();
	ellipse(100,100,temp_max*10,temp_max*10);
	fill(0,255,255)
	ellipse(100,100,temp_min*10,temp_min*10);

	if (weatherData) {
		fill(255)
		textSize(12)
		text('Hey, the temperature in '+ city.value(), 200,100 );
		text('     is', 400,100 )
		textSize(24)
		text(temperature, 450,100);
		textSize(12)
		text('Degree Celsius    | ', 500,100);
		text('MIN', 630,100);
		fill(0,255,255)
		textSize(24)
		text(temp_min, 660,100);
		fill(255)
		textSize(12)
		text('         &   MAX', 670,100);
		fill(255,99,71)
		textSize(24)
		text(temp_max, 750,100);
		}
		else { text('not working',200,200);	
		}

	if (weatherData) {
		fill(255)
		textSize(12)
		text('...do not forget about the humidity, is '+ humidity + ' %', 200, 150);
		}
		else { text('not working',300,200);
		}
}