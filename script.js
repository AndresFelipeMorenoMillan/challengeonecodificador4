
function encriptar() {

    var texto = document.getElementById("texto").value.toLowerCase();
    // i = mayusculas y minusculas
    // g = toda la linea
    // m = todo el parrafo
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    
    document.getElementById("img1").style.display = "none";
    document.getElementById("msj1").style.display = "none";
    document.getElementById("msj2").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar() {

    var texto = document.getElementById("texto").value.toLowerCase();
    // i = mayusculas y minusculas
    // g = toda la linea
    // m = todo el parrafo
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    
    document.getElementById("img1").style.display = "none";
    document.getElementById("msj1").style.display = "none";
    document.getElementById("msj2").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function copiar() {

    var contenido = document.querySelector("#msj2");
    contenido.select();
    document.execCommand("copy");
    
}