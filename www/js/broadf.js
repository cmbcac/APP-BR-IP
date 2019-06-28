var f = 0;
var finestres = ["#Ubicacio", "#Contacte", "#Cobertures", "#Send"];
var tope = finestres.length;
var show = "Calgary88 shown";
var hidd = "Calgary88 hidden";

var pointed = "dot onPointer";
var notPointed = "dot offPointer";

var infoWindow, geocoder, map, marcador

// urls de les radios i televisions

var regionals_radio = '1kV6XXfe20SPNp4AIFoI1yjQVSWKOQOCDQL9o_We4uus';
var regionals_telev = '1xZVAFGEuyTuJfsA34ebB7xKEhrEKTFVQtnTz2g5yDzc';
var global_radio = '1B8Y6bbjFwztZIumbLTHk0xwLKvl46afiwUgG6Vkyl6I';
var global_telev = '1ds4Bqbs-SpK6cxYxE_OCeMoqI7ZXSRHOdt4B-Cwo6K8';
var postal_codis = '1buewNhQVAmy_lEdH_T1iAeZMeQFclPyy0BHa_rOOU7Y';
var urls_bbdd = 5;

// arrays per a guardar la informació

var radios = {regionals:[], nacionals : [], estatals : []};
var televs = {regionals:[], nacionals : [], estatals : []};
var postals = [];

//peticions de la base de dades

executaPeticio(regionals_radio, descarrega_canalsDrive, {nom: "regionals radio bbdd"});
executaPeticio(regionals_telev, descarrega_canalsDrive, {nom: "regionals telev bbdd"});
executaPeticio(global_radio, descarrega_canalsDrive, {nom: "globals radio bbdd"});
executaPeticio(global_telev, descarrega_canalsDrive, {nom: "globals telev bbdd"});
executaPeticio(postal_codis, guarda_postal, {nom: "postal codis bbdd"});

// setup_comarca( nom comarca, url-ajuntaments, url-usuaris, url-post);

