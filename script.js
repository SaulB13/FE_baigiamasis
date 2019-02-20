const dropdownButton = document.querySelector('.dropdown-button');
const dropdown = document.querySelector('.dropdown');
const scrollToTop = document.querySelector('.scroll-totop');

dropdownButton.addEventListener('click', function(event) {
	if (dropdown.style.display === 'none') {
		dropdown.style.display = 'block';
	} else {
		dropdown.style.display = 'none';
	}		
});

window.addEventListener('scroll', function(event) {
	if (window.scrollY > 60) {
		scrollToTop.style.display = 'block';
	} else {
		scrollToTop.style.display = 'none';
	}
});

scrollToTop.addEventListener('click', function(event) {
	window.scrollTo(0,0);
});
