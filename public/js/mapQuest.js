function initMap() {
	// add your code here
	L.mapquest.key = 'PpuOtN4BHjAW4co2jdzLstl2R94kF0MW';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.8788033, -117.2359121],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	//Add a marker to the map
	L.marker([32.8788033, -117.2359121]).addTo(map);
}