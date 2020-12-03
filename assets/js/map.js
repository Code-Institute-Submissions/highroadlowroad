//Map Javascript
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 5,
  center: {
    lat: 54.772640,
    lng: -2.450464
  }
});

//Markers
const myMarkers = [
//City
  //Sights
  {coords:{lat: 55.94859,lng: -3.19991},iconImage: 'assets/img/markerY.png',content: '<a href="https://www.edinburghcastle.scot/" class="mStyle" target="_blank">Edinburgh Castle</a>'},
  {coords:{lat: 55.94699,lng: -3.19056},iconImage: 'assets/img/markerY.png',content: '<a href="https://www.nms.ac.uk/national-museum-of-scotland/" class="mStyle" target="_blank">Museum of Scotland</a>'},
  {coords:{lat: 55.94873,lng: -3.19326},iconImage: 'assets/img/markerY.png',content: '<p class="mStyle">Victoria St</p>'},
  {coords:{lat: 55.94716,lng: -3.19279},iconImage: 'assets/img/markerY.png',content: '<p class="mStyle">Greyfriars Kirk</p>'},
  {coords:{lat: 55.95811,lng: -3.20504},iconImage: 'assets/img/markerY.png',content: '<p class="mStyle">Circus Lane</p>'},
  {coords:{lat: 55.95189,lng: -3.21804},iconImage: 'assets/img/markerY.png',content: '<p class="mStyle">Water of Leith</p>'},
  {coords:{lat: 55.94408,lng: -3.16183},iconImage: 'assets/img/markerY.png',content: '<p class="mStyle">Arthurs Seat</p>'},
  //Eating
  {coords:{lat: 55.95478,lng: -3.19768},iconImage: 'assets/img/markerR.png',content: '<a href="http://www.urban-angel.co.uk/" class="mStyle" target="_blank">Urban Angel</a>'},
  {coords:{lat: 55.95797,lng: -3.18947},iconImage: 'assets/img/markerR.png',content: '<a href="https://educatedflea.co.uk/" class="mStyle" target="_blank">Educated Flea</a>'},
  {coords:{lat: 55.9541,lng: -3.18569},iconImage: 'assets/img/markerR.png',content: '<a href="https://www.howies.uk.com/" class="mStyle" target="_blank">Howies</a>'},
  {coords:{lat: 55.9536,lng: -3.19247},iconImage: 'assets/img/markerR.png',content: '<a href="https://www.dishoom.com/edinburgh/" class="mStyle" target="_blank">Dishoom</p>'},
  //Drinking
  {coords:{lat: 55.95029,lng: -3.19167},iconImage: 'assets/img/markerP.png',content: '<a href="https://devilsadvocateedinburgh.co.uk/" class="mStyle" target="_blank">Devils Advocate</a>'},
  {coords:{lat: 55.959,lng: -3.19712},iconImage: 'assets/img/markerP.png',content: '<a href="https://www.cumberlandbar.co.uk/" class="mStyle" target="_blank">Cumberland Bar</a>'},
  {coords:{lat: 55.94986,lng: -3.19358},iconImage: 'assets/img/markerP.png',content: '<a href="https://www.whiskirooms.co.uk/" class="mStyle" target="_blank">Whiski Rooms</a>'},
  {coords:{lat: 55.94815,lng: -3.18692},iconImage: 'assets/img/markerP.png',content: '<a href="https://www.thejazzbar.co.uk/" class="mStyle" target="_blank">Jazz Bar</a>'},
  {coords:{lat: 55.942,lng: -3.14854},iconImage: 'assets/img/markerP.png',content: '<a href="https://www.thesheepheidedinburgh.co.uk/" class="mStyle" target="_blank">Sheep Heid Inn</a>'},
  //Sleeping
  {coords:{lat: 55.95315,lng: -3.18957},iconImage: 'assets/img/markerG.png',content: '<a href="https://www.roccofortehotels.com/hotels-and-resorts/the-balmoral-hotel/" class="mStyle" target="_blank">The Balmoral</a>'},
  {coords:{lat: 55.94979,lng: -3.20733},iconImage: 'assets/img/markerG.png',content: '<a href="https://www.hilton.com/en/hotels/ednchwa-waldorf-astoria-edinburgh-the-caledonian/" class="mStyle" target="_blank">The Waldorf Astoria</a>'},
  {coords:{lat: 55.95068,lng: -3.2222},iconImage: 'assets/img/markerG.png',content: '<a href="https://www.britanniahotels.com/hotels/the-britannia-hotel-edinburgh" class="mStyle" target="_blank">Britannia Hotel</a>'},
  {coords:{lat: 55.95372,lng: -3.18759},iconImage: 'assets/img/markerG.png',content: '<a href="https://www.travelodge.co.uk/hotels/428/Edinburgh-Central-Waterloo-Place-hotel" class="mStyle" target="_blank">Travelodge</a>'},
//Countryside
  //Sights
  {coords:{lat: 57.32285,lng: -4.42438},iconImage: 'assets/img/markerY.png',content: '<p class="mStyle">Loch Ness</p>'},
  {coords:{lat: 56.87615,lng: -5.43386},iconImage: 'assets/img/markerY.png',content: '<p class="mStyle">Glenfinnan Viaduct</p>'},
  {coords:{lat: 57.50711,lng: -6.18308},iconImage: 'assets/img/markerY.png',content: '<p class="mStyle">Old Man of Storr</p>'},
  {coords:{lat: 57.30233,lng: -6.35674},iconImage: 'assets/img/markerY.png',content: '<p class="mStyle">Talisker Distillery</p>'},
  {coords:{lat: 56.66783,lng: -4.9866},iconImage: 'assets/img/markerY.png',content: '<p class="mStyle">Glen Etive</p>'},
  {coords:{lat: 58.64387,lng: -3.07011},iconImage: 'assets/img/markerY.png',content: `<p class="mStyle">John O'Groats</p>`},
  //Eating
  {coords:{lat: 58.56248,lng: -4.0111},iconImage: 'assets/img/markerR.png',content: '<a href="http://www.strathyinn.com/" class="mStyle" target="_blank">Strathy Inn, Thurso</a>'},
  {coords:{lat: 57.47702,lng: -4.22426},iconImage: 'assets/img/markerR.png',content: '<a href="https://number27inverness.com/" class="mStyle" target="_blank">No.27, Inverness</a>'},
  {coords:{lat: 56.82146,lng: -5.0955},iconImage: 'assets/img/markerR.png',content: '<a href="https://www.ben-nevis-inn.co.uk/" class="mStyle" target="_blank">Nevis Inn and Bar, Inverness</a>'},
  {coords:{lat: 58.44234,lng: -3.09061},iconImage: 'assets/img/markerR.png',content: '<a href="https://www.jdwetherspoon.com/pub-histories/scotland/highland/the-alexander-bain-wick" class="mStyle" target="_blank">Alexander Bain, Wick</a>'},
  {coords:{lat: 57.41118,lng: -6.19109},iconImage: 'assets/img/markerR.png',content: '<a href="https://www.tripadvisor.com/ShowUserReviews-g551883-d1229373-r135563902-Sea_Breezes-Portree_Isle_of_Skye_The_Hebrides_Scotland.html" class="mStyle" target="_blank">Sea Breezes, Skye</a>'},
  //Stay
  {coords:{lat: 57.4037,lng: -4.32949},iconImage: 'assets/img/markerG.png',content: '<a href="https://www.aldouriecastle.co.uk/" class="mStyle" target="_blank">Aldourie Castle, Inverness <br>Accom.</a>'},
  {coords:{lat: 56.88426,lng: -4.70129},iconImage: 'assets/img/markerG.png',content: '<a href="http://www.wildnurture.co.uk/" class="mStyle" target="_blank">Natural Retreats, Fort William<br>Accom.</a>'},
  {coords:{lat: 57.41568,lng: -6.19659},iconImage: 'assets/img/markerG.png',content: '<a href="https://www.tripadvisor.com/Hotel_Review-g551883-d14031883-Reviews-or5-Oronsay_B_B-Portree_Isle_of_Skye_The_Hebrides_Scotland.html" class="mStyle" target="_blank">Oronsay, Skye<br>Accom.</a>'},
  {coords:{lat: 58.63798,lng: -3.13897},iconImage: 'assets/img/markerG.png',content: '<a href="http://retreatonthe500.co.uk/" class="mStyle" target="_blank">Retreat on the 500, Wick<br>Accom.</a>'}
  ];

//Marker Loop
for(let i = 0; i < myMarkers.length; i++){
  addMyMarker(myMarkers[i]);
}

//Marker Function
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