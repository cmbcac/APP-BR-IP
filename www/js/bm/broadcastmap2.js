class Comarca{
	constructor(nom,link){
		this.nom = nom;
		this.canals = [];
		this.idget = link;
		this.linkpost = "";
	}
}

function ompleDiccionariComarques(){
	dict_comarques.set("altaribagorca",0);
	dict_comarques.set("altcamp",1);
	dict_comarques.set("altemporda",2);
	dict_comarques.set("altpanades",3);
	dict_comarques.set("alturgell",4);
	dict_comarques.set("anoia",5);
	dict_comarques.set("aran",6);
	dict_comarques.set("bagues",7);
	dict_comarques.set("baixcamp",8);
	dict_comarques.set("baixebre",9);
	dict_comarques.set("baixemporda",10);
	dict_comarques.set("baixllobregat",11);
	dict_comarques.set("baixpanades",12);
	dict_comarques.set("barcelones",13);
	dict_comarques.set("bergueda",14);
	dict_comarques.set("cerdanya",15);
	dict_comarques.set("concadebarbera",16);
	dict_comarques.set("garraf",17);
	dict_comarques.set("garrigues",18);
	dict_comarques.set("garrotxa",19);
	dict_comarques.set("girones",20);
	dict_comarques.set("lanoguera",21);
	dict_comarques.set("maresme",22);
	dict_comarques.set("montsia",23);
	dict_comarques.set("osona",24);
	dict_comarques.set("pallarsjussa",25);
	dict_comarques.set("pallarssobira",26);
	dict_comarques.set("pladestany",27);
	dict_comarques.set("pladurgell",28);
	dict_comarques.set("priorat",29);
	dict_comarques.set("riberadebre",30);
	dict_comarques.set("ripolles",31);
	dict_comarques.set("segarra",32);
	dict_comarques.set("segria",33);
	dict_comarques.set("selva",34);
	dict_comarques.set("solsones",35);
	dict_comarques.set("tarragones",36);
	dict_comarques.set("terraalta",37);
	dict_comarques.set("urgell",38);
	dict_comarques.set("vallesoccidental",39);
	dict_comarques.set("vallesoriental",40);
	dict_comarques.set("usuaris",41);
}

