"use strict"

const container = document.querySelector('.container');
const textColor = document.querySelector('.text-color');
const body = document.querySelector('body');
const values = [
	"1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f"
];

function getGradient() {
	let color = "#";
	for (let i = 0; i < 6; i++) {
		const randomNumber = Math.trunc(Math.random() * values.length);
		color += values[randomNumber];
	}

	return color;
}

function setGradient() {
	const color1 = getGradient();
	const color2 = getGradient();
	const color3 = getGradient();
	const randomDeg = Math.trunc(Math.random() * 360);
	const bgColor = `linear-gradient(
	${randomDeg}deg,
	${color1},
	${color2},
	${color3})
	`
	body.style.background = bgColor;
	textColor.textContent = bgColor;
}

container.addEventListener('click', setGradient);