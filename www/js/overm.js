var f = 0;
var finestres = ["#Ubicacio", "#Cobertures", "#gform"];
var tope = finestres.length;
var show = "Calgary88 shown";
var hidd = "Calgary88 hidden";

var pointed = "dot onPointer";
var notPointed = "dot offPointer";

var JParsedText;

var array_marcadors = [];
var map;
var infoWindow;

var canals = [];
var pobles = [];
var markclusterer;

var maplatlongs = new Map();

var todo = true;

var im;
var typemap = "";

var styledMapType;
var styledMapType2;

var inProgress;

inProgress = setValorInProgress();

window.onload = load;

// informa a l'usuari dels canvis de conexió
window.addEventListener('online',  updateIndicator);
window.addEventListener('offline', updateIndicator);
updateIndicator();


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

window.onload = load;
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
    $(finestres[f])[0].className = show;
    $('.el').css('height', $('.nel').innerHeight());				//tamany de la caixa
  }


  	document.addEventListener('keydown', (event) => {
  	  const keyName = event.key;
  	  /*if(keyName == '1'){
  			for(var i = 0;  i < marcadors.length; i++){
  				if(marcadors[i].icon.includes("yellow")){
  					marcadors[i].setVisible(!marcadors[i].visible);
  				}
  			}
  		}
  		if(keyName == '2'){
  			for(var i = 0;  i < marcadors.length; i++){
  				if(marcadors[i].icon.includes("red")){
  					marcadors[i].setVisible(!marcadors[i].visible);
  				}
  			}
  		}
  		if(keyName == '3'){
  			if(markerCluster.markers_.length != 0){
  				markerCluster.clearMarkers();
  				marcadors.forEach(element => element.setMap(map));
  			}
  			else{
  				markerCluster.addMarkers(marcadors);
  			}

  		}*/
  		if(keyName == "Enter"){

  		}
  	});
}

