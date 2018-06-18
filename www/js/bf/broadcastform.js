
//classes per guardar les dades
class Detall{
	constructor(titol, contingut){
		this.titol = titol;
		this.contingut = contingut;
	}

}
class Ajuntament{
	constructor(ajt){
		this.nom = ajt;
		this.latitud;
		this.longitud;
		this.tipus;
		this.titol;
		this.descripcio = [];
		this.date;
		this.comarca;
	}
	
}

class Comarca{
	constructor(nom,link){
		this.nom = nom;
		this.canals = [];
		this.idget = "";
		this.linkpost = link;
		this.iframe = "";
		this.municipis = [];
	}
}

/*			FUNCIONS			*/


/*	Formularis GOOOGLE*/
function embeddFormulari(comarca, id){
	var index = dict_comarques.get(comarca);
	comarques[index].iframe = id;
}

function ompleEmbedsComarques(){
	embeddFormulari("altcamp", 'https://docs.google.com/forms/d/e/1FAIpQLSc3yEI2iKxuAVZID2alYLr_nQkd5HDOtLYd5uiMkMeDcVKhbg/viewform?embedded=true');
	embeddFormulari("altemporda", 'https://docs.google.com/forms/d/e/1FAIpQLSciitIA3SJ1Hav3Eu5MjNd6cekmbHXKtElZlU6L2xbtsc8klA/viewform?embedded=true');
	embeddFormulari("altpanades", 'https://docs.google.com/forms/d/e/1FAIpQLSfHbRfPUknKgu-Xatk8SmWcgoCtivHOp-7wuc8Ibzgjo6JvsQ/viewform?embedded=true');
	embeddFormulari("alturgell", 'https://docs.google.com/forms/d/e/1FAIpQLSdUsYrAvE43OOHPt91g3I_rDxdmm8YfihDk1-BFcOT7wCNzYQ/viewform?embedded=true');
	embeddFormulari("altaribagorca", 'https://docs.google.com/forms/d/e/1FAIpQLSfGyt2-5_XExOD7muryjexOI8jRrACKxAXY-5AHh__ddG014A/viewform?embedded=true');
	embeddFormulari("anoia", 'https://docs.google.com/forms/d/e/1FAIpQLSfrHzOnpne9lLDxAtYGlz9-bGFYJwneIa4hR0CNFawYpQvk4A/viewform?embedded=true');
	embeddFormulari("aran", 'https://docs.google.com/forms/d/e/1FAIpQLSc8GdaHjCQZNe_qtmd0tB6JdMts4lzRd5UEUisahdrXRmuzsQ/viewform?embedded=true');
	embeddFormulari("bagues", 'https://docs.google.com/forms/d/e/1FAIpQLSfmIXuL_jaCbUdcQpL7rZcOiwo9MGqo6aj2F9EWfo-PDARJ1A/viewform?embedded=true');
	embeddFormulari("baixcamp", 'https://docs.google.com/forms/d/e/1FAIpQLScEZXpFu85RQ9ZuCs2udE3mb3lCbtSdLd3tYJG8D7UV-AV7xA/viewform?embedded=true');
	embeddFormulari("baixebre", 'https://docs.google.com/forms/d/e/1FAIpQLScg3urfsiZhDuzyEnPV01AIqDFJqQJJrxV5AAifCT8OCo7EYw/viewform?embedded=true');
	embeddFormulari("baixemporda", 'https://docs.google.com/forms/d/e/1FAIpQLSckvcsAhQT7qnq3sYfWaReC6xq7euc7jxKXqLgFuwHailp0Ag/viewform?embedded=true');
	embeddFormulari("baixllobregat", 'https://docs.google.com/forms/d/e/1FAIpQLSdX1CdR4Fs7wa8H-frQlb8KxcgdZB98FE8wVvQrsyrkL0BTCg/viewform?embedded=true');
	embeddFormulari("baixpanades", 'https://docs.google.com/forms/d/e/1FAIpQLSdjmdj-Y6ZWKNa0D1krbc0FopMzasSzF4wgkSeaFqtqy00AYw/viewform?embedded=true');
	embeddFormulari("barcelones", 'https://docs.google.com/forms/d/e/1FAIpQLSfw8uAcngZtNnOwALww_sqwoyNL8nMzzmW25dQ-IJg4offQLA/viewform?embedded=true');
	embeddFormulari("bergueda", 'https://docs.google.com/forms/d/e/1FAIpQLSfsMpFqPkth3ZGAhthTIUp9frWCKGUfvrqUegO71t6ZISViqw/viewform?embedded=true');
	embeddFormulari("cerdanya", 'https://docs.google.com/forms/d/e/1FAIpQLSf067zjBaevqbxQVIPns3cazYrEVICifnZ7CRlnJz3z3OvbMg/viewform?embedded=true');
	embeddFormulari("concadebarbera", 'https://docs.google.com/forms/d/e/1FAIpQLSc6rrg33WomtYigXqddZ2J2u_pgLFRiPYXEFjKhiAzHTKHzUA/viewform?embedded=true');
	embeddFormulari("garraf",'https://docs.google.com/forms/d/e/1FAIpQLScKg-ehumUpPf5ist-gjSiPkbc266AT7Ie4iw3byfAN4J-TWA/viewform?embedded=true');
	embeddFormulari("garrigues", 'https://docs.google.com/forms/d/e/1FAIpQLSfe4xMjLbSzwhhQYlyDDhawUe06SH4-n-kzqjWTxaujGnR8PQ/viewform?embedded=true');
	embeddFormulari("garrotxa", 'https://docs.google.com/forms/d/e/1FAIpQLSfPY1eOjKrN5oXoW9VBQYMtinAiB4UoNZm9U7cq0SoyIcw8ZA/viewform?embedded=true');
	embeddFormulari("girones", 'https://docs.google.com/forms/d/e/1FAIpQLScggMOQX3hpiZjH_z7uHseTR-0OktuvUqin0Cik03NMK5Z1Ig/viewform?embedded=true');
	embeddFormulari("lanoguera", 'https://docs.google.com/forms/d/e/1FAIpQLSfLD23CG08lQhCsRomURa2zgPf11V-9g1eb9fxooPI7wck4Mg/viewform?embedded=true');
	embeddFormulari("maresme", 'https://docs.google.com/forms/d/e/1FAIpQLSfxf6Z_cEprneCbp61CcYYaSmJTMnIGQpPLND4ftYFnjjCYwA/viewform?embedded=true');
	embeddFormulari("montsia", 'https://docs.google.com/forms/d/e/1FAIpQLSfN471JABmPfM8B8xb54MGY3Qc5rpxvVO5YmCOXfv8UfFrEcw/viewform?embedded=true');
	embeddFormulari("osona", 'https://docs.google.com/forms/d/e/1FAIpQLSdW7l3mvx3rNUKl_WdXLP4WSeEw6IAqZjgUF06dpFNrpkWsaQ/viewform?embedded=true');
	embeddFormulari("pallarsjussa", 'https://docs.google.com/forms/d/e/1FAIpQLScTPHckhmBLBv9sjXDvX9Ckm8iLQic_BGXDqLblbOcFv3797w/viewform?embedded=true');
	embeddFormulari("pallarssobira", 'https://docs.google.com/forms/d/e/1FAIpQLScwX9Rh9M9bgXONxmX7sACSpnF_IQAEE7Jaa_arMIRklPW2uA/viewform?embedded=true');
	embeddFormulari("pladestany", 'https://docs.google.com/forms/d/e/1FAIpQLSfzpRRC1jCnwgASyrOuE8HRIOzOs8eDJmLtFTNcRB10QuIgpg/viewform?embedded=true');
	embeddFormulari("pladurgell", 'https://docs.google.com/forms/d/e/1FAIpQLScisxDqRCAZosNDk5Wj7H6M1fkzmq6_yNaFv3itUyMM1-kYww/viewform?embedded=true');
	embeddFormulari("priorat", 'https://docs.google.com/forms/d/e/1FAIpQLSelPqojacb4ElyL-P_qJmXvgw-5ewh71EuU7c1HGvAiuOhlmg/viewform?embedded=true');
	embeddFormulari("riberadebre", 'https://docs.google.com/forms/d/e/1FAIpQLSeFVkN8AC-QtQWhvZOc-u_RoyRWssBtSH59Pq_-_NeGFMZiEA/viewform?embedded=true');
	embeddFormulari("ripolles", 'https://docs.google.com/forms/d/e/1FAIpQLSd5rx1WOUBbrvpDrIv0lm09orFCeUHsTO2fQtuIMC3qDVCw5w/viewform?embedded=true');
	embeddFormulari("segarra", 'https://docs.google.com/forms/d/e/1FAIpQLSfZGTVKWqyvJUzLxbL8vAJj8Tsnuu15Wr7sWub7f-4_If_hSA/viewform?embedded=true');
	embeddFormulari("segria", 'https://docs.google.com/forms/d/e/1FAIpQLScslzbqRE3-5tEP0JAM6dCeTCnwkLLsLzy3H2mOIN_Mxjrkmg/viewform?embedded=true');
	embeddFormulari("selva", 'https://docs.google.com/forms/d/e/1FAIpQLSeAIWJrfUbHhTwWTy-pm7-arSxp_yw1yCiGBJaTIyTTOg_5rA/viewform?embedded=true');
	embeddFormulari("solsones", 'https://docs.google.com/forms/d/e/1FAIpQLSdsN1eGR6msPhu_bcSiJuwwoJV50PfwI5BDHe-vHtOGs7OwXA/viewform?embedded=true');
	embeddFormulari("tarragones", 'https://docs.google.com/forms/d/e/1FAIpQLSchzbDVs9hwb9z4isZ1W5OPGu4yji42WT2sqEFDPfJXcu5EzA/viewform?embedded=true');
	embeddFormulari("terraalta", 'https://docs.google.com/forms/d/e/1FAIpQLSe3fpn6mYFqNFQHLYqEjeS3vj-nDhSzNgh-KvzyGB1NCO3o9w/viewform?embedded=true');
	embeddFormulari("urgell", 'https://docs.google.com/forms/d/e/1FAIpQLSfY644XYbJQl3N-Cb-wf9PtsoaAWpYhV4kWFGdqrahVkTBipw/viewform?embedded=true');
	embeddFormulari("vallesoccidental", 'https://docs.google.com/forms/d/e/1FAIpQLSfAxyLunaQwAATF28gaoArGPoMvjuyE6pUnPE7w4WTbAK0KzQ/viewform?embedded=true');
	embeddFormulari("vallesoriental", 'https://docs.google.com/forms/d/e/1FAIpQLSfR3aZvf39-AK7lO07XBp-nc-DVsCg4zuc10dWH1P0caJkAgQ/viewform?embedded=true');	
}


