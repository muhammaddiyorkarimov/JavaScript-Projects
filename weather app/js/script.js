const changeLocation = document.getElementById('change-location')
const cards = document.querySelector('.cards')
const message = document.getElementById('message')


// updateUI
const updateUI = (weather) => {
	const weatherInfo = {
		id: weather.id,
		name: weather.name,
		country: weather.sys.country,
		temp: weather.main.temp,
		icon: weather.weather[0].icon,
		description: weather.weather[0].description
	}

	cards.innerHTML +=
		`
	<div class="card">
		<div class="card-header">
			<h2>${weatherInfo.name} <span>${weatherInfo.country}</span></h2>
		</div>
		<div class="card-body">
			<h1>${Math.floor(weatherInfo.temp)}<span>&deg;C</span></h1>
			<div class="card-info">
				<img src="https://openweathermap.org/img/wn/${weatherInfo.icon}.png" alt="">
				<p>${weatherInfo.description}</p>
			</div>
		</div>
	</div>
	`
}

// get Weather
const getWeather = async (city) => {
	const data = await getData(city)
	return data
}

getWeather('london').then((data) => console.log(data))

// get Location
changeLocation.addEventListener('submit', (e) => {
	e.preventDefault();

	const cityName = changeLocation.city.value.trim();
	changeLocation.reset();
	getWeather(cityName)
		.then((data) => updateUI(data))
		.catch((err) => console.log(err.message));

	
})