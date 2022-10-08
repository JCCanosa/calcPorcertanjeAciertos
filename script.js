document.getElementById("resultado").addEventListener("click", calcular);

function calcular(){
    let intentos = parseInt(document.getElementById("intentos").value);
    let aciertos = parseInt(document.getElementById("aciertos").value);
    let fallos = parseInt(document.getElementById("fallos").value);
    let porcAciertos = (aciertos / intentos) * 100;
    let porcFallos = (fallos / intentos) * 100;
    document.getElementById("porcAciertos").value = porcAciertos + "%";
    document.getElementById("porcFallos").value = porcFallos + "%";
}





   



