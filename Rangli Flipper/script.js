const btn = document.getElementById('btn');
const colorText = document.getElementById('color-text');
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

function getGradientColor() {
	let color = '#'
	for (let i = 0; i < 6; i++) {
		const randomNumber = Math.floor(Math.random() * values.length);
		color += values[randomNumber]
	}
	document.body.style.backgroundColor = color;
	colorText.textContent = color;
}

btn.addEventListener('click', () => {
	getGradientColor()
})