function load(){

  // col·loca punts inferiors
  for(var i = 0;  i < $(".dot").length; i++){
    $(".dot")[i].addEventListener('click', e => {
      canvia_finestra(e.target.id[1]); // 1 per el segon caràcter
    });
  }
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


function setIcon(){
	/*configura la icona*/
	im = {
		url: 'img/logo-IPTV3.png',
		scaledSize: new google.maps.Size(30, 26),
	};

}

/*petició ajax*/
function cargaDatosSegonsID(){
	var data_IPTV = '14hj60kgxzQvGsONYW--1Q7y4wxycAvoe7lDJxzBH-sA';
	try{peticioXMLHttp(data_IPTV);}
	catch(err){console.log("error while loading data: " + err); }
}

function setValorInProgress(){
	return 1;
}

/*en totes les iptv es demana els mateixos paràmetres*/
function afegeixPoble(pobles, entry){

	var p = new Poble(entry['gsx$entitat'].$t);
	p.descripcio.push(new Detall("Entitat", entry['gsx$entitat'].$t));
	p.descripcio.push(new Detall("Tipus", entry['gsx$tipus'].$t));
	p.descripcio.push(new Detall("Directe URL", entry['gsx$directeurl'].$t));
	p.descripcio.push(new Detall("A la Carta", entry['gsx$cartaurl'].$t));
	p.descripcio.push(new Detall("Youtube", entry['gsx$youtubeurl'].$t));
	p.descripcio.push(new Detall("XipTV", entry['gsx$xiptvurl'].$t));
	p.descripcio.push(new Detall("Nom comercial", entry['gsx$nomcomercial'].$t));
	p.descripcio.push(new Detall("Municipi", entry['gsx$municipi'].$t));
	p.descripcio.push(new Detall("TDT", entry['gsx$canaltdt'].$t));

	pobles.push(p);


}

function initMap() {
		todo = !todo;
		try{
			var catalunya = {lat: 41.385900681193434, lng: 2.1711516380310063};
			infoWindow = new google.maps.InfoWindow();
			map = new google.maps.Map(document.getElementById('Mapa'), {
				center: catalunya,
				zoom: 8,
				zoomControl: false,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				rotateControl: false,
				fullscreenControl: false
			});
			//cargaDatosSegonsID();
		}
		catch(err){
			console.log("error: " + err);
		}
		typemap = "bright";
}(cargaDatosSegonsID());

function coloca_junts_separats(valuemap, latfield, lonfield){
	var lng_radius = 0.0003,         // degrees of longitude separation
	lat_to_lng = latfield / lonfield,  // lat to long proportion in Warsaw
	step = 2 * Math.PI / 8,
	angle = 0.5 + (step * valuemap),
	lat_radius = lng_radius / lat_to_lng;
	lonfield = lonfield + (Math.cos(angle) * lng_radius);
	latfield = latfield + (Math.sin(angle) * lat_radius);
	return [latfield, lonfield];

}

function extreu_latlon_from(entry){
	var  latlon, valuemap;
	//ubicacio
	try{[latfield, lonfield] = extreu_latlang_dentry(entry)}
	catch(e){return [undefined, undefined]}
	latlon = latfield.toString()+lonfield.toString()
	valuemap = (maplatlongs.get(latlon) == undefined ? 0 : maplatlongs.get(latlon))+1;
	maplatlongs.set(latlon, valuemap);
	[latfield, lonfield] = coloca_junts_separats(valuemap, latfield, lonfield);
	return [latfield, lonfield];

}

function omple_info(poble){
	for(var i = 0;  i < poble.descripcio.length; i++){
		var t,c;
		t = '<li class = "top">'+ poble.titol(i) +'</li>';
		c = (poble.contingut(i) == "" ) ? "--" : poble.contingut(i);
		if(c.includes("http") || c.includes("www")){
			c = '<a class="url" href="'+c+'">'+c;
		}
		$('ul#list1').append(t);
		$('ul#list1').append('<li>'+c+'</li>');
	}
}

function configura_infowindow_poble(poble, marker){
	var titoliw, content;
	// defineix

	titoliw = poble.poble == "" ? poble.descripcio[6] : poble.poble ;
	content = '<span id="contentInsideMap">' + titoliw + '</span>'

	// obre

	infoWindow.setContent(content);
	infoWindow.open(map,marker);

	// enllaça amb funcio
	$('#contentInsideMap').bind('click', function() {
		canvia_finestra(1);
	});


}

function configura_dades_formulari_comentaris(poble, marker){

	document.getElementById('Latitud').value = (marker.position.lat());
	document.getElementById('Longitud').value = (marker.position.lng());
	document.getElementById('Entitat').value = (poble.poble);
	$("h4")[0].innerText = "Comentari  sobre: "+poble.poble;
}

function configura_icona_marcadors(marker){

	if(marker.getIcon().url == "img/logo-IPTV2.png"){
		canvia_finestra(1);

	}
	else{
		for(var i = 0; i < array_marcadors.length; i++){
			if (array_marcadors[i].getIcon().url == 'img/logo-IPTV2.png'){
				im = {
					url: 'img/logo-IPTV3.png',
					scaledSize: new google.maps.Size(30, 26),
				};
				array_marcadors[i].setIcon(im);
			}
		}
		im = {
			url: 'img/logo-IPTV2.png',
			scaledSize: new google.maps.Size(30, 26),
		};
		marker.setIcon(im);
	}
}

function omple_mapa_amb_data_de_comarca_nom(data){
	data = parseja_data(data);
	let nohihainfo = !data || !data.feed
	if (nohihainfo) return;

	for (var i = 0; i < data.feed.entry.length; i++){
		var entry, marker;

		entry = data.feed.entry[i];
		marker = coloca_marcador(entry, map, array_marcadors);
		afegeixPoble(pobles, entry);

		if(marker == undefined) break;

		(function(marker, poble){
			google.maps.event.addListener(marker, 'click', function(e){

				configura_infowindow_poble(poble, marker);			//prepara infowindow
				configura_dades_formulari_comentaris(poble, marker)	//dades pel formulari
				configura_icona_marcadors(marker);					//

				$('ul#list1').children().remove();	// borra info previa
				omple_info(poble);					// coloca nova info
        $("#d1").css('display', 'inline-block');
        $("#d2").css('display', 'inline-block');

			})
		})(marker, pobles[pobles.length-1]);
	}

}

function parseja_data(data){

	//treiem els primers caracters i ultims per poder parsejar
	//fem el parsing i ho retornem
	var start = 25;
	var end = data.length - 2;
	var JSONText = data.slice(start,end);
	JParsedText = JSON.parse(JSONText);
	return JParsedText;
}

function extreu_latlang_dentry(entry){

	//mira de totes les entries quina és latfield i quina és lonfield
	//si no ho troba error, sino retorna la tupla

	var latfield = '', lonfield = '';
	for (var f in entry) {
		if (f.match(/\$Lat/i)){
			latfield = f;
		}
		if (f.match(/\$Lon/i)){
			lonfield = f;
		}
	}
	if((latfield != '')  && (lonfield != '')){
		latfield = Number(entry[latfield].$t);
		lonfield = Number(entry[lonfield].$t);
	}
	else{
		throw "no latfield lonfield";
	}
	return [latfield, lonfield];
}

function coloca_marcador(entry, map, array_marcadors){

	//si es una comarca obte el nom de municipi i posa icona normal
	//sino, o es usuari o es iptv, "" es iptv, el titol, es el  nom de la entitat
	//ambdos posen icona, que canvia segons el mapa
	//coloca el marcador i ho enxufa al array de marcadors
	//retorna el marker


	var latfield, lonfield;
	[latfield, lonfield] = extreu_latlon_from(entry);
	if(latfield == undefined && lonfield == undefined) return undefined;


	var title = 'gsx$entitat';
	setIcon();
	var marker = new google.maps.Marker({
		position: {lat: latfield, lng: lonfield},
		title: entry[title].$t,
		icon: im,
		map: map
	});

	marker.setMap(map);
	array_marcadors.push(marker);
	return marker;

}

// GESTIÓ XMLHttpRequest

function peticioXMLHttp(id){

	//es posa la url segons la id, es diu que es vol obtenir
	//si tot va bé, vol dir que tenim info i la administrem
	//sino igualment, quan acaba ho comunica

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
			   omple_mapa_amb_data_de_comarca_nom(xmlhttp.responseText);
			   handleComplete();
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


function handleBefore() {
	//innecessari de moment, comunica que hi ha un nou proces fent-se
	inProgress++;
};

function handleComplete() {
	//es diu que hi ha un proces menys i si no n'hi ha cap s'executa el clusteritzador
	if (!--inProgress) {
		// do what's in here when all requests have completed.
		console.log(inProgress);
		markerCluster = new MarkerClusterer(map, array_marcadors,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	}
};
//si el mapa ja esta fet
function updateIndicator() {
	// Show a different icon based on offline/online
	if(!todo){
		if(navigator.onLine){
			location.reload();
		}
		else{
			alert("S'ha perdut la connexió. En restablir-se es recarregarà la pàgina");
		}
	}
	else{
		if(!navigator.onLine){
			alert("En aquests moments no setà connectat. En establir-se es recarregarà la pàgina");

		}
	}
}

//es configuren dos estils de mapa diferents
function setStyles(){
	styledMapType = new google.maps.StyledMapType(
            [
			{elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ],
            {name: 'Dark Map'});
			styledMapType2 = new google.maps.StyledMapType(
            [
              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
            ],
            {name: 'Afternoon Map'});
}

//s'escolta els nivells de llum, si es redueix es posa el mode nocturn
//nomes disponible a firefox
window.addEventListener('devicelight', (e) => {

	if(typemap != ""){
		if(event.value < 50){
			map.mapTypes.set('dark_map', styledMapType);
			map.setMapTypeId('dark_map');
			typemap = "dark_map"
		}
		else{
			map.mapTypes.set('afternoon_map', styledMapType2);
			map.setMapTypeId('afternoon_map');
			typemap = "afternoon_map";
		}
	}

});

class Poble{
	constructor(poble){
		this.poble = poble;
		this.latitud;
		this.longitud;
		this.tipus;
		this.titol;
		this.descripcio = [];
		this.date;
		this.comarca;
	}
	getMapDetalls(){
		var s = new Map();
		for(var i = 0;  i <this.descripcio.length; i++){
			var t = this.descripcio[i].getTitol();
			var c = this.descripcio[i].getContingut();
			if(c == "" || c == undefined){
				c == "empty";
			}
			s = s.set(t, c);
		}
		return s;
	}

	tc_detalls(){
		var array_tc = [];
		for(var i = 0; i < this.descripcio.length; i++){
			array_tc.push([this.titol(i), this.contingut(i)]);
		}
		return array_tc;

	}
	titol(i){return this.descripcio[i].titol;}
	contingut(i){return this.descripcio[i].contingut;}
}

class Detall{
	constructor(titol, contingut){
		this.titol = titol;
		this.contingut = contingut;
	}
	setTitol(titol){this.titol = titol;}
	setContingut(contingut){this.contingut = contingut;}

	getTitol(){return this.titol;}
	getContingut(){return this.contingut;}


}
