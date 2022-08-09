var valorContador = 0

function incrementar(){
    valorContador++;
    document.getElementById("contador").innerHTML = valorContador;
}
function decrementar(){
    valorContador--;
    document.getElementById("contador").innerHTML =  valorContador;
}
function resetear(){
    valorContador = 0;
    document.getElementById("contador").innerHTML =  valorContador;
}