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