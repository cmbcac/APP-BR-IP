/*demana l'altra document*/
/*$("head").append('<script type="text/javascript" src="' + "js/gt.js" + '"></script>');*)
/*configura la icona*/
function setIcon(){
	im = {
		url: 'img/logo-IPTV2.png',
		scaledSize: new google.maps.Size(30, 26),
	};
	
}

/*petició ajax*/
function cargaDatosSegonsID(map){

	var data_IPTV = '1scC17IE0nbBGIihkBBSD9IPv2AJE-hec9s7-9d8gH34';
	executaAJAX(map,"",data_IPTV);
}

function setValorInProgress(){
	return 1;
}


/*en totes les iptv es demana els mateixos paràmetres*/
function afegeixPoble(comarca, pobles, entry){
	
	var p = new Poble(entry['gsx$entitat'].$t);
	p.descripcio.push(new Detall("Entitat", entry['gsx$entitat'].$t));
	p.descripcio.push(new Detall("Tipus entitat", entry['gsx$tipusentitat'].$t));
	p.descripcio.push(new Detall("Nom comercial", entry['gsx$nomcomercial'].$t));
	p.descripcio.push(new Detall("URL", entry['gsx$url'].$t));
	p.descripcio.push(new Detall("Programació", entry['gsx$programació'].$t));
	p.descripcio.push(new Detall("Canal TDT", entry['gsx$canaltdt'].$t));
	p.descripcio.push(new Detall("Xarxa", entry['gsx$xarxa'].$t));
	p.descripcio.push(new Detall("Youtube", entry['gsx$youtube'].$t));
	p.descripcio.push(new Detall("Població", entry['gsx$població'].$t));
	p.descripcio.push(new Detall("Observacions", entry['gsx$observacions'].$t));		
	pobles.push(p);
	
	
}

//classes per guardar les dades
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
	 setContent(){
		var s="";
		for(var i = 0;  i <this.descripcio.length; i++){
			s = s 
			var t = this.descripcio[i].getTitol();
			var c = this.descripcio[i].getContingut();
			if (c != "" && c != undefined){
				s = s + t + ": " + c;
			}
			else{
				if ( c == undefined){
					s = s + "<span style="+'"'+"text-decoration:underline"+'"'+">" + t + "</span>";
				}
				if (c == ""){
					s = s + t;
				}
			}
			s = s+ "<br>"
		}
		return s
	}
	setLatitud(latitud){
		this.latitud = latitud;
	}
	setLongitud(longitud){
		this.longitud = longitud;
	}
	setTipus(tipus){
		this.tipus = tipus;
	}
	setTitol(titol){
		this.titol=titol;
	}
	getRadiosHTML(){
		var ready = true;
		var filterend = "TELEVISIÓ NACIONAL";
		var s="";
		for(var i = 0;  i <this.descripcio.length; i++){
			s = s 
			var t = this.descripcio[i].getTitol();
			if(t == filterend) ready = false;
			if(ready){
				var c = this.descripcio[i].getContingut();
				if (c != "" && c != undefined){
					s = s + t + ": " + c;
				}
				else{
					if ( c == undefined){
						s = s + t;
					}
					if (c == ""){
						s = s + t;
					}
				}
				s = s+ "\n"
			}

		}
		return s
	}
	getTVSHTML(){
		var ready = false;
		var filter = "TELEVISIÓ NACIONAL";
		var filterend = "ALTRES FORMES DE COMUNICACIÓ 1";
		var s="";
		for(var i = 0;  i <this.descripcio.length; i++){
			s = s ;
			var t = this.descripcio[i].getTitol();
			if(t == filter) ready = true;
			if(t == filterend) ready = false;
			if(ready){
				var c = this.descripcio[i].getContingut();
				if (c != "" && c != undefined){
					s = s + t + ": " + c;
				}
				else{
					if ( c == undefined){
						s = s +  t ;
					}
					if (c == ""){
						s = s + t;
					}
				}
				s = s+ "\n"
			}

		}
		return s;
	}
	getOthersHTML(){
		var ready = false;
		var filter = "ALTRES FORMES DE COMUNICACIÓ 1"
		var s="";
		for(var i = 0;  i <this.descripcio.length; i++){
			s = s; 
			var t = this.descripcio[i].getTitol();
			if(t == filter) ready = true;
			if(ready){
				var c = this.descripcio[i].getContingut();
				if (c != "" && c != undefined){
					s = s + t + ": " + c;
				}
				else{
					if ( c == undefined){
						s = s +  t ;
					}
					if (c == ""){
						s = s + t;
					}
				}
				s = s+ "\n";
	
			}
		}
		return s;
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
}

function initMap() {
		todo = !todo;
		try{
			var catalunya = {lat: 41.385900681193434, lng: 2.1711516380310063};
				infoWindow = new google.maps.InfoWindow();
				map = new google.maps.Map(document.getElementById('fivemap'), {
				center: catalunya,
				zoom: 8,
			    zoomControl: false,
			    mapTypeControl: false,
			    scaleControl: false,
			    streetViewControl: false,
			    rotateControl: false,
			    fullscreenControl: false
			});
			cargaDatosSegonsID(map);	
		}
		catch(err){
			console.log("error");

		}
		typemap = "bright";	
}
var JParsedText;

var array = [];
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





//innecessari de moment, comunica que hi ha un nou proces fent-se
function handleBefore() {
	inProgress++;
};

