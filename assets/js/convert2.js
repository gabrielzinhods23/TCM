function calcular2() {
    var pace = document.getElementById('txtKmh').value;
    pace = pace.split(":");
    var min = parseInt(pace[0]);
    var sec = parseInt(pace[1]);
    sec = sec / 60;
    min = min + sec;
    // Convertendo minutos por quilômetro para quilômetros por hora
    var kmh = 60 / min;
    // Arredondando para duas casas decimais
    kmh = Math.round(kmh * 100) / 100;
    console.log(kmh);
    document.getElementById("resultado").innerHTML = "Sua velocidade em Km/h é " + kmh + "km/h";
}
