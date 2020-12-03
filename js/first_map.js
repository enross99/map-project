
var mymap = L.map('mapid').setView([34.243431, -79.963831], 4.55);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZW5yb3NzOTkiLCJhIjoiY2tpN3czOTI2MmQzNjJxbXN5OXduODhlNCJ9.f9HfX1pC4ChhYdi9XiXMxw'
}).addTo(mymap);

var marker1 = L.marker([35.045951627427876, -85.30187196334991]).addTo(mymap);
marker1.bindPopup("Chatanooga is where Head of the Hooch is held.");


var marker2 = L.marker([39.951374324144425, -75.1647291733011]).addTo(mymap);
marker2.bindPopup("Philadelphia is where the Dad Vail Regatta is held.");


var marker3 = L.marker([28.60005469144998, -81.34022782598763]).addTo(mymap);
marker3.bindPopup("Rollins College hosted a small regatta in 2018.");


var marker4 = L.marker([34.298058937623786, -83.82265021859327]).addTo(mymap);
marker4.bindPopup("The John Hunter Regatta is held at the Lake Lanier Olympic Course in Gainesville, GA.");