/* Botons Formulari*/

function afegeixBotonsCobertures(n, i){
	/*
	n: nom de la emissora
	i: index
	*/
	
	var notAppendList = ["Altres emisores de ràdio 1", "Altres emisores de ràdio 2", "Altres emisores de ràdio 3", 
	"RÀDIO LOCAL", "TELEVISIÓ NACIONAL", "TELEVISIÓ LOCAL", "TELEVISIÓ ESTATAL",
	"Altres canals de TV 1", "Altres canals de TV 2", "Altres canals de TV 3", "ALTRES FORMES DE COMUNICACIÓ 1", "ALTRES FORMES DE COMUNICACIÓ 2",
	"Nom comercial del servei", "ALTRES FORMES DE COMUNICACIÓ", "OBSERVACIÓNS"];

	var t = n;
	if(notAppendList.indexOf(t) == -1){
		$("ul#list1").append('<li class = "nel" id = "'+i+'">'+ t+ '</li>');
		var startli = '<li class = "iel">';
		var title = 'title = no arriba';
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
	
}

/* Càrrega informació aportada pels ajuntaments ---- to remove */

function setValorInProgress(){
	return 42;
}


/* AJUNTAMENTS PROPERS*/

/* maplatlongs: obtenir la lat i long de cada ajt/resposta del formulari obtinguda*/
/* marker: */
function nomClosestAjuntament(maplatlongs, marker, ajuntaments){
	
	var dist = 1000;
	var nom = "";
	var it = maplatlongs.entries()
	var evlat = marker.getPosition().lat();
	var evlng = marker.getPosition().lng();


	//obte nom ajuntament mes proper from maplatlongs

	for(var i = 0; i < maplatlongs.size; i++){
		var next = it.next();
		var locstr = next.value[1];
		var locname = next.value[0];

		if(locstr != "NaNNaN"){
			var index = locstr.lastIndexOf(".")-1;
			var loclat = parseFloat(locstr.substring(0,index));
			var loclng = parseFloat(locstr.substring(index, locstr.length));

			var difa = loclat-evlat;
			var difb = loclng-evlng;
			var locdist = Math.sqrt(Math.pow(difa,2) + Math.pow(difb, 2));

			if(locdist < dist ){
				dist = locdist;
				nom = locname;
			}
		}
	}
	
	return nom;
}

function closestAjuntament(maplatlongs, marker, ajuntaments){
	var nom = nomClosestAjuntament(maplatlongs, marker, ajuntaments);
	
	var ajt;
	for(var i = 0;  i < ajuntaments.length ; i++){
		if(ajuntaments[i].nom == nom){
			ajt = ajuntaments[i];
			break;
		}
	}
	return ajt;
}

/* ASSOCIACIO NOM INDEX*/

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

/*	PARSE DATA TO JSONText*/

//treiem els primers caracters i ultims per poder parsejar
//fem el parsing i ho retornem
function returnDataParsed(data){
	var start = 25;
	var end = data.length - 2;
	var JSONText = data.slice(start,end);
	JParsedText = JSON.parse(JSONText);
	return JParsedText;
}


function ompleArrayCanals(data){

	var data = returnDataParsed(data);

	var length = data.feed.entry.length;
	for(var i = 0; i < length; i++){
		var locnom = data.feed.entry[i].gsx$nom.$t;
		var locjson = data.feed.entry[i].gsx$idjson.$t
		canals.push(new Detall(locnom, locjson));
	}
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

/*OBTE ELS CANALS DE LES COMARQUES */
// de cada entry es mira si pertany a la comarca
// si pertany es fa el pushs a entries (es un index)
// 

function omple_canalscomarca(data){
	var data = returnDataParsed(data);
	var entry = data.feed.entry;
	for(var i = 0; i < entry.length; i++){
		var entries = [];
		entries.push(entry[i].gsx$altaribagorca.$t);
		entries.push(entry[i].gsx$altcamp.$t);
		entries.push(entry[i].gsx$altemporda.$t);
		entries.push(entry[i].gsx$altpanades.$t);
		entries.push(entry[i].gsx$alturgell.$t);
		entries.push(entry[i].gsx$anoia.$t);
		entries.push(entry[i].gsx$aran.$t);
		entries.push(entry[i].gsx$bagues.$t);
		entries.push(entry[i].gsx$baixcamp.$t);
		entries.push(entry[i].gsx$baixebre.$t);
		entries.push(entry[i].gsx$baixemporda.$t);
		entries.push(entry[i].gsx$baixllobregat.$t);
		entries.push(entry[i].gsx$baixpanades.$t);
		entries.push(entry[i].gsx$barcelones.$t);
		entries.push(entry[i].gsx$bergueda.$t);
		entries.push(entry[i].gsx$cerdanya.$t);
		entries.push(entry[i].gsx$concadebarbera.$t);
		entries.push(entry[i].gsx$garraf.$t);
		entries.push(entry[i].gsx$garrigues.$t);
		entries.push(entry[i].gsx$garrotxa.$t);
		entries.push(entry[i].gsx$girones.$t);
		entries.push(entry[i].gsx$lanoguera.$t);
		entries.push(entry[i].gsx$maresme.$t);
		entries.push(entry[i].gsx$montsia.$t);
		entries.push(entry[i].gsx$osona.$t);
		entries.push(entry[i].gsx$pallarsjussa.$t);
		entries.push(entry[i].gsx$pallarssobira.$t);
		entries.push(entry[i].gsx$pladestany.$t);
		entries.push(entry[i].gsx$pladurgell.$t);
		entries.push(entry[i].gsx$priorat.$t);
		entries.push(entry[i].gsx$riberadebre.$t);
		entries.push(entry[i].gsx$ripolles.$t);
		entries.push(entry[i].gsx$segarra.$t);
		entries.push(entry[i].gsx$segria.$t);
		entries.push(entry[i].gsx$selva.$t);
		entries.push(entry[i].gsx$solsones.$t);
		entries.push(entry[i].gsx$tarragones.$t);
		entries.push(entry[i].gsx$terraalta.$t);
		entries.push(entry[i].gsx$urgell.$t);
		entries.push(entry[i].gsx$vallesoccidental.$t);
		entries.push(entry[i].gsx$vallesoriental.$t);
		for(var j = 0; j < entries.length; j++){
			if(entries[j] != "") comarques[j].canals.push(canals[entries[j]]);
		}

	}


}

function ompleArrayComarques(){
	comarques.push(new Comarca("altaribagorca", 'AKfycbwfx9G1i4fG7dC389wYASxufv2OSrYfKSHJYkVre_LqQjtAvSEa'));
	comarques.push(new Comarca("altcamp", 'AKfycbyKtr9H0bGL2u8jDoD83ICdBvO5Iaiu6nIwOClLcQIxWf1goDQ'));
	comarques.push(new Comarca("altemporda",'AKfycbzO4yjO8owZsB29aATuTl12167v9TczuD0UVgaEQ9FtQGwHV3l8'));
	comarques.push(new Comarca("altpanades","AKfycbxQHQ91WOjm2hbdKUMCX_6Oin2VaEA9NP5DDyIXvzoAUDPyGfaZ"));
	comarques.push(new Comarca("alturgell", 'AKfycbzy5-K2D8pjvSPq5oyPke_Ali7tYT2PfE7W8ttpmx1LIQQhieF1'));
	comarques.push(new Comarca("anoia", 'AKfycbx0LwwGNj1QuYyiRKYIdAWz76r7jqIifJQt0_wtRti9Iip4ZeE'));
	comarques.push(new Comarca("aran",'AKfycbwbEeIIWmWIaj3y9dcC4hyOwu20NMzM4kb1G8cYZB97vLD-mZc'));
	comarques.push(new Comarca("bagues", 'AKfycbyQF67i_24d-OU61WmH0NIWIvhsYXxm05enwdM6k73poX6Ly09u'));
	comarques.push(new Comarca("baixcamp", 'AKfycbxY0LKB6RH422hYjiKd_cacyiIUhH9_r0hbq_kf_JsE98rHPkU'));
	comarques.push(new Comarca("baixebre", 'AKfycbxHFw-XvodsJrNcvXFLb5n8K-YWiER3I_BCVSbQVr5m3SvfW_Q'));
	comarques.push(new Comarca("baixemporda",'AKfycbzxzW3BxCDc6V0PNsoarP25DnM4MrL0xEGTXGicKUYNCPzc7rE'));
	comarques.push(new Comarca("baixllobregat",'AKfycbyNlIB1Ak31Gy1CJkR_y65-7cCnaFQRXsmflDqDfxBRS1OxBDI'));
	comarques.push(new Comarca("baixpanades",'AKfycbzgF1Un_w3k1YWRZXLoX13XCbqm1N4mPrfF4TQlK2Lhr2UT7v01'));
	comarques.push(new Comarca("barcelones",'AKfycbzX7PiZ3j9g63uvZ53B5m9fr-YgqHGdlvK-4YN7iw6mx3Ggqtc'));
	comarques.push(new Comarca("bergueda",'AKfycbyCETWno5_WHZzEf6o47inwFO4peTk2GzzuO5OCDTv-n5dr58E'));	
	comarques.push(new Comarca("cerdanya",'AKfycbzOt_c9Hx3ufd2-w52OrBu0NKod6QbZ5K4cwMQAtDqR8KW5aW7y'));
	comarques.push(new Comarca("concadebarbera",'AKfycbyncidALeSZDGKNwzZDYT6OP1GhZdxXJBPGH1ZwuXQQUdH7B1Zv'));
	comarques.push(new Comarca("garraf",'AKfycbx5nXrR0Ql_1ecEq9rzE-76jCk1LwQq6BGrBBzHCzQZ1ABHM2UB'));
	comarques.push(new Comarca("garrigues",'AKfycbwIk9HJuZ0-gz3WTtsunmfNbTLOmiHPpbb2jK9qW5RPSuQti5gr'));
	comarques.push(new Comarca("garrotxa",'AKfycbxbjlB40chexZI7Ycoa58tkPv-OH-ehgPayHkoPKHDBXuJz1mLR'));
	comarques.push(new Comarca("girones",'AKfycbxI0G3xY_116zmszuVQrxz9j52QpjUingUh1WfAFdz63a-7EKA2'));	
	comarques.push(new Comarca("lanoguera",'AKfycbx09Fa0o3FksDQZ72ye0mBU2mOYOzrZyTK3ZT-GY88CxlzthVQ'));
	comarques.push(new Comarca("maresme",'AKfycbx6fY0pxmcTykTU9k7euZKjEfyupF6mxoaXhEtD6CZfCTaVeg4'));
	comarques.push(new Comarca("montsia",'AKfycbzoNEL3cnEXRc79p2HXU81QRZHx72vwkNxh10OqaetnEUb611Q'));	
	comarques.push(new Comarca("osona",'AKfycbzQ5jOdjU5wQh07azmmdcnKeV7GZdw6oInClA9Clh3-FTDZ_sQ'));
	comarques.push(new Comarca("pallarsjussa",'AKfycbyc8K_yhAzXeOGdlpm35PdZ1kG8pvc5A3x1ZdL2WE_ipIwNFmbk'));	
	comarques.push(new Comarca("pallarssobira",'AKfycbylB__2qS95U0TrTVonZOrrq2IOfVA5Fqg3EiqYjkrgXbKoT_Ok'));	
	comarques.push(new Comarca("pladestany",'AKfycbyB-UF5cp-6aPQUEZFZEhLmQfytzfb-c1Ww_7Nt7tvK5qYGtelH'));
	comarques.push(new Comarca("pladurgell",'AKfycbwtWfo548WDJvXq47ywzNL0cS36_yoo6WOo1JH76bZgEYY_yMAi'));	
	comarques.push(new Comarca("priorat",'AKfycbwGUCZEZWWCkvU9zk349h-fltjPnKO9lq8-SCwUdzruigX6nCB7'));
	comarques.push(new Comarca("riberadebre",'AKfycbyuZl18_wD6HZhNSQSEIYBPnPTOUHNp2v5KK1f0FHdhpvwkxCBq'));
	comarques.push(new Comarca("ripolles",'AKfycbywoPN4EkcYWbES7YSOD13P1wD-b_yDNpCbkLQRf3SpVl12MVeA'));
	comarques.push(new Comarca("segarra",'AKfycbzXNSjOZ78m8XUWFMZ3sYe2NNcYjPMGm7t9LBFe4axaGv5OD-iW'));	
	comarques.push(new Comarca("segria",'AKfycbxSer1X0sNIokWD1s9CkByEQ3jaqAI5mlU5ftCDkv403-b8Dwk'));	
	comarques.push(new Comarca("selva",'AKfycby2MKzyQ-BMi03ubI6IL1wNkVvHf9uSzY_IRag5WfBusyPBkM0'));
	comarques.push(new Comarca("solsones",'AKfycbwmZc2kRXHvBFjqMAl-zh3loKJS_ya5fUbFMPhIU1pH5V8wLZTD'));
	comarques.push(new Comarca("tarragones",'AKfycbyXcfF8ioD_TdYTfICrlI-R5mEtGEF3TecUq_kFuVH13FesI2o'));
	comarques.push(new Comarca("terraalta",'AKfycbzCbTsoiEvByJJjp95LP06BLLDETIp42O8F_RQxC_2wbN18-8iq'));
	comarques.push(new Comarca("urgell",'AKfycbxED94Yw5CGySXkFZkCTLe7T-IHCTaVaw3IcIFeYiRz5NO4nlAm'));
	comarques.push(new Comarca("vallesoccidental",'AKfycbwm41dkBzL8e2ElRk6SiPe0IMCBTRfiDEHe6GZCp3vCoWcvvVlN'));
	comarques.push(new Comarca("vallesoriental",'AKfycby9aLuwdrsJWEOX2vY0SfQbkVTlNqQAfMdkbFj6dYwn1jfOzus'));
	
	
	
	
	
}

function ompleDataCanalsComarca(data){
	data_canalscomarca = obteDataParsejada(data);
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

//innecessari de moment, comunica que hi ha un nou proces fent-se
function handleBefore() {
	inProgress++;
};

//es diu que hi ha un proces menys i si no n'hi ha cap s'executa el clusteritzador
function handleComplete(name) {
	--inProgress;
	var valor = (1-(inProgress/setValorInProgress()));
	bar.animate(valor, function(){
		if(bar.value() == 1){
			bar.path.setAttribute("stroke", "#6bff6b");
		}
	});
	if (!inProgress) {
		// do what's in here when all requests have completed.
		
		console.log(inProgress);
		markerCluster = new MarkerClusterer(map, array,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' , ignoreHidden:true});
		markerCluster.clearMarkers();
		ajuntamentsDescarregats = true;
	}
};

function updateMarkersICluster(activa){
	if(activa){
		if(markerCluster.markers_.length == 0){
			for(var i = 0; i < array.length; i++){array[i].setMap(map);}
			markerCluster.addMarkers(array)
		}
		else{
			markerCluster.repaint()
		}

	}
	else{
		for(var i = 0; i < array.length; i++){array[i].setMap(null);}
		markerCluster.clearMarkers();
	}

}


function cargaDatosSegonsID(map){
	var data_altaribagorca = '1o28GgM3THzqLivRGjD17jF4-AMb66Km_S34GKFDe85s';
	var data_altcamp = '1JndbQsVpzVTIID0sf_1wJuqDADPtrerqXFIUF__LBMI';
	var data_altemporda = '1h7cGJ9oGbA0sXr0HuRR75rb2N88xURh2ZAlJJ50kdxE';
	var data_altpanades = '1FrQO4IDl70l4qUj63OzMAHqLlhV67qWc-xP-jzSCkos';
	var data_alturgell = '1WA1ZXw6U9mWfhTpfLCPwNl8nGzxWliHCjjnCtVlL5bk';
	var data_anoia = '19iwB4oW8VEwq7SB8J0reQKdavQRGsG9TTSx16Rq7YDk';
	var data_aran = '1fI5RFLliSB0MtECvxT4GuoMoQpRo3OKjbU4sQ5O4muk';
	var data_bagues = '1R4nBEm019vzeZR11YMMXhqfKx35c-_4fXsYMhtDUuw8';
	var data_baixcamp = '1t7VrTbVEnTcbU9pJzNFrVJGjaf19iX3OGZHZQABGlLo';
	var data_baixebre = '14O6RbL-l4RBbWLEKDZnqNYIe9tR2eMITNg_VbdAmxyk';
	var data_baixemporda = '1tpoJwXMhlAWYpCooOJzQFXAxiykKhULaPSyGH2VIfuE';
	var data_baixllobregat = '1YGuMrnJ2XVGX8thsAskzHeuD-XbyMZcKQ8Ssqu2HjPc';
	var data_baixpanades = '1IWHBt17GWnvLfUcxOahKlOcw6H9R2t84s7Bms2wmK20';
	var data_barcelones = '1L_pt_2ZZeIDHTXn9YR_M-cPbqkehWhQ_1tRHFNxC80c';
	var data_bergueda = '1v2EU6xywTdbERXuXiJxyaWOC_Pjtfa_TfZ6vjjbLt3w';
	var data_cerdanya = '1pA8n5HtPM_olfm0NKmqd96n7QImq4KDjzptR4AnbGi4';
	var data_concadebarbera = '1XKh4HWgzd_u0R5Sg5D8W7ejTZ9wo8KrEU2im4yA89J0';
	var data_garraf = '1uIXneWHDJUiVUDmKzkQ4cpoWfBBPrrLd49wkiTLj5YM';
	var data_garrigues = '1Fk7zg-UVfpNACKO_VXNyc4RHUPI8_wPca-222DUOm9I';
	var data_garrotxa = '1hiT9nZyM2eLlZOV_89oIDhEd9eFpQbMbSTwWwrreoGk';
	var data_girones = '1gwxSZo-qq1BAryC_p6QmNGaqEdBkcVxnLtWVjy8Dt8Q';
	var data_lanoguera = '1IvfTi-9CdQkpL2TMgZqxh23Y2tC6gM8p-ZONkE4f-6g';
	var data_maresme = '1IQmY3wZ7FvMKKkVdt2ng04y5TddZmW838ZGAhLacUqk';
	var data_montsia = '1L-t6Q4OrOJ8mXEzKybaKW-_b-JqFGt3JHnG_jbht2yg';
	var data_osona = '1le8uZrUcwbAxpEHTyk4dL2fbe6wvpakiGypWiDJAQ_E';
	var data_pallarsjussa = '1hy7v51_l5kuQo7zMualXrRa7t6K7ejU5NjSHwAIxKa0'
	var data_pallarssobira = '1mbrnJmAf6m2NDOQZDNOnSF7uV9A4u3msOVUBcXtTxlo';
	var data_pladestany = '1VJx7xzVzfCabMLjcQVNJq9OHAPPf3XxcTTNxip9MbP4';
	var data_pladurgell = '1BzQOfc5N3fd8GkOtknw6fKG4zC944LMxvjQeruyOS-A';
	var data_priorat = '1PFIY8LZp4AIWEijroS2ccqvOKoTxj9HAdRGVEeXgLaE';
	var data_riberadebre = '1zYDmSNj4z1yYqkYXoGYnMXens0dOnsIYAJiUsaEfD3w';
	var data_ripolles = '1IRPgPcO4ve_1au3FTO1l3JBB9TwNWhrmma6qTxyKKb8';
	var data_segarra = '1x0PtIoyZlzCjES6yeX9hNBTAuUveoW4fIPJvscSAQ8A';
	var data_segria = '1HW__ThUYmvfIdoqZF59z34ZWSTitsiecvFX0BR2tzCs';
	var data_selva = '1LQwqX1guN7SnFRDCJiQhxZb8pH-ucwMRXxyX0FAnzpo';
	var data_solsones = '1Sd1cRLYTzL0Hdif91tRn_jpP2Cbe3pqs2fODQe4wdgw';
	var data_tarragones = '14b4BaoVcvOXxrTfEsqaJ1ngp8LRr0p0paraRc_kEPxU';
	var data_urgell = '1pMUw811VKG9HMAbmU4AcBVPjXVMH4TXbUPwcelicwAc';
	var data_terraalta = '1EGkzHJP6NG0D4Srqva5zBg_MB_-uCoWfFQ6d_Fc-y4Y';
	var data_usuaris = '1mTRB-z51LqajrD5h6bNyNg5ZNhFuFjpQ6O0r3oYF498';
	var data_vallesoccidental = '1WCIpcQTYJ3_xr8vJFvTtoVLdQ_7qT7rHC7Tg9JzXoQ4';
	var data_vallesoriental = '1NU4L0FKxogRbWrt6jqXuAJlxOkvEq9XkxIPKVn5IWlc';
	var data_usuaris = '1mTRB-z51LqajrD5h6bNyNg5ZNhFuFjpQ6O0r3oYF498'
	executaAJAX(map,"altaribagorca",data_altaribagorca);
	executaAJAX(map,"altcamp",data_altcamp);
	executaAJAX(map,"altemporda",data_altemporda);
	executaAJAX(map,"altpanades",data_altpanades);
	executaAJAX(map,"alturgell",data_alturgell);
	executaAJAX(map,"anoia",data_anoia);
	executaAJAX(map,"aran",data_aran);
	executaAJAX(map,"bagues",data_bagues);
	executaAJAX(map,"baixcamp",data_baixcamp);
	executaAJAX(map,"baixebre",data_baixebre);
	executaAJAX(map,"baixemporda",data_baixemporda);
	executaAJAX(map,"baixllobregat",data_baixllobregat);
	executaAJAX(map,"baixpanades",data_baixpanades);
	executaAJAX(map,"barcelones",data_barcelones);
	executaAJAX(map,"bergueda",data_bergueda);
	executaAJAX(map,"cerdanya",data_cerdanya);
	executaAJAX(map,"concadebarbera",data_concadebarbera);
	executaAJAX(map,"garraf",data_garraf);
	executaAJAX(map,"garrigues",data_garrigues);
	executaAJAX(map,"garrotxa",data_garrotxa);
	executaAJAX(map,"girones",data_girones);
	executaAJAX(map,"lanoguera",data_lanoguera);
	executaAJAX(map,"maresme",data_maresme);
	executaAJAX(map,"montsia",data_montsia);
	executaAJAX(map,"osona",data_osona);
	executaAJAX(map,"pallarsjussa",data_pallarsjussa);
	executaAJAX(map,"pallarssobira",data_pallarssobira);
	executaAJAX(map,"pladestany",data_pladestany);
	executaAJAX(map,"pladurgell",data_pladurgell);
	executaAJAX(map,"priorat",data_priorat);
	executaAJAX(map,"riberadebre",data_riberadebre);
	executaAJAX(map,"ripolles",data_ripolles);
	executaAJAX(map,"segarra",data_segarra);
	executaAJAX(map,"segria",data_segria);
	executaAJAX(map,"selva",data_selva);
	executaAJAX(map,"solsones",data_solsones);
	executaAJAX(map,"tarragones",data_tarragones);
	executaAJAX(map,"terraalta",data_terraalta);
	executaAJAX(map,"urgell",data_urgell);
	executaAJAX(map,"vallesoccidental",data_vallesoccidental);
	executaAJAX(map,"vallesoriental",data_vallesoriental);
	executaAJAX(map,"usuaris",data_usuaris);
}


function ompletraductor(){
	maptraductor.set("Alta Ribagorça","altaribagorca");
	maptraductor.set("Alt Camp","altcamp");
	maptraductor.set("Alt Empordà","altemporda");
	maptraductor.set("Alt Penedès","altpanades");
	maptraductor.set("Alt Urgell","alturgell");
	maptraductor.set("Anoia","anoia");
	maptraductor.set("Aran","aran");
	maptraductor.set("Bages","bagues");
	maptraductor.set("Baix Camp","baixcamp");
	maptraductor.set("Baix Ebre","baixebre");
	maptraductor.set("Baix Empordà","baixemporda");
	maptraductor.set("Baix Llobregat","baixllobregat");
	maptraductor.set("Baix Penedès","baixpanades");
	maptraductor.set("Barcelonès","barcelones");
	maptraductor.set("Berguedà","bergueda");
	maptraductor.set("Cerdanya","cerdanya");
	maptraductor.set("Conca de Barberà","concadebarbera");
	maptraductor.set("Garraf","garraf");
	maptraductor.set("Garrigues","garrigues");
	maptraductor.set("Garrotxa","garrotxa");
	maptraductor.set("Gironès","girones");
	maptraductor.set("Noguera","lanoguera");
	maptraductor.set("Maresme","maresme");
	maptraductor.set("Montsià","montsia");
	maptraductor.set("Osona","osona");
	maptraductor.set("Pallars Jussà","pallarsjussa");
	maptraductor.set("Pallars Sobirà","pallarssobira");
	maptraductor.set("Pla de l'Estany","pladestany");
	maptraductor.set("Pla d'Urgell","pladurgell");
	maptraductor.set("Priorat","priorat");
	maptraductor.set("Ribera d'Ebre","riberadebre");
	maptraductor.set("Ripollès","ripolles");
	maptraductor.set("Segarra","segarra");
	maptraductor.set("Segrià","segria");
	maptraductor.set("Selva","selva");
	maptraductor.set("Solsonès","solsones");
	maptraductor.set("Tarragonès","tarragones");
	maptraductor.set("Terra Alta","terraalta");
	maptraductor.set("Urgell","urgell");
	maptraductor.set("Vallès Occidental","vallesoccidental");
	maptraductor.set("Vallès Oriental","vallesoriental");
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
              handleComplete(nom);
           }
           else {
               console.log('something else other than 200 was returned');
               handleComplete(nom);
           }
        }
    };

    xmlhttp.open("GET", "https://spreadsheets.google.com/feeds/list/"+id+"/1/public/values?alt=json-in-script&callback=callback", true);
    xmlhttp.send();
}


function controlaInformacio(data,nom){
	
	comarca = nom
	/*parseja text*/
	if(nom == "usuaris") return;

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
		
		if(entry['gsx$indiqueuelmunicipidesdonompliuelformulari'] != undefined){
			var valuemap = entry['gsx$indiqueuelmunicipidesdonompliuelformulari'].$t;
			maplatlongs.set(valuemap,latlon);
		}
			
		myLatLng = {lat: latfield, lng: lonfield};
		
		var marker2 = setMarker(comarca, myLatLng, entry, map, array)
		
		//ajuntaments
		if(comarca != "usuaris"){
			afegeixAjuntament(comarca, ajuntaments, entry);
		}
		else{
			afegeixUsuaris(ajuntaments, entry);
		}
		
		
		(function(marker2, ajt){ google.maps.event.addListener(marker2, 'click', function(e){
			infoWindow.setContent(ajt.nom + " situat a " + ajt.comarca);
			infoWindow.open(map,marker2);	
			})
		})(marker2,ajuntaments[ajuntaments.length-1]);
		
		
	}	

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
			title: entry['gsx$indiqueuelmunicipidesdonompliuelformulari'].$t//,
			//map: map
		});
	}
	else{
		var title = comarca == "" ? 'gsx$entitat' : 'gsx$direcció';
		setIcon();
		var marker = new google.maps.Marker({
			position: myLatLng,
			title: entry[title].$t,
			icon: im//,
			//map: map
		});
	}
	//marker.setMap(map);
	marker.setMap(null);
	array.push(marker);
	return marker;
}