function ompleArrayComarques(){
	comarques.push(new Comarca("altaribagorca", '1OnZFu5vRTur16W3HWJsOfzDSZAt1gtIUYKOnIo8YOU8'));
	comarques.push(new Comarca("altcamp", '1BbBoZZq5efSoJfIZ-dL0qrHsHr8snLP54uh-qviuuag'));
	comarques.push(new Comarca("altemporda", '1ESI57JRSlKpyVEMJLn1kpSID0AcA40PSJ8SeD5SrTxY'));
	comarques.push(new Comarca("altpanedes", '19SiLmcEtwVQNAxcFyBAW--by9Pk6HoTuDS9XWgKs3WY'));
	comarques.push(new Comarca("alturgell", '1hmhqSH25RKg7sivzU7lzAQHUScI6iXeEvptYZb0pCqM'));
	comarques.push(new Comarca("anoia", '1QimHsiynkYgkKweZ5wiFK91NxSTTF3fmpPAHFNKPGFQ'));
	comarques.push(new Comarca("aran", '1LSUB20NP9bwMC8bkd6LOPVpcrVBAXxuw7dwncKUtHEY'));
	comarques.push(new Comarca("bages", '1oIhijIvv4Ncywa8NKOShr4YbWuIz5qwf3BnD1ogQJwQ'));
	comarques.push(new Comarca("baixcamp", '1ISnt7u2fdI9-qxSGaGp-pDh-uKxL6JDbea3rPmdHBMM'));
	comarques.push(new Comarca("baixebre", '1vc6AOwM3hLFzTm8yTQvIyPeySmQLJ5in8dILzrosTEA'));
	comarques.push(new Comarca("baixemporda", '1w2ZGLQuKbTSF-VAPskKhiDt_k4vO7Bgd8-J_mwa5xVc'));
	comarques.push(new Comarca("baixllobregat", '1NFGe2c794ex8dcS-qAgoTaUmZsC1fgpe-IxXc8QcNzY'));
	comarques.push(new Comarca("baixpanedes", '1ILWXufJidn5sF-Qht12-q5bQXGUousiLfQbBEun8gI8'));
	comarques.push(new Comarca("barcelones", '10pBzXT81PuKDdvDnD0pjmjSlTykzisLj8IozsChuAGg'));
	comarques.push(new Comarca("bergueda", '18lU-9O-74MQSLzcQ9-vdCvv3_wd9t9fCtYFnmETJNLI'));
	comarques.push(new Comarca("cerdanya", '1AD4ekaJyI8EK6gh25F5I2QBwbQ3x6q4RzaWUgnV_pLY'));
	comarques.push(new Comarca("concadebarbera", '1EcHTVqzrdAUGD8GcePREgGo-6bo07TSH9BRGo1D4dOQ'));
	comarques.push(new Comarca("garraf", '1kskCsBQIw9ZDJJuXC_JWJ-RAXcsn7RqP02iCckRwpfc'));
	comarques.push(new Comarca("garrigues", '1m5FZWRRK367BeNzJ7U70xAW1VBpiLzhYiDygu5EI-5o'));
	comarques.push(new Comarca("garrotxa", '1MbrLq6cyiWhkCnvH60K_unxByDiBNdEr4tDEbMEVXtg'));
	comarques.push(new Comarca("girones", '1Y5cjkGdGLkUaWMkZW9QfaTE7feegsHd10TTL0Y3Aazw'));
	comarques.push(new Comarca("lanoguera", '1pZ13a6n8YY39zixamiFEnPWn2PdGXJYn88JFvVt8QIw'));
	comarques.push(new Comarca("maresme", '1i0q3r92vr1CWUlABFE7WxR184CGbduTOF3hbg8lSwxs'));
	comarques.push(new Comarca("montsia", '1iwL_bCLufG3lBnbHKrYF_uTgwzjCSdvMZ4ScyIGQMZk'));
	comarques.push(new Comarca("osona", '1BMospZNtx6pib_Y_VMDbTY-0V8AIq9RG60Qrl9Tw2CQ'));
	comarques.push(new Comarca("pallarsjussa", '1KEV-RWzjOxQStIoqchpLoELGKaL5iEtI1qBXDzOQHGA'));
	comarques.push(new Comarca("pallarssobira", '1Oj2nB0VLKZBggjguorCARdjp8S7d9wC3GitjwuYBrsU'));
	comarques.push(new Comarca("pladestany", '1ZR0_mBUTD3mJAfw5mjkHXISiwfjRHTB4yLusfvfK5U0'));
	comarques.push(new Comarca("pladurgell", '1JZQfNdMWWVC47kAew1RdDbfUdIAKzxUVUtHOFK7fKTk'));
	comarques.push(new Comarca("priorat", '18tmTwlRoMfvbLqMTVh1ChqZSh7SLSPigYmLv4J-YQ4U'));
	comarques.push(new Comarca("riberadebre", '1dqK3CbUOcf1GOWkjBT_Lifrt26k339kn5DvMSei45fo'));
	comarques.push(new Comarca("ripolles", '1yG_aGayz_QGSx4Tn6qsPUMEthMDR8WcJvNeWpKuKM7A'));
	comarques.push(new Comarca("segarra", '1aSKXvg0eajYDvTju4HHGWAP1BqGWmdEbN9HoAfzkXtw'));
	comarques.push(new Comarca("segria", '1nK5gNUkqlr4Lh9klU5J1PyG4jwzJnj35UkI5Ke585uI'));
	comarques.push(new Comarca("selva", '1sNFqAas1X25fr0q1yJ-rypX-EOMvOW24_xtXGJv6vZQ'));
	comarques.push(new Comarca("solsones", '1yU15YDBTCvrin1lFv98C2O72117vnJSScO9Z0GaDgGM'));
	comarques.push(new Comarca("tarragones", '15QRjZJsDrVNVj_6EneNOvajrJJSUaU-u0u-Blub40C0'));
	comarques.push(new Comarca("terraalta", '12ya5HeL2hnS1Jyl5qZZ8RQkRSiOH5APZlCNIsK2qV2c'));
	comarques.push(new Comarca("urgell", '1Iwpg6l_rfDHNQHZydNRpJTcWpvfjAE18b5Reb7Tcg5s'));
	comarques.push(new Comarca("vallesoccidental", '1LSUB20NP9bwMC8bkd6LOPVpcrVBAXxuw7dwncKUtHEY'));
	comarques.push(new Comarca("vallesoriental", '1rH0gSCFRww_ItJdKhzT8zbW60SyFqN_TncS4MBJEGJ8'));
}


