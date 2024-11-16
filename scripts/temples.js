const cheeseburger = document.querySelector('.cheeseburger')
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
	cheeseburger.classList.toggle('show');
	hamburger.classList.toggle('show');
});