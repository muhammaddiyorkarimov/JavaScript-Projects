const closeBtn = document.getElementById('close-btn');
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebarMenu = document.querySelector('.sidebar-menu');

hamburgerBtn.addEventListener('click', () => {
	toggleHidden()
});
closeBtn.addEventListener('click', () => {
	toggleHidden()
});

function toggleHidden() {
	sidebarMenu.classList.toggle('toggle-hidden')
	console.log('salom');
}