function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm, "enter")
                          .replace(/o/igm, "ober")
                          .replace(/i/igm, "imes")
                          .replace(/a/igm, "ai")
                          .replace(/u/igm, "ufat");

    document.getElementById("imgderecha").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "block";
}

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm, "e")
                          .replace(/ober/igm, "o")
                          .replace(/imes/igm, "i")
                          .replace(/ai/igm, "a")
                          .replace(/ufat/igm, "u");

    document.getElementById("imgderecha").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "block";
}

function copiar() {
    var contenido = document.getElementById("texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");
}


