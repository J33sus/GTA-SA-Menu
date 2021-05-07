let mapLegendTitle = document.getElementById('map-legend-title');
let mapLegend = document.getElementById('map-legend');

document.onkeydown = function(key) {
	if(key.key.toLowerCase() == 'l') {
		mapLegend.classList.remove('menu-disable');
		mapLegendTitle.classList.remove('menu-disable');
	}
};
document.onkeyup = function(key) {
	if(key.key.toLowerCase() == 'l') {
		mapLegend.classList.add('menu-disable');
		mapLegendTitle.classList.add('menu-disable');
	}
};