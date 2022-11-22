"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leaflet_1 = require("leaflet");
var data_1 = require("./dist/data");
var map = new leaflet_1.Map('map').setView([-33.0352864, -71.5951862,], 15);
(0, leaflet_1.tileLayer)(data_1.tileLayers.baseLayers.thunderForest.map.neighbourhood, {
    maxZoom: 17,
    attribution: data_1.tileLayers.baseLayers.thunderForest.atribution
}).addTo(map);
var primeromarket = (0, leaflet_1.marker)([-33.035997, -71.5976893,]).addTo(map);
var segundomarket = (0, leaflet_1.marker)([-33.0361568, -71.594659,]).addTo(map);
map.fitBounds([
    [primeromarket.getLatLng().lat, primeromarket.getLatLng().lng],
    [segundomarket.getLatLng().lat, segundomarket.getLatLng().lng]
]);
//# sourceMappingURL=index.js.map