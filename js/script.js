var iconUrl = "http://maps.google.com/mapfiles/ms/icons/";
var locations1 = [
    ['Bondi Beach', -33.890542, 151.274856, iconUrl + 'flag.png', 4],
    ['Coogee Beach', -33.923036, 151.259052, iconUrl + 'flag.png', 5],
    ['Cronulla Beach', -34.028249, 151.157507, iconUrl + 'flag.png', 3],
    ['Manly Beach', -33.80010128657071, 151.28747820854187, iconUrl + 'flag.png', 2],
    ['Maroubra Beach', -33.950198, 151.259302, iconUrl + 'flag.png', 1]
];

var locations2 = [
    ['Bondi Beach', -33.900542, 151.274856, iconUrl + 'hospitals.png', 4],
    ['Coogee Beach', -33.903036, 151.259052, iconUrl + 'hospitals.png', 5],
    ['Cronulla Beach', -34.108249, 151.157507, iconUrl + 'hospitals.png', 3],
    ['Manly Beach', -33.70010128657071, 151.28747820854187, iconUrl + 'hospitals.png', 2],
    ['Maroubra Beach', -33.990198, 151.259302, iconUrl + 'hospitals.png', 1]
];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(-33.92, 151.25),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();
var markers = [];
var marker, i;
function insaat1(locations) {

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation: google.maps.Animation.DROP,
            icon: locations[i][3]
        });
        markers.push(marker);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));

    }
}
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
function clearMarkers() {
    setMapOnAll(null);
}
insaat1(locations1);

function projeDegistir(Ibutton, mevkiler, merkezLat, merkezLng) {
    Ibutton.click(function () {
        clearMarkers();
        insaat1(mevkiler);
        map.setZoom(10);
        map.setCenter(new google.maps.LatLng(merkezLat, merkezLng));
    });
}
projeDegistir($('#insaat2'),locations2,-33.92, 151.25);
projeDegistir($('#insaat1'),locations1,-33.92, 151.25);