//es diu que hi ha un proces menys i si no n'hi ha cap s'executa el clusteritzador
function handleComplete(name) {
	if (!--inProgress) {
		// do what's in here when all requests have completed.
		console.log(inProgress);
		markerCluster = new MarkerClusterer(map, array,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	}
};

function controlaInformacio(data,nom){
	
	comarca = nom
	/*parseja text*/

	data = returnDataParsed(data);
	
	/*inicialitza variables*/
	var myLatLng;
	var features = [], latfield, lonfield;
	if (!data || !data.feed) return features;
	
	/*busca markers*/
	for (var i = 0; i < data.feed.entry.length; i++){
		
		//entry
		var entry = data.feed.entry[i];

		
		//ubicacio
		try{[latfield, lonfield] = getLatLang(entry)}
		catch(e){break;}
		var latlon = latfield.toString()+lonfield.toString()
		
		var valuemap = maplatlongs.get(latlon) == undefined ? 0 : maplatlongs.get(latlon);
		valuemap = valuemap + 1;
		maplatlongs.set(latlon, valuemap);
		
		var lng_radius = 0.0003,         // degrees of longitude separation
		lat_to_lng = latfield / lonfield,  // lat to long proportion in Warsaw
		step = 2 * Math.PI / 8,
		angle = 0.5 + (step * valuemap),
		lat_radius = lng_radius / lat_to_lng;
		lonfield = lonfield + (Math.cos(angle) * lng_radius);
        latfield = latfield + (Math.sin(angle) * lat_radius);
		
		myLatLng = {lat: latfield, lng: lonfield};

		//marker
		var marker = setMarker(comarca, myLatLng, entry, map, array)
		
		//pobles
		if(comarca != "usuaris"){
			afegeixPoble(comarca, pobles, entry);
		}
		else{
			afegeixUsuaris(pobles, entry);
		}

		//infowindows
		(function(marker, poble){
			google.maps.event.addListener(marker, 'click', function(e){
				infoWindow.setContent(poble.poble);// + "  "+poble.descripcio[0].titol + " ");
				//infoWindow.setContent("<strong>" + poble.poble+ "</strong><br>" + poble.setContent());
				infoWindow.open(map,marker);
				
				var radtitols = [];
				var radcontinguts = [];
				var tvtitols = [];
				var tvcontinguts = [];
				var othtitols = [];
				var othcontinguts = [];
				
				var bg = true;
				var end = false;
				var mapdet = poble.getMapDetalls();
				var it = mapdet.keys();
				$('ul#list1').children().remove();
				$('ul#list2').children().remove();
				$('ul#list3').children().remove();
				$('ul#list4').children().remove();
				$('ul#list5').children().remove();
				//$('ul#list6').children().remove();
				
				
				for(var i = 0;  i < mapdet.size; i++){
					var n = it.next();
					var t = n.value;
					var c = mapdet.get(t);
					if(c=="") c = "sense informació";
					if(c==undefined) c = "--";
					
					if("TELEVISIÓ NACIONAL"  == t) bg = false; 
					if("ALTRES FORMES DE COMUNICACIÓ 1" == t) end = true;
					if(bg){
						$('ul#list1').append('<li>'+t+'</li>');
						
						$('ul#list2').append('<li>'+c+'</li>');
						
					}
					if(!bg && !end){
						$('ul#list3').append('<li>'+t+'</li>');
						$('ul#list4').append('<li>'+c+'</li>');

					}
					if(end){
						$('ul#list5').append('<li>'+t+":\t"+c +'</li>');
						//$('ul#list6').append('<li>'+c+'</li>');
					}
				}
				//document.getElementById("radios").innerText = radtitols.toString()//poble.getRadiosHTML();
				//document.getElementById("tvs").innerText = poble.getTVSHTML();
				//document.getElementById("others").innerText = poble.getOthersHTML();
				
			})
		})(marker, pobles[pobles.length-1]);
		
		
	}	

}

//treiem els primers caracters i ultims per poder parsejar
//fem el parsing i ho retornem
function returnDataParsed(data){
	var start = 25;
	var end = data.length - 2;
	var JSONText = data.slice(start,end);
	JParsedText = JSON.parse(JSONText);
	return JParsedText;
}

//mira de totes les entries quina és latfield i quina és lonfield
//si no ho troba error, sino retorna la tupla
function getLatLang(entry){

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
	
//si es una comarca obte el nom de municipi i posa icona normal
//sino, o es usuari o es iptv, "" es iptv, el titol, es el  nom de la entitat
//ambdos posen icona, que canvia segons el mapa
//coloca el marcador i ho enxufa al array de marcadors
//retorna el marker	
function setMarker(comarca, myLatLng, entry, map, array){
	if(comarca !="usuaris" && comarca != ""){
		var marker = new google.maps.Marker({
			position: myLatLng,
			title: entry['gsx$indiqueuelmunicipidesdonompliuelformulari'].$t,
			map: map
		});
	}
	else{
		var title = comarca == "" ? 'gsx$entitat' : 'gsx$direcció';
		setIcon();
		var marker = new google.maps.Marker({
			position: myLatLng,
			title: entry[title].$t,
			icon: im,
			map: map
		});
	}
	marker.setMap(map);
	array.push(marker);
	return marker;
	
	
}
	

//es posa la url segons la id, es diu que es vol obtenir
//si tot va bé, vol dir que tenim info i la administrem
//sino igualment, quan acaba ho comunica


function executaAJAX(map,nom,id){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
			   controlaInformacio(xmlhttp.responseText,nom);
			   handleComplete(nom);
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

// informa a l'usuari dels canvis de conexió
window.addEventListener('online',  updateIndicator);
window.addEventListener('offline', updateIndicator);
updateIndicator();
