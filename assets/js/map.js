//Map Javascript
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 5,
  center: {
    lat: 54.772640,
    lng: -2.450464
  }
});

//City Markers
const myMarkers = [
//City
  //Sights
  {coords:{lat: 55.94859,lng: -3.19991},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Edinburgh Castle</p>'},
  {coords:{lat: 55.94699,lng: -3.19056},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Museum of Scotland</p>'},
  {coords:{lat: 55.94873,lng: -3.19326},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Victoria St</p>'},
  {coords:{lat: 55.94716,lng: -3.19279},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Greyfriars Kirk</p>'},
  {coords:{lat: 55.95811,lng: -3.20504},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Circus Lane</p>'},
  {coords:{lat: 55.95189,lng: -3.21804},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Water of Leith</p>'},
  {coords:{lat: 55.94408,lng: -3.16183},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Arthurs Seat</p>'},
  //Eating
  {coords:{lat: 55.95478,lng: -3.19768},iconImage: '../assets/img/markerR.png',content: '<p class="mStyle">Urban Angel</p>'},
  {coords:{lat: 55.95797,lng: -3.18947},iconImage: '../assets/img/markerR.png',content: '<p class="mStyle">Educated Flea</p>'},
  {coords:{lat: 55.9541,lng: -3.18569},iconImage: '../assets/img/markerR.png',content: '<p class="mStyle">Howies</p>'},
  {coords:{lat: 55.9536,lng: -3.19247},iconImage: '../assets/img/markerR.png',content: '<p class="mStyle">Dishoom</p>'},
  //Drinking
  {coords:{lat: 55.95029,lng: -3.19167},iconImage: '../assets/img/pmarker.png',content: '<p class="mStyle">Devils Advocate</p>'},
  {coords:{lat: 55.959,lng: -3.19712},iconImage: '../assets/img/pmarker.png',content: '<p class="mStyle">Cumberland Bar</p>'},
  {coords:{lat: 55.94986,lng: -3.19358},iconImage: '../assets/img/pmarker.png',content: '<p class="mStyle">Whiski Rooms</p>'},
  {coords:{lat: 55.94815,lng: -3.18692},iconImage: '../assets/img/pmarker.png',content: '<p class="mStyle">Jazz Bar</p>'},
  {coords:{lat: 55.942,lng: -3.14854},iconImage: '../assets/img/pmarker.png',content: '<p class="mStyle">Sheep Heid Inn</p>'},
  //Sleeping
  {coords:{lat: 55.95315,lng: -3.18957},iconImage: '../assets/img/markerG.png',content: '<p class="mStyle">The Balmoral</p>'},
  {coords:{lat: 55.94979,lng: -3.20733},iconImage: '../assets/img/markerG.png',content: '<p class="mStyle">The Waldorf Astoria</p>'},
  {coords:{lat: 55.95068,lng: -3.2222},iconImage: '../assets/img/markerG.png',content: '<p class="mStyle">Britannia Hotel</p>'},
  {coords:{lat: 55.95372,lng: -3.18759},iconImage: '../assets/img/markerG.png',content: '<p class="mStyle">Travelodge</p>'},
//Countryside
  //Sights
  {coords:{lat: 57.32285,lng: -4.42438},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Loch Ness</p>'},
  {coords:{lat: 56.87615,lng: -5.43386},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Glenfinnan Viaduct</p>'},
  {coords:{lat: 57.50711,lng: -6.18308},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Old Man of Storr</p>'},
  {coords:{lat: 57.30233,lng: -6.35674},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Talisker Distillery</p>'},
  {coords:{lat: 56.66783,lng: -4.9866},iconImage: '../assets/img/markerY.png',content: '<p class="mStyle">Glen Etive</p>'},
  {coords:{lat: 58.64387,lng: -3.07011},iconImage: '../assets/img/markerY.png',content: `<p class="mStyle">John O'Groats</p>`},
  //Eating
  {coords:{lat: 58.56248,lng: -4.0111},iconImage: '../assets/img/markerR.png',content: '<p class="mStyle">Strathy Inn, Thurso</p>'},
  {coords:{lat: 57.47702,lng: -4.22426},iconImage: '../assets/img/markerR.png',content: '<p class="mStyle">No.27, Inverness</p>'},
  {coords:{lat: 56.82146,lng: -5.0955},iconImage: '../assets/img/markerR.png',content: '<p class="mStyle">Nevis Inn and Bar, Inverness</p>'},
  {coords:{lat: 58.44234,lng: -3.09061},iconImage: '../assets/img/markerR.png',content: '<p class="mStyle">Alexander Bain, Wick</p>'},
  {coords:{lat: 57.41118,lng: -6.19109},iconImage: '../assets/img/markerR.png',content: '<p class="mStyle">Sea Breezes, Skye</p>'},
  //Stay
  {coords:{lat: 57.4037,lng: -4.32949},iconImage: '../assets/img/markerG.png',content: '<p class="mStyle">Aldourie Castle, Inverness <br>Accom.</p>'},
  {coords:{lat: 56.88426,lng: -4.70129},iconImage: '../assets/img/markerG.png',content: '<p class="mStyle">Natural Retreats, Fort William<br>Accom.</p>'},
  {coords:{lat: 57.41568,lng: -6.19659},iconImage: '../assets/img/markerG.png',content: '<p class="mStyle">Oronsay, Skye<br>Accom.</p>'},
  {coords:{lat: 58.63798,lng: -3.13897},iconImage: '../assets/img/markerG.png',content: '<p class="mStyle">Retreat on the 500, Wick<br>Accom.</p>'}
  ];

//City Marker Loop
for(let i = 0; i < myMarkers.length; i++){
  addMyMarker(myMarkers[i]);
}

//City Marker Function
function addMyMarker(props){
  const mapMarker = new google.maps.Marker({
    position: props.coords,
    map: map,
    icon: props.iconImage
  });
  if(props.content){
    const iWindow = new google.maps.InfoWindow({
      content: props.content,
  });
    mapMarker.addListener('click', function(){
      iWindow.open(map, mapMarker);
  });
  }
}

}