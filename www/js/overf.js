var f = 0;
var finestres = ["#Ubicacio", "#Contacte", "#Send"];
var tope = finestres.length;
var show = "Calgary88 shown";
var hidd = "Calgary88 hidden";

var pointed = "dot onPointer";
var notPointed = "dot offPointer";
window.onload = load;

var geocoder;
var infoWindow;
var codipostal_comarca = new Map(); //on guardar els codis postals i la seva info associada
var id_cpcomarques = '1buewNhQVAmy_lEdH_T1iAeZMeQFclPyy0BHa_rOOU7Y';
var Municipis = [];
var revMap = new Map();
var marker, map;

executaAJAX3(id_cpcomarques, associaCPComarques, "");

document .addEventListener('keydown', (e) => {
  if(e.key == "Escape"){
    desplaça_components();
  }
  if(e.key == "ArrowRight"){
    if(f+1 != tope){
      canvia_finestra(f+1);
    }
  }
  if(e.key == "ArrowLeft"){
    if(f-1 >= 0 ){
      canvia_finestra(f-1);
    }
  }

});

function canvia_finestra(f2){
  if($("#d"+f2).css("display") == "none") return;
  // coloreja aquest
  $("#d"+f2)[0].className = pointed;
  //descoloreja els altres
  for(var i = 0; i < 3; i++){
    if(String(i) != f2){
      $('#d'+String(i))[0].className = notPointed;
    }
  }
  $(finestres[f])[0].className = hidd;
  f = f2;
  $(finestres[f])[0].className = show;
  if(finestres[f] == "#Cobertures") {
    $(finestres[f])[0].className = show + ' grid';
    $('.el').css('height', $('.nel').innerHeight());				//tamany de la caixa
  }
}

function load(){

  // col·loca punts inferiors
  for(var i = 0;  i < $(".dot").length; i++){
    $(".dot")[i].addEventListener('click', e => {
      canvia_finestra(e.target.id[1]); // 1 per el segon caràcter
    });
  }
  $("#geo")[0].addEventListener('click', activar_geolocalitzacio);
  $("#Lateral")[0].addEventListener('click', e =>{
    desplaça_components();
  });

}

function desplaça_components(){
  $('.CaixaMenu').toggleClass('minusOnLeft').toggleClass('minusOnRight');
  $('.CaixaPetita').toggleClass('onLeft').toggleClass('onRight');
  $('.CaixaGran').toggleClass('onLeft').toggleClass('onRight');
  $('.Botons').toggleClass('onLeft').toggleClass('onRight');
  $('.ContenidorDots').toggleClass('onLeftDot').toggleClass('onRightDot');
}

class Detall{
  constructor(titol, contingut){
    this.titol = titol;
    this.contingut = contingut;
  }
}

function returnDataParsed(data){
  var start = 25;
  var end = data.length - 2;
  var JSONText = data.slice(start,end);
  JParsedText = JSON.parse(JSONText);
  return JParsedText;
}

function initMap() {
	marker;
      var california = {lat: 41.4419, lng: 1.5719};
      var map = new google.maps.Map(document.getElementById('Mapa'), {
        center: california,
        zoom: 8
  });


  infoWindow = new google.maps.InfoWindow();
  geocoder =new google.maps.Geocoder;


      google.maps.event.addListener(map, 'click', function(event) {
    if (marker != undefined) marker.setMap(null);

    marker = new google.maps.Marker({
      position: event.latLng,
      map: map
    });
    document.getElementById('Latitud').value = (marker.getPosition().lat());
    document.getElementById('Longitud').value =(marker.getPosition().lng());
    geocodeLatLng(geocoder, map, infoWindow, marker);
  });

}

function geocodeLatLng(geocoder, map, infowindow, marker) {
	var latlng = {lat:marker.getPosition().lat(), lng: marker.getPosition().lng()};
	var com = "";
	geocoder.geocode({'location': latlng}, function(results, status) {
		if (status === 'OK') {

			if (results[0]) {
				infowindow.setContent(results[0].formatted_address );
				infowindow.open(map, marker);
				$("#d2").css('display', 'inline-block');
				var c1 = "";
				var l = results[0].address_components.length;
				var r0 = results[0].address_components;
				for(var i = 0; i < l  ; i++){
					rln = r0[i].long_name;
					c1 = revMap.get(rln);
					if(c1 == undefined){
						revMap.forEach(comparastring);
						console.log("foreach");
					}
					else{
						com = c1;
						document.getElementById('Municipi').value = rln;
						break;
					}
				}
			}
			else {
			  window.alert('No results found');
			}

		} else {
		window.alert('Geocoder failed due to: ' + status);
		}
	});
}

function comparastring(value, key, map) {
	if(rln.includes(key)){
		c1 = value;
	}
}

function omplemunicipis(value, key, map) {
	Municipis.push(new Detall(value.municipi, value.comarca));
	revMap.set(value.municipi.split(',')[0], value.comarca);
}

function associaCPComarques(data){
	var data = returnDataParsed(data);
	for(var i = 0 ; i < data.feed.entry.length; i++){
		var nom = data.feed.entry[i].gsx$codipostal.$t;
		var cp = {
			comarca : data.feed.entry[i].gsx$comarca.$t,
			municipi : data.feed.entry[i].gsx$nommunicipi.$t
		}
		codipostal_comarca.set(nom, cp);
	}

	codipostal_comarca.forEach(omplemunicipis);

}

function executaAJAX3(id, todo, string){
	/*id: id del document que llegeix*/
	/*todo: funcio a fer*/
	/*string: per identificar que esta fent*/
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4

            if (xmlhttp.status == 200) {
				todo(xmlhttp.responseText);

				/*en el primer executa ajax s'obte els canals*/
				if(string == "canals"){
			   		done_emissores = true;
			   		executaAJAX3(id_comarquescanals, omple_canalscomarca, "canalscomarca");
			   	}
			   	/*en el segon s'obtenen quins canals te cada comarca, sense el primer no es fa el segon*/
			   	if( string == "canalscomarca"){
			   		done_cc = true;
			   		cargaDatosSegonsID(map);
			   	}

            }
            else if (xmlhttp.status == 400) {
              console.log('There was an error 400');

            }
            else {
               console.log('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/"+id+"/1/public/values?alt=json-in-script&callback=callback", true);
    xmlhttp.send();
}


function activar_geolocalitzacio(){
		navigator.geolocation.getCurrentPosition(function(position) {
				if (marker != undefined) marker.setMap(null);

				marker = new google.maps.Marker({
					position: {lat:position.coords.latitude, lng:position.coords.longitude},
					map: map,
					icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
				});
				geocodeLatLng(geocoder, map, infoWindow, marker);
				document.getElementById('Latitud').value = (marker.getPosition().lat());
				document.getElementById('Longitud').value =(marker.getPosition().lng());
		});
}
