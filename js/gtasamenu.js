let menuAudio = new Audio('./sounds/button.wav');
let menuOptions = document.getElementsByClassName('menu-option');

Array.from(menuOptions).forEach(option => {
	option.addEventListener('mouseenter', function() {
		menuAudio.play();
	});
});