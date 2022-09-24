
var attempt = 3; // Variable de numeros de intentos.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Claudio" && password == "1280"){
window.location = "lista.html"
return false;
}
else{
attempt --;// decrementa los intentos
alert(" Error, quedan  "+attempt+" intentos ");
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}