
var botonencriptar = document.getElementById("encriptar");
var botondesencriptar = document.getElementById("desencriptar");
var botoncopiar = document.getElementById("copiar");
const textoentrada = document.querySelector("#ingreseTexto");
const resultado = document.querySelector("#resultado");

function ocultar(){
    document.getElementById("salidas").style.display = "none";
    textoentrada.value = "";
}

function mostrarresultados(resultado){
    document.getElementById("resultados").style.display = "inline-block";
}

function copiartexto(){
    textocopiado = resultado.value;
    navigator.clipboard.writeText(textocopiado);
}

function encriptando(stringEncriptado){

    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i=0; i<matrizcodigo.length; i++){
        if(stringEncriptado.includes(matrizcodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return stringEncriptado;
}

function desencriptando(stringDesencriptado){

    let matrizcodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i<matrizcodigo.length; i++){
        if(stringDesencriptado.includes(matrizcodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    }
    return stringDesencriptado;
}

function encriptar(){
    const textoencriptado = encriptando(textoentrada.value)
    resultado.value = textoencriptado;
    ocultar();
    mostrarresultados();
}

function desencriptar(){
    const textodesencriptado = desencriptando(textoentrada.value)
    resultado.value = textodesencriptado;
    ocultar();
    mostrarresultados();
}

botonencriptar.onclick = encriptar;
botondesencriptar.onclick = desencriptar;
botoncopiar.onclick = copiartexto;