function setIcon(){
	im = {
		url: 'img/user-icon.png',
		scaledSize: new google.maps.Size(35, 35),

	};
}


function afegeixUsuaris(ajuntaments, entry){
	var p = new Ajuntament(entry['gsx$direcció'].$t);
	p.comarca = "usuari";
	p.descripcio.push(new Detall("Observació", entry['gsx$observacions'].$t));
	ajuntaments.push(p);
}

function afegeixAjuntament(comarca, ajuntaments, entry){
	var p = new Ajuntament(entry['gsx$indiqueuelmunicipidesdonompliuelformulari'].$t);
	p.comarca = comarca;
	obteContingutSegonsComarca(comarca, ajuntaments, p, entry);
}


function obteContingutSegonsComarca(comarca, ajuntaments, ajt, entry){

	//canals = guardaCanals();
	canalsc = comarques[dict_comarques.get(comarca)].canals;
	
	obtenEntrys(ajuntaments,ajt,entry, canalsc);
	
}

function obtenEntrys(ajuntaments, ajt, entry, canalscomarca){
	ajt.idform = entry.id.$t.substring(43,87);
	ajt.latitud = entry.gsx$latitude.$t;
	ajt.longiutd = entry.gsx$longitude.$t;
	for(i = 0; i < canalscomarca.length; i++){
		var tosearch = "";
		if(canalscomarca[i] != undefined)
			tosearch = canalscomarca[i].contingut;	
			
		if(ajt.comarca == "bagues" && tosearch == "gsx$radiomarca"){
			tosearch = "gsx$radioblanca";
		}
		if(ajt.comarca == "osona" && tosearch == "gsx$televisiódelberguedà"){
			tosearch = "gsx$canaltaronja";
		}
		try{
			if(tosearch == "" || tosearch == undefined){
				if(canalscomarca[i]!=undefined) 
					ajt.descripcio.push(new Detall(canalscomarca[i].titol));
			}
			else{
				ajt.descripcio.push(new Detall(canalscomarca[i].titol, entry[tosearch].$t));
			}
		}
		catch(err){			
			console.log(ajt);
			console.log(i + "  " + canalscomarca.length);
			console.log(canalscomarca[i])
			console.log(canalscomarca[i].titol)
			console.log(canalscomarca[i].contingut)
			console.log(entry);
		}
		
	}
	ajuntaments.push(ajt);
}

