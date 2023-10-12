'use strict';

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
	nav.classList.toggle('success');
	if (nav.classList.contains('success')){
		nav.style.display = 'block'
	} else {
		nav.style.display = 'none'
	}
})