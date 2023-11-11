function calcular() {
var kmh = document.getElementById('txtKmh').value.replace(',', '.');
	pace = 1/(kmh/60); 
	sec =	(pace*100 - Math.floor(pace)*100)/100
	console.log(sec)
	sec = sec * 60
	document.getElementById("resultado").innerHTML=  "Your speed in pace is" + " " + Math.floor(pace) + ":" + Math.round(sec) + "/km ";
	
}
