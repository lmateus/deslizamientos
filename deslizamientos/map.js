const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let mymap = L.map('mapid').setView([4.5818, -74.14], 10);


L.tileLayer(tilesProvider, {maxZoom: 18,}).addTo(mymap);

function Popup (feature,layer){
	layer.bindPopup("<h2>Info del evento</h2><h3>Descripción</h3><p>" + feature.properties.Descripcio +"</p><h3>Latitud</h3><p>" + feature.properties.Lat_desliz +"</p><h3>Longitud</h3><p>" + feature.properties.Long_desli +"</p>")
};
var marker = L.marker([4.581855, -74.141236]).addTo(mymap);
L.geoJson(DeslizamientoSismo_Col,{
	onEachFeature: Popup
}).addTo(mymap);