import { Map,marker,tileLayer } from 'leaflet';
import { tileLayers } from './dist/data';


const map = new Map('map').setView([-33.0352864, -71.5951862,], 15);
tileLayer(tileLayers.baseLayers.thunderForest.map.neighbourhood, {
    maxZoom: 17,
    attribution: tileLayers.baseLayers.thunderForest.atribution
}).addTo(map);

const primeromarket = marker([-33.035997,-71.5976893,]).addTo(map);
const segundomarket = marker([-33.0361568,-71.594659,]).addTo(map);
map.fitBounds([
    [primeromarket.getLatLng().lat, primeromarket.getLatLng().lng],
    [segundomarket.getLatLng().lat, segundomarket.getLatLng().lng]
]);