var comarques = []
setup_comarca("Alta Ribagorça","1o28GgM3THzqLivRGjD17jF4-AMb66Km_S34GKFDe85s", "1OnZFu5vRTur16W3HWJsOfzDSZAt1gtIUYKOnIo8YOU8", "AKfycbwfx9G1i4fG7dC389wYASxufv2OSrYfKSHJYkVre_LqQjtAvSEa");
setup_comarca("Alt Camp","1JndbQsVpzVTIID0sf_1wJuqDADPtrerqXFIUF__LBMI", "1BbBoZZq5efSoJfIZ-dL0qrHsHr8snLP54uh-qviuuag", "AKfycbyKtr9H0bGL2u8jDoD83ICdBvO5Iaiu6nIwOClLcQIxWf1goDQ");
setup_comarca("Alt Empordà","1h7cGJ9oGbA0sXr0HuRR75rb2N88xURh2ZAlJJ50kdxE", "1D2uphuqkhYeEXlljh0Z0r_cWigSgKSbWdUpX7s8eE5A", "AKfycbzO4yjO8owZsB29aATuTl12167v9TczuD0UVgaEQ9FtQGwHV3l8");
setup_comarca("Alt Penedès","1FrQO4IDl70l4qUj63OzMAHqLlhV67qWc-xP-jzSCkos", "19SiLmcEtwVQNAxcFyBAW--by9Pk6HoTuDS9XWgKs3WY", "AKfycbxQHQ91WOjm2hbdKUMCX_6Oin2VaEA9NP5DDyIXvzoAUDPyGfaZ");
setup_comarca("Alt Urgell","1WA1ZXw6U9mWfhTpfLCPwNl8nGzxWliHCjjnCtVlL5bk", "1hmhqSH25RKg7sivzU7lzAQHUScI6iXeEvptYZb0pCqM", "AKfycbzy5-K2D8pjvSPq5oyPke_Ali7tYT2PfE7W8ttpmx1LIQQhieF1");
setup_comarca("Anoia","19iwB4oW8VEwq7SB8J0reQKdavQRGsG9TTSx16Rq7YDk", "1QimHsiynkYgkKweZ5wiFK91NxSTTF3fmpPAHFNKPGFQ", "AKfycbx0LwwGNj1QuYyiRKYIdAWz76r7jqIifJQt0_wtRti9Iip4ZeE");
setup_comarca("Bages","1R4nBEm019vzeZR11YMMXhqfKx35c-_4fXsYMhtDUuw8", "1oIhijIvv4Ncywa8NKOShr4YbWuIz5qwf3BnD1ogQJwQ", "AKfycbyQF67i_24d-OU61WmH0NIWIvhsYXxm05enwdM6k73poX6Ly09u");
setup_comarca("Baix Camp","1t7VrTbVEnTcbU9pJzNFrVJGjaf19iX3OGZHZQABGlLo", "1ISnt7u2fdI9-qxSGaGp-pDh-uKxL6JDbea3rPmdHBMM", "AKfycbxY0LKB6RH422hYjiKd_cacyiIUhH9_r0hbq_kf_JsE98rHPkU");
setup_comarca("Baix Ebre","14O6RbL-l4RBbWLEKDZnqNYIe9tR2eMITNg_VbdAmxyk", "1vc6AOwM3hLFzTm8yTQvIyPeySmQLJ5in8dILzrosTEA", "AKfycbxHFw-XvodsJrNcvXFLb5n8K-YWiER3I_BCVSbQVr5m3SvfW_Q");
setup_comarca("Baix Empordà","1tpoJwXMhlAWYpCooOJzQFXAxiykKhULaPSyGH2VIfuE", "1w2ZGLQuKbTSF-VAPskKhiDt_k4vO7Bgd8-J_mwa5xVc", "AKfycbzxzW3BxCDc6V0PNsoarP25DnM4MrL0xEGTXGicKUYNCPzc7rE");
setup_comarca("Baix Llobregat","1YGuMrnJ2XVGX8thsAskzHeuD-XbyMZcKQ8Ssqu2HjPc", "1NFGe2c794ex8dcS-qAgoTaUmZsC1fgpe-IxXc8QcNzY", "AKfycbyNlIB1Ak31Gy1CJkR_y65-7cCnaFQRXsmflDqDfxBRS1OxBDI");
setup_comarca("Baix Penedès","1IWHBt17GWnvLfUcxOahKlOcw6H9R2t84s7Bms2wmK20", "1ILWXufJidn5sF-Qht12-q5bQXGUousiLfQbBEun8gI8", "AKfycbzgF1Un_w3k1YWRZXLoX13XCbqm1N4mPrfF4TQlK2Lhr2UT7v01");
setup_comarca("Barcelonès","1L_pt_2ZZeIDHTXn9YR_M-cPbqkehWhQ_1tRHFNxC80c", "10pBzXT81PuKDdvDnD0pjmjSlTykzisLj8IozsChuAGg", "AKfycbzX7PiZ3j9g63uvZ53B5m9fr-YgqHGdlvK-4YN7iw6mx3Ggqtc");
setup_comarca("Berguedà","1v2EU6xywTdbERXuXiJxyaWOC_Pjtfa_TfZ6vjjbLt3w", "18lU-9O-74MQSLzcQ9-vdCvv3_wd9t9fCtYFnmETJNLI", "AKfycbyCETWno5_WHZzEf6o47inwFO4peTk2GzzuO5OCDTv-n5dr58E");
setup_comarca("Cerdanya","1pA8n5HtPM_olfm0NKmqd96n7QImq4KDjzptR4AnbGi4", "1AD4ekaJyI8EK6gh25F5I2QBwbQ3x6q4RzaWUgnV_pLY", "AKfycbzOt_c9Hx3ufd2-w52OrBu0NKod6QbZ5K4cwMQAtDqR8KW5aW7y");
setup_comarca("Conca de Barberà","1XKh4HWgzd_u0R5Sg5D8W7ejTZ9wo8KrEU2im4yA89J0", "1EcHTVqzrdAUGD8GcePREgGo-6bo07TSH9BRGo1D4dOQ", "AKfycbyncidALeSZDGKNwzZDYT6OP1GhZdxXJBPGH1ZwuXQQUdH7B1Zv");
setup_comarca("Garraf","1uIXneWHDJUiVUDmKzkQ4cpoWfBBPrrLd49wkiTLj5YM", "1kskCsBQIw9ZDJJuXC_JWJ-RAXcsn7RqP02iCckRwpfc", "AKfycbx5nXrR0Ql_1ecEq9rzE-76jCk1LwQq6BGrBBzHCzQZ1ABHM2UB");
setup_comarca("Garrigues","1Fk7zg-UVfpNACKO_VXNyc4RHUPI8_wPca-222DUOm9I", "1m5FZWRRK367BeNzJ7U70xAW1VBpiLzhYiDygu5EI-5o", "AKfycbwIk9HJuZ0-gz3WTtsunmfNbTLOmiHPpbb2jK9qW5RPSuQti5gr");
setup_comarca("Garrotxa","1hiT9nZyM2eLlZOV_89oIDhEd9eFpQbMbSTwWwrreoGk", "1MbrLq6cyiWhkCnvH60K_unxByDiBNdEr4tDEbMEVXtg", "AKfycbxbjlB40chexZI7Ycoa58tkPv-OH-ehgPayHkoPKHDBXuJz1mLR");
setup_comarca("Gironès","1gwxSZo-qq1BAryC_p6QmNGaqEdBkcVxnLtWVjy8Dt8Q", "1Y5cjkGdGLkUaWMkZW9QfaTE7feegsHd10TTL0Y3Aazw", "AKfycbxI0G3xY_116zmszuVQrxz9j52QpjUingUh1WfAFdz63a-7EKA2");
setup_comarca("Noguera","1IvfTi-9CdQkpL2TMgZqxh23Y2tC6gM8p-ZONkE4f-6g", "1pZ13a6n8YY39zixamiFEnPWn2PdGXJYn88JFvVt8QIw", "AKfycbx09Fa0o3FksDQZ72ye0mBU2mOYOzrZyTK3ZT-GY88CxlzthVQ");
setup_comarca("Maresme","1IQmY3wZ7FvMKKkVdt2ng04y5TddZmW838ZGAhLacUqk", "1i0q3r92vr1CWUlABFE7WxR184CGbduTOF3hbg8lSwxs", "AKfycbx6fY0pxmcTykTU9k7euZKjEfyupF6mxoaXhEtD6CZfCTaVeg4");
setup_comarca("Montsià","1L-t6Q4OrOJ8mXEzKybaKW-_b-JqFGt3JHnG_jbht2yg", "1iwL_bCLufG3lBnbHKrYF_uTgwzjCSdvMZ4ScyIGQMZk", "AKfycbzoNEL3cnEXRc79p2HXU81QRZHx72vwkNxh10OqaetnEUb611Q");
setup_comarca("Osona","1le8uZrUcwbAxpEHTyk4dL2fbe6wvpakiGypWiDJAQ_E", "1BMospZNtx6pib_Y_VMDbTY-0V8AIq9RG60Qrl9Tw2CQ", "AKfycbzQ5jOdjU5wQh07azmmdcnKeV7GZdw6oInClA9Clh3-FTDZ_sQ");
setup_comarca("Pallars Jussà","1hy7v51_l5kuQo7zMualXrRa7t6K7ejU5NjSHwAIxKa0", "1KEV-RWzjOxQStIoqchpLoELGKaL5iEtI1qBXDzOQHGA", "AKfycbyc8K_yhAzXeOGdlpm35PdZ1kG8pvc5A3x1ZdL2WE_ipIwNFmbk");
setup_comarca("Pallars Sobirà", "1mbrnJmAf6m2NDOQZDNOnSF7uV9A4u3msOVUBcXtTxlo","1Oj2nB0VLKZBggjguorCARdjp8S7d9wC3GitjwuYBrsU","AKfycbylB__2qS95U0TrTVonZOrrq2IOfVA5Fqg3EiqYjkrgXbKoT_Ok");
setup_comarca("Pla de l'Estany", "1VJx7xzVzfCabMLjcQVNJq9OHAPPf3XxcTTNxip9MbP4", "1ZR0_mBUTD3mJAfw5mjkHXISiwfjRHTB4yLusfvfK5U0", "AKfycbyB-UF5cp-6aPQUEZFZEhLmQfytzfb-c1Ww_7Nt7tvK5qYGtelH");
setup_comarca("Pla d'Urgell", "1BzQOfc5N3fd8GkOtknw6fKG4zC944LMxvjQeruyOS-A","1JZQfNdMWWVC47kAew1RdDbfUdIAKzxUVUtHOFK7fKTk", "AKfycbwtWfo548WDJvXq47ywzNL0cS36_yoo6WOo1JH76bZgEYY_yMAi");
setup_comarca("Priorat", "1PFIY8LZp4AIWEijroS2ccqvOKoTxj9HAdRGVEeXgLaE", "18tmTwlRoMfvbLqMTVh1ChqZSh7SLSPigYmLv4J-YQ4U","AKfycbwGUCZEZWWCkvU9zk349h-fltjPnKO9lq8-SCwUdzruigX6nCB7");
setup_comarca("Ribera d'Ebre", "1zYDmSNj4z1yYqkYXoGYnMXens0dOnsIYAJiUsaEfD3w","1dqK3CbUOcf1GOWkjBT_Lifrt26k339kn5DvMSei45fo", "AKfycbyuZl18_wD6HZhNSQSEIYBPnPTOUHNp2v5KK1f0FHdhpvwkxCBq");
setup_comarca("Ripollès", "1IRPgPcO4ve_1au3FTO1l3JBB9TwNWhrmma6qTxyKKb8", "1yG_aGayz_QGSx4Tn6qsPUMEthMDR8WcJvNeWpKuKM7A", "AKfycbywoPN4EkcYWbES7YSOD13P1wD-b_yDNpCbkLQRf3SpVl12MVeA");
setup_comarca("Segarra", "1x0PtIoyZlzCjES6yeX9hNBTAuUveoW4fIPJvscSAQ8A", "1aSKXvg0eajYDvTju4HHGWAP1BqGWmdEbN9HoAfzkXtw",  "AKfycbzXNSjOZ78m8XUWFMZ3sYe2NNcYjPMGm7t9LBFe4axaGv5OD-iW");
setup_comarca("Segrià", "1HW__ThUYmvfIdoqZF59z34ZWSTitsiecvFX0BR2tzCs", "1nK5gNUkqlr4Lh9klU5J1PyG4jwzJnj35UkI5Ke585uI", "AKfycbxSer1X0sNIokWD1s9CkByEQ3jaqAI5mlU5ftCDkv403-b8Dwk");
setup_comarca("Selva","1LQwqX1guN7SnFRDCJiQhxZb8pH-ucwMRXxyX0FAnzpo", "1sNFqAas1X25fr0q1yJ-rypX-EOMvOW24_xtXGJv6vZQ", "AKfycby2MKzyQ-BMi03ubI6IL1wNkVvHf9uSzY_IRag5WfBusyPBkM0" );
setup_comarca("Solsonès", "1Sd1cRLYTzL0Hdif91tRn_jpP2Cbe3pqs2fODQe4wdgw", "1yU15YDBTCvrin1lFv98C2O72117vnJSScO9Z0GaDgGM", "AKfycbwmZc2kRXHvBFjqMAl-zh3loKJS_ya5fUbFMPhIU1pH5V8wLZTD");
setup_comarca("Tarragonès", "14b4BaoVcvOXxrTfEsqaJ1ngp8LRr0p0paraRc_kEPxU", "15QRjZJsDrVNVj_6EneNOvajrJJSUaU-u0u-Blub40C0", "AKfycbyXcfF8ioD_TdYTfICrlI-R5mEtGEF3TecUq_kFuVH13FesI2o");
setup_comarca("Terra Alta", "1EGkzHJP6NG0D4Srqva5zBg_MB_-uCoWfFQ6d_Fc-y4Y", "12ya5HeL2hnS1Jyl5qZZ8RQkRSiOH5APZlCNIsK2qV2c", "AKfycbzCbTsoiEvByJJjp95LP06BLLDETIp42O8F_RQxC_2wbN18");
setup_comarca("Urgell", "1pMUw811VKG9HMAbmU4AcBVPjXVMH4TXbUPwcelicwAc", "1Iwpg6l_rfDHNQHZydNRpJTcWpvfjAE18b5Reb7Tcg5s", "AKfycbxED94Yw5CGySXkFZkCTLe7T-IHCTaVaw3IcIFeYiRz5NO4nlAm");
setup_comarca("Vall d'Aran", "1fI5RFLliSB0MtECvxT4GuoMoQpRo3OKjbU4sQ5O4muk", "1LSUB20NP9bwMC8bkd6LOPVpcrVBAXxuw7dwncKUtHEY", "AKfycbwbEeIIWmWIaj3y9dcC4hyOwu20NMzM4kb1G8cYZB97vLD-mZc");
setup_comarca("Vallès Occidental", "1WCIpcQTYJ3_xr8vJFvTtoVLdQ_7qT7rHC7Tg9JzXoQ4", "1iRs3Qd7SjA-DqU2uYmqPPHmUmKkETr4XESH2RzZev_k", "AKfycbwm41dkBzL8e2ElRk6SiPe0IMCBTRfiDEHe6GZCp3vCoWcvvVlN");
setup_comarca("Vallès Oriental","1NU4L0FKxogRbWrt6jqXuAJlxOkvEq9XkxIPKVn5IWlc", "1rH0gSCFRww_ItJdKhzT8zbW60SyFqN_TncS4MBJEGJ8", "AKfycby9aLuwdrsJWEOX2vY0SfQbkVTlNqQAfMdkbFj6dYwn1jfOzus");

