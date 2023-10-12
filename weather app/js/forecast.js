const KEY = 'e08762d01a8e8fce509a5e86eed2c13a'

const getData = async (city) => {
	const base = 'https://api.openweathermap.org/data/2.5/weather'
	const query = `?q=${city}&units=metric&appid=${KEY}`

	const req = await fetch(base + query)
	
	if (req.status !== 200) {
		throw new Error('Error')
	}

	const data = await req.json()

	return data
}
