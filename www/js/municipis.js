function geocodeLatLng(geocoder, map, infowindow, marker) {
	var latlng = {lat:marker.getPosition().lat(), lng: marker.getPosition().lng()};
	var com = "";
	geocoder.geocode({'location': latlng}, function(results, status) {
		if (status === 'OK') {
			
			if (results[0]) {
				infowindow.setContent(results[0].formatted_address );
				infowindow.open(map, marker);
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