var dict_comarques = new Map();	//hi guarda de cada comarca l'index. 
ompleDiccionariComarques();
var comarques = [];
ompleArrayComarques();
carregaComarques2018();



function carregaComarques2018(){
	for(var i = 0; i < comarques.length; i++){
		executaAJAX2018(map,comarques[i].nom, comarques[i].idget);
	}

}


function executaAJAX2018(map,nom,id){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
			   funcio(xmlhttp.responseText,nom);
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
    var string2018 = "https://spreadsheets.google.com/feeds/list/"+id+"/1/public/values?alt=json-in-script&callback=callback";


    try{
    	console.log("comarca: " + nom + "amb url " + string2018);
    	xmlhttp.send();
    }
    catch(e){
    	console.log(e);
    	
    }
}

function funcio(data, nom){

	comarca = nom
	/*parseja text*/

	data = returnDataParsed(data);
	funcio2(data);
}
function funcio2(data){
	/*inicialitza variables*/
	var myLatLng;
	var features = [], latfield, lonfield;
	if (!data || !data.feed) return features;
	
	/*busca markers*/

	if(data.feed.entry == undefined)
		return;

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
				var content = '<span id="contentInsideMap">' + poble.poble + '</span>'
				infoWindow.setContent(content);
				infoWindow.open(map,marker);
				$('#contentInsideMap').bind('click', function() {
					togglemapform();
				});
				if(marker.getIcon() == "http://maps.google.com/mapfiles/ms/icons/green-dot.png"){
					togglemapform();
				}
				else{
				
					/* declaracio de variables */

					var radtitols = [];
					var radcontinguts = [];
					var tvtitols = [];
					var tvcontinguts = [];
					var othtitols = [];
					var othcontinguts = [];
					
					/*  bools que indicaran principi i final de cada seccio - radios, tv, altres*/

					var bg = true;
					var end = false;
					var mapdet = poble.getMapDetalls();
					var it = mapdet.keys();

					/* borra els llistats */

					$('ul#list1').children().remove();
					$('ul#list2').children().remove();
					$('ul#list3').children().remove();
					$('ul#list4').children().remove();
					$('ul#list5').children().remove();

					$('ul#list1').append('<li class ="blanc"> RÀDIO NACIONAL </li>');
					$('ul#list2').append('<li class = "blanc"> -- </li>');
					
					
					for(var i = 0;  i < mapdet.size; i++){
						var n = it.next();
						var t = n.value;
						var c = mapdet.get(t);
						if(c=="") c = "sense informació";
						if(c==undefined) c = "--";					
						if("TELEVISIÓ NACIONAL"  == t) bg = false; 
						if("ALTRES FORMES DE COMUNICACIÓ 1" == t) end = true;
						if("SER" == t){
							$('ul#list1').append('<li class = "blanc"> RÀDIO ESTATAL </li>');
							$('ul#list2').append('<li class = "blanc"> -- </li>');
						}
						if(bg){
							if(c=="--"){
								t = '<li class ="blanc">' + t + '</li>'
								c = '<li class ="blanc">' + c + '</li>'

								$('ul#list1').append(t);
								$('ul#list2').append(c);
							}
							else{
								$('ul#list1').append('<li>'+t+'</li>');
								$('ul#list2').append('<li>'+c+'</li>');
							}
							
						}
						if(!bg && !end){
							if(c=="--"){
								t = '<li class ="blanc">' + t + '</li>'
								c = '<li class ="blanc">' + c + '</li>'

								$('ul#list3').append(t);
								$('ul#list4').append(c);
							}
							else{
								$('ul#list3').append('<li>'+t+'</li>');
								$('ul#list4').append('<li>'+c+'</li>');
							}

						}
						if(end){
							$('ul#list5').append('<li>'+t+":\t"+c +'</li>');
							//$('ul#list6').append('<li>'+c+'</li>');
						}
					}

					/* canviar el color dels marcadors, l'anterior i el nou*/

					for(var i = 0; i < array.length; i++){
						if (array[i].getIcon() == 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'){
							if(array[i].title.includes("Ajuntament"))
								array[i].setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
							else{
								array[i].setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
							}
						}
					}

					marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");	
				}

				

	

				
			})
		})(marker, pobles[pobles.length-1]);
		
		
	}	
}