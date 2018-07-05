
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
			//cargaDatosSegonsID();	
		}
		catch(err){
			console.log("error: " + err);
		}
		typemap = "bright";	
}(cargaDatosSegonsID());

function alterna_vista_mapaformulari(){
	$("#fivemap").slideToggle();
	$("#fiveinfo1").slideToggle();
	$("#llegenda-mapa").slideToggle();

}

function load(){
	$("#pinmap").click(function(){
		alterna_vista_mapaformulari();
	});
	$("#comico").click(function(){
		$("#gform").toggle("slow");
	});
	console.log("carregat");
}

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
		alterna_vista_mapaformulari();
	});
	

}

function configura_dades_formulari_comentaris(poble, marker){
	
	document.getElementById('Latitud').value = (marker.position.lat());
	document.getElementById('Longitud').value = (marker.position.lng());
	document.getElementById('Municipi').value = (poble.poble);
}

function configura_icona_marcadors(marker){
	
	if(marker.getIcon().url == "img/logo-IPTV2.png"){
		alterna_vista_mapaformulari();
		$("#pinmap").toggleClass("tv").toggleClass("map");
		$("#textmapllist")[0].innerText = $("#textmapllist")[0].innerText == "Mostra detalls OTT" ? "Mostra Mapa" : "Mostra detalls OTT";
		
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