var canals = [];
var respostes = [];
var undefineds = [];

var map, infoWindow, marcador, geocoder, clics = 0, comarca_pin, municipi_pin, found = false;
var bbdd_descarregada = false;

var styledMapType, styledMapType2, typemap;

window.onload = load;

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
  for(var i = 0; i < $(".dot").length; i++){
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

function initMap() {
		var catalunya = {lat: 41.385900681193434, lng: 2.1711516380310063};
			infoWindow = new google.maps.InfoWindow();
			geocoder =new google.maps.Geocoder;
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
		setup_estils_mapa();
		let hora = new Date().getHours();
		if( 6 < hora		&& 	hora < 17 )		map.setMapTypeId('roadmap');
		if( 17 <= hora	&&  hora < 22 )		map.setMapTypeId('afternoon_map');
		if( 22 <= hora 	||  hora <= 6)		map.setMapTypeId('dark_map');
		typemap = map.getMapTypeId();

		google.maps.event.addListener(map, 'click', function(event){

				if (marcador != undefined) marcador.setMap(null);
				marcador = new google.maps.Marker({
					position: event.latLng,
					map: map,
					icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
				});

				console.log(marcador.getPosition().lat());
				console.log(marcador.getPosition().lng());
				document.getElementById('Latitud').value = (marcador.getPosition().lat());
				document.getElementById('Longitud').value =(marcador.getPosition().lng());
				geocodeLatLng(geocoder, map, infoWindow, marcador);

				// LISTENER DEL MAPA

				(function(marcador){ google.maps.event.addListener(marcador, 'click',
					function(e){
						marcador.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
					})
				})(marcador);

		});

}

function geocodeLatLng(geocoder, map, infowindow, marcador) {
	var latlng = {lat:marcador.getPosition().lat(), lng: marcador.getPosition().lng()};
	geocoder.geocode({'location': latlng}, function(results, status) {
		if (status === 'OK') {
			if (results[0]) {
				var l = results[0].address_components.length;
				var r0 = results[0].address_components;
				var coincidencies = [];
				var munis = [];
				var codi;
				var codimuni;
				for(var i = 0; i < l  ; i++){
					rln = r0[i].long_name;
					for(var j = 0; j < postals.length; j++){
						if(rln == postals[j].cp || rln == postals[j].municipi){
							municipi_pin = postals[j].municipi;
							if(rln == postals[j].municipi) {coincidencies.push(postals[j].comarca.$t); munis.push(postals[j].municipi);}
							if(rln == postals[j].cp) {codi = postals[j].comarca.$t; codimuni = postals[j].municipi;}
							comarca_pin = postals[j].comarca.$t;
							found = true;
							break;
						}
					}
				}
				if(found){
					if(codi != undefined) {comarca_pin = codi; municipi_pin = codimuni;}
					else{comarca_pin = coincidencies[0]; municipi_pin = munis[0];}
					console.log(comarca_pin);
					document.getElementById('Municipi').value = municipi_pin;
					$("#titol-principal")[0].innerText = "Cobertura a: " + comarca_pin;
					llistat(comarca_pin)
					found = false;
				}
				infowindow.setContent(results[0].formatted_address );
				infowindow.open(map, marcador);


			} else {
				window.alert('No results found');
			}
		} else {
		window.alert('Geocoder failed due to: ' + status);
		}
	});
}

function descarrega_canalsDrive(data, params){
	data = text_a_JSON(data);
	data = data.feed.entry;
	if(params.nom.includes("regionals")){
		for(var i = 0; i < data.length; i++){
			let t = params.nom.includes("rad") ? "Ràdio" : "Televisió";
			var di = {
				nom: data[i].gsx$nom.$t,
				json: data[i].gsx$json.$t,
				comarca: data[i].gsx$comarca.$t,
				àmbit: 'Regional',
				tipus: t
			}
			params.nom.includes("rad") ? radios.regionals.push(di) : televs.regionals.push(di);
		}
	}
	if(params.nom.includes("globals")){
		for(var i =0; i < data.length; i++){
			var di = data[i];
			a = di.gsx$àmbit.$t;
			t = params.nom.includes("rad")? "Ràdio" : "Televisió";
			p = {nom: di.gsx$nom.$t, json: di.gsx$json.$t, àmbit: a, tipus: t};
			if(a == "Nacional") params.nom.includes("rad")? radios.nacionals.push(p) : televs.nacionals.push(p);
			if(a == "Estatal") params.nom.includes("rad")? radios.estatals.push(p) : televs.estatals.push(p);
		}
	}
}

function guarda_postal(data, params){
	data = text_a_JSON(data);
	data = data.feed.entry;
	for(var i = 0;  i < data.length; i++){
		var di = data[i];
		var [p, m, c] = [di.gsx$codipostal.$t, di.gsx$nommunicipi.$t, di.gsx$comarca];
		postals.push({cp:p, municipi:m, comarca:c});
	}

}

function extreucanals_segonscomarca(comarca){
	canals = [];
	// radios regionals
	for(var i = 0; i < radios.regionals.length; i++){
		let canal_radio = radios.regionals[i];
		if(comarca == canal_radio.comarca) {
			canals.push({nom:canal_radio.nom, json:canal_radio.json, àmbit: canal_radio.àmbit, tipus: "Ràdio"});
		}
	}

	// televisions regionals
	for(var i = 0; i < televs.regionals.length; i++){
		let canal_telev = televs.regionals[i];
		if(comarca == canal_telev.comarca) canals.push({nom:canal_telev.nom, json:canal_telev.json, àmbit: canal_telev.àmbit, tipus: "Televisió"});
	}


	// i radios i televisions nacionals i estatals
	canals = canals.concat(radios.nacionals).concat(radios.estatals).concat(televs.nacionals).concat(televs.estatals);
	return canals;
}

function setup_comarca(nom, id_get_aj, id_get_us, id_post_us){
	comarques.push({nom: nom, id_ajuntaments: id_get_aj, id_usuaris_get: id_get_us, id_usuaris_post: id_post_us});
}

function llistat(comarca){
	canals = extreucanals_segonscomarca(comarca);
	id_post = obte_link_post_comarca(comarca);
	if(id_post){
		$('#gform').attr('action', 'https://script.google.com/macros/s/'+id_post+'/exec');
		$('ul#list1').children().remove();
		$('ul#list2').children().remove();
		$("#d2").css('display', 'inline-block');
		$("#d3").css('display', 'inline-block');
		for(var i = 0; i < canals.length; i++){
			afegeix_botons_cobertures(canals[i].nom, i);
			$('.el').css('height', $('.nel').innerHeight());				//alçada de la caixa igual al tamany del text
			try{
				$("[class*=example-class]").hover(function(){
					var c = this.className.match(/(\d+)-example-class/)[1];//in hover
					var val = this.value;
					var ss = "#86BBD8"
					var sd = "#F26419";
					var sr = "#F6AE2D";
					var sb = "#AEE062";
					var col;
					if(val == "Regular"){col = sr;}
					else if(val == "Dolenta"){col = sd;}
					else if(val == "Bona"){col = sb;}
					else if(val == "Sense Senyal"){col = ss;}
					else{col = "#fcf4eb";}

					$('#'+c).css('background-color', col);
				}, function(){
					var c = this.className.match(/(\d+)-example-class/)[1];		//out hover
					$('#'+c).css('background-color', '#ffffff');
				});
			}
			catch(e){
				alert(e);
			}

			$('.el').on('click', function(event){
				event.stopImmediatePropagation();
				var c = this.className.match(/(\d+)-example-class/)[1];
			});
		}
	}
}

function obte_link_post_comarca(comarca){
	for(var i = 0; i < comarques.length; i++){if(comarques[i].nom == comarca) return comarques[i].id_usuaris_post;}
	console.log("return 0: "+comarca);
	return 0;
}

function afegeix_botons_cobertures(n, i){
	/*
	n: nom de la emissora
	i: index
	*/

	var t = n;
	$("ul#list1").append('<li class = "nel" id = "'+i+'">'+ t+ '</li>');
	var startli = '<li class = "iel">';
	var id = " ["+t+"]";
	var name = id;
	var iput = '<input type ="radio" id="'+id+'" name = "'+name+'" ';
	var nastring = iput+'value = "Sense Senyal" title = "Sense Senyal" class = "na el ' +i+ '-example-class">';
	var rstring = iput+'value = "Dolenta" title = " Senyal Dolenta" class = "r el ' +i+ '-example-class">';
	var ostring = iput+'value = "Regular" title = "Senyal Regular" class = "o el ' +i+ '-example-class">';
	var gstring = iput+'value = "Bona" title = "Senyal Bona" class = "g el ' +i+ '-example-class">';
	var endli = '</li>';
	var string = startli+nastring+rstring+ostring+gstring+endli;
	$('ul#list2').append(string);


}

function setup_estils_mapa(){
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
	map.mapTypes.set('dark_map', styledMapType);
	map.mapTypes.set('afternoon_map', styledMapType2);
}

function text_a_JSON(data){
	var start = 25;
	var end = data.length - 2;
	var JSONText = data.slice(start,end);
	JParsedText = JSON.parse(JSONText);
	return JParsedText;
}

function executaPeticio(id, todo, params){
	/*id: id del document que llegeix*/
	/*todo: funcio a fer*/
	/*string: per identificar que esta fent*/
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            if (xmlhttp.status == 200) {
							todo(xmlhttp.responseText, params);
							handleComplete(params);
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

function handleBefore(){

}

function handleComplete(params){
	if(params.nom.includes("bbdd")){
		urls_bbdd --;
		bbdd_descarregada = true;
	}
}

function coloreja_marcadors(marcador){
	for(var i = 0; i < marcadors.length; i++){
		if (marcadors[i].getIcon() == 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'){
			if(marcadors[i].usuari.includes("Ajuntament"))
				marcadors[i].setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
			else{
				marcadors[i].setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
			}
		}
	}
	marcador.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
}

function activar_geolocalitzacio(){
		navigator.geolocation.getCurrentPosition(function(position) {
				if (marcador != undefined) marcador.setMap(null);

				marcador = new google.maps.Marker({
					position: {lat:position.coords.latitude, lng:position.coords.longitude},
					map: map,
					icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
				});
				geocodeLatLng(geocoder, map, infoWindow, marcador);
				document.getElementById('Latitud').value = (marcador.getPosition().lat());
				document.getElementById('Longitud').value =(marcador.getPosition().lng());
		});
}