// un cop carregada la pagina prepara què fer quan facin click sobre el pin i la senyal de cobertura

var textTitol;

function load(){
	
	
	$("#pinmap").click(function(){
		$(this)
			    .toggleClass('map')
			    .toggleClass('import');			  
		$("#sigico").toggleClass('signal').toggleClass('pin');
		$("div#map_form").slideToggle();	
		$(".formulari").slideToggle();
	});
	
	// quan fas click al símbol de cobertura 
	$("#sigico").click(function(){

		//si esta a l'icona de senyal
		if($("#sigico").attr("Class") == "icon signal"){

			// TITOL 

			//si has fet senyala click i el llistat es veu, vol dir que canvies cap a no veure i per tan col·loques el nom de nou
			if($("#llistat").css("display") == "grid"){
				$("#titol-principal")[0].innerText = textTitol;
			}
			else{

			// si no està configurat encara com a grid vol dir que està com a block? 
				textTitol = $("#titol-principal")[0].innerText;
				$("#titol-principal")[0].innerText = "Llistat emissores";
			}


			// TOGGLE

			// fés el Toggle entre pestanyes.
			$(".embolcall-info").slideToggle();	
			$("#llistat").slideToggle();

			// CSS


			// si està com a block, posa el display a grid
			if($("#llistat").css("display") == "block"){
				$("#llistat").css("display","grid");

			}
			$('.el').css('height', $('.nel').innerHeight());
		}
		if($("#sigico").attr("Class") == "icon pin"){
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

	});

	$(".ubi").click(function(){
		$("#pinmap")
			    .toggleClass('map')
			    .toggleClass('import');			  
		$("#sigico").toggleClass('signal').toggleClass('pin');
		$("div#map_form").slideToggle();	
		$(".formulari").slideToggle();
	});


	console.log("carregat");
}

// Toggle 

function togglemapform(){
	$("div#map_form").toggle();
	$("fomr#gform.formulari").toggle();

}

function insertaiframe(iframe){
	$("iframe.formulari").attr('src', iframe)
}



/*GEOLOCALITZACIÓ*/
				function getzipcode(results){
					for(var i = 0; i < results[0].address_components.length; i++){
						var text = results[0].address_components[i].long_name; 
						if( text.length == 5){
							if(parseInt(text[0]) && parseInt(text[1]) && parseInt(text[2]) && parseInt(text[3]) && parseInt(text[4]))
								return text;
						}
					}
					return ""
				}

				function geocodeLatLng(geocoder, map, infowindow, marker) {
					var latlng = {lat:marker.getPosition().lat(), lng: marker.getPosition().lng()};
					var com = "";
					geocoder.geocode({'location': latlng}, function(results, status) {
						if (status === 'OK') {
							
							if (results[0]) {
								var c1 = ""; 
								var c2 = ""; 
								var l = results[0].address_components.length;
								var r0 = results[0].address_components;
								for(var i = 0; i < l  ; i++){
									rln = r0[i].long_name;
									c1 = revMap.get(rln);
									c2 = codipostal_comarca.get(rln);
									if(c1 == undefined){
										revMap.forEach(comparastring);
										console.log("foreach");
									}
									if(c1 != undefined || c2 != undefined){
										
										if(c1 != undefined){
											com = c1;
											document.getElementById('Municipi').value = rln;
										
										}
										if(c2 != undefined) com = c2.comarca;
										console.log("com found: " + com);
										$("#titol-principal")[0].innerText = "Registre cobertura al : " + com;
										llistat(com);
										break;
									}
								}
							  infowindow.setContent(results[0].formatted_address );
							  infowindow.open(map, marker);


							} else {
							  window.alert('No results found');
							}
						} else {
						window.alert('Geocoder failed due to: ' + status);
						}
					});
				}

				function geocodeAddress(geocoder, resultsMap) {
					var address = document.getElementById('address').value;
					geocoder.geocode({'address': address}, function(results, status) {
						if (status === 'OK') {
							resultsMap.setCenter(results[0].geometry.location);
							var marker = new google.maps.Marker({
							  map: resultsMap,
							  position: results[0].geometry.location
							});
						} else {
						alert('Geocode was not successful for the following reason: ' + status);
						}
					});
				}

/*				VARIABLES 				*/

var marker;
var ajuntamentsDescarregats = false;	//formularis descarregats?

var JParsedText;

var map;
var array = []; 				// array de marcadors, dels formularis
var infoWindow;					// per crear la finestra d'informació de cada formulari. 
var geocoder;

var canals = [];				// es guardaran totes les emissores que hi han amb el seu nom json, per a poder extreure'n la informació dels formularis. 
var ajuntaments = [];				// es refereix als formularis omplerts, inicialment només ho havien omplert ajuntaments per tan cada punt era un ajt diferent (i uns quants usuaris deixant les seves observacions)
var comarques = [];				// es guardaran les 41 comarques, nom, links i canals/emissores que tenen associades, de ràdio i tv.

var done_emissores = false;
var done_cc = false;
ompleArrayComarques();
var idemissores = "1T-sCSgblXVc3R7oEuKK-Fm9p-pkjGFt0cCnwERGON50";
var id_comarquescanals = '1p_2jhSOWnop5TkdFxmNhzMk16uWbkv22CggAvUg0YyM';
var id_cpcomarques = '1buewNhQVAmy_lEdH_T1iAeZMeQFclPyy0BHa_rOOU7Y';

var codipostal_comarca = new Map(); //on guardar els codis postals i la seva info associada
var maptraductor = new Map();
ompletraductor();
var markerCluster;	

var maplatlongs = new Map();	// per a que no hi hagin dos marcadors en la mateixa ubicació. 

var todo = true;				// si la càrrega d'informació està per fer quan estigui online es recarregarà la pàgina, per a que es faci. 
var mapaactiu = true;

var im;							// per a guardar l'icona del marcador
var typemap = "";

var styledMapType;				// disseny del mapa de dia
var styledMapType2;				// disseny del mapa de nit


var inProgress;					// quantes peticions ajax s'han de fer (de cada document, n'hi ha 41 + usuaris en el cas de broadcasting)

inProgress = setValorInProgress();

var ajuntament;
var Municipis = [];
var revMap = new Map();

var dict_comarques = new Map();	//hi guarda de cada comarca l'index. 
ompleDiccionariComarques();
ompleEmbedsComarques();

var bar = new ProgressBar.Line(progressbar, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

var rln = "";
textTitol = $("#titol-principal")[0].innerText;
window.onload = load;
executaAJAX3(id_cpcomarques, associaCPComarques, "");

function llistat(com){
	com = maptraductor.get(com);
	var icom = dict_comarques.get(com);								// 	index de la comarca
	var numdet = comarques[icom].canals.length;						// 	quants detalls te

	// LLISTAT DE BOTONS DE COBERTURES
	
	$('#gform').attr('action', 'https://script.google.com/macros/s/'+comarques[icom].linkpost+'/exec');
	
	$('ul#list1').children().remove();
	$('ul#list2').children().remove();
	
	for(var i = 0; i < numdet; i++){
		var n ;
		if(comarques[icom].canals[i] != undefined){
			n = comarques[icom].canals[i].titol;							//nom de cada detall/canal/emissora que te
		}
		else{
			break;
		}
		
		afegeixBotonsCobertures(n,i);
		
		
		$('.el').css('height', $('.nel').innerHeight());				//tamany de la caixa

		try{
			$("[class*=example-class]").hover(function(){
				var c = this.className.match(/(\d+)-example-class/)[1];//in hover
				var val = this.value;
				var ss = "#86BBD8"
				var sd = "#F26419";
				var sr = "#F6AE2D";
				var sb = "#AEE062";
				var col;
				if(val == "Regular")
					col = sr;
				else if(val == "Dolenta")
					col = sd;
				else if(val == "Bona")
					col = sb;
				else if(val == "Sense Senyal")
					col = ss;
				else{
					col = "#fcf4eb"
				}

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

function initMap() {
		todo = !todo;
		try{
			var catalunya = {lat: 41.385900681193434, lng: 2.1711516380310063};
				infoWindow = new google.maps.InfoWindow();
				geocoder =new google.maps.Geocoder;
				map = new google.maps.Map(document.getElementById('map_form'), {
				center: catalunya,
				zoom: 8,
			    zoomControl: false,
			    mapTypeControl: false,
			    scaleControl: false,
			    streetViewControl: false,
			    rotateControl: false,
			    fullscreenControl: false
			});
			executaAJAX3(idemissores, ompleArrayCanals, "canals");
			google.maps.event.addListener(map, 'click', function(event){
					if (marker != undefined) marker.setMap(null);
					marker = new google.maps.Marker({
						position: event.latLng,
						map: map,
						icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
					});
					
					console.log(marker.getPosition().lat());
					console.log(marker.getPosition().lng());
					document.getElementById('Latitud').value = (marker.getPosition().lat());
					document.getElementById('Longitud').value =(marker.getPosition().lng());
					geocodeLatLng(geocoder, map, infoWindow, marker);

					// LISTENER DEL MAPA

					(function(marker){ google.maps.event.addListener(marker, 'click', 
						function(e){
							marker.setIcon("http://maps.google.com/mapfiles/ms/icons/green-dot.png");
							//setTimeout(togglemapform, 500);
						})
					})(marker);

			});			
		}
		catch(err){
			console.log("error" + err);

		}
		typemap = "bright";
}




