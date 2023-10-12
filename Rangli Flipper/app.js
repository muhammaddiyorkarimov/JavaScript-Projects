const btn = document.getElementById('btn');
const colorText = document.getElementById('color-text');
const colors = ['green', 'red', 'yellow', '#f15025', 'rgba(133,122,200)'];

btn.addEventListener('click', () => {
	const randomNumber = Math.floor(Math.random() * colors.length);

	document.body.style.backgroundColor = colors[randomNumber];
	colorText.textContent = colors[randomNumber];
});




