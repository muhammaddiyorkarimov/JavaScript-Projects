"use strict";

const showBtn = document.getElementById('show-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');



showBtn.addEventListener('click', () => {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
})


closeBtn.addEventListener('click', () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
})

overlay.addEventListener('click', () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
})

document.addEventListener("keydown" , (e) => {
	if (e.key === "Escape") {
		overlay.classList.add('hidden');
		modal.classList.add('hidden');
	}
})

moon.addEventListener("click", () => {
	moon.classList.add('hide');
	sun.classList.remove('hide');
	modal.style.backgroundColor = "#302650"
})

sun.addEventListener("click", () => {
	moon.classList.remove('hide');
	sun.classList.add('hide');
})