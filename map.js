const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let mymap = L.map('mapid').setView([4.644692, -74.079616], 12);


L.tileLayer(tilesProvider, {maxZoom: 18,}).addTo(mymap);

function Popup (feature,layer){
	layer.bindPopup(`<h4>Profundidad (m)</h4>${feature.properties.PROFUNDIDA}<h4>Fuente</h4>${feature.properties.ID__FUENTE}`)
};

L.geoJson(BDG,{
	onEachFeature: Popup
}).addTo(mymap);