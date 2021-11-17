function funcionSubmit(event) {
    event.preventDefault();
}
document.getElementById("resultado").style.display = "none";


function capturar() {
    cantidad = Number(document.getElementsByName('inputCantidad').value);
    de = document.getElementById("inputDe").value;
    a = document.getElementById("inputA").value;


let resultado = 0;
let dolr = 3875;
let peso_Mexicano = 187.0;
let euro = 4441;
let libra_Esterlina = 5184;

let pesolib = 0.000193;
let pesodllar = 0.000257;
let psomxn = 0.00531;
let psoeur = 0.00022;
 

if (de === 1 && a === 2) {
    resultado = dolr * psomxn * cantidad;
} else if (de === 1 && a === 3) {
    resultado = dolr * pesodllar * cantidad;
} else if (de === 1 && a === 4) {
    resultado = dolr * psoeur * cantidad;
} else if (de === 1 && a === 5) {
    resultado = dolr * pesolib * cantidad;
} else if (de === 2 && a === 1) {
    resultado = peso_Mexicano * pesodllar * cantidad;
} else if (de === 2 && a === 2) {
    resultado = peso_Mexicano * peso_Mexicano * cantidad;
} else if (de === 2 && a === 3) {
    resultado = peso_Mexicano * psomxn * cantidad;
} else if (de === 2 && a === 4) {
    resultado = peso_Mexicano * psoeur * cantidad;
} else if (de === 2 && a === 5) {
    resultado = peso_Mexicano * pesolib * cantidad;
} else if (de === 3 && a === 1) {
    resultado = pesodllar * pesodllar * cantidad;
} else if (de === 3 && a === 2) {
    resultado = psomxn * psomxn * cantidad;
} else if (de === 3 && a === 3) {
    resultado = pesodllar = pesodllar * cantidad;
} else if (de === 3 && a === 4) {
    resultado = psoeur * psoeur * cantidad;
} else if (de === 3 && a === 5) {
    resultado = pesolib * pesolib * cantidad;
} else if (de === 4 && a === 1) {
    resultado = euro * pesodllar * cantidad;
} else if (de === 4 && a === 2) {
    resultado = euro * psomxn * cantidad;
} else if (de === 4 && a === 3) {
    resultado = euro * psoeur * cantidad;
} else if (de === 4 && a === 4) {
    resultado = euro * euro * cantidad;
} else if (de === 4 && a === 5) {
    resultado = euro * pesolib * cantidad;
} else if (de === 5 && a === 1) {
    resultado = libra_Esterlina * pesodllar * cantidad;
} else if (de === 5 && a === 2) {
    resultado = libra_Esterlina * psomxn * cantidad;
} else if (de === 5 && a === 3) {
    resultado = libra_Esterlina * pesolib * cantidad;
} else if (de === 5 && a === 4) {
    resultado = libra_Esterlina * psoeur * cantidad;
} else if (de === 5 && a === 5) {
    resultado = libra_Esterlina * libra_Esterlina * cantidad;
} else if (de === 1 && a === 1) {
    resultado = dolr * dolr * cantidad;
}

document.getElementById("totalEquivale").value = resultado;

}
