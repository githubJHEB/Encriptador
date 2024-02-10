function encriptarDesencriptar(tareaARealizar) {
    let textoCapturadoDesencriptar = document.querySelector(`textarea`).value;
    let longitudTextoCapturadoDesencriptar = document.querySelector(`textarea`).textLength;

    if (tareaARealizar === "encriptar") {
        document.getElementById("munecoId").style.display = "none";
        document.getElementById("texto-desencriptado_avisoId").style.display = "none";
        document.getElementById("texto-desencriptado_descripcionId").style.display = "none";

        document.getElementById("texto-desencriptadoId").style.visibility = "visible";
        document.getElementById("boton-copiarId").style.visibility = "visible";

        document.getElementById("texto-desencriptadoId").innerHTML = encriptar(textoCapturadoDesencriptar, longitudTextoCapturadoDesencriptar)
        document.querySelector(`textarea`).value = "";
    } else {
        document.getElementById("munecoId").style.display = "none";
        document.getElementById("texto-desencriptado_avisoId").style.display = "none";
        document.getElementById("texto-desencriptado_descripcionId").style.display = "none";

        document.getElementById("texto-desencriptadoId").style.visibility = "visible";
        document.getElementById("boton-copiarId").style.visibility = "visible";

        let textoDesencriptadoparaMostrar = document.getElementById("texto-desencriptadoId");
        textoDesencriptadoparaMostrar.innerHTML = desencriptar(textoCapturadoDesencriptar, longitudTextoCapturadoDesencriptar);
    }
    return;
}

function desencriptar(texto, longitud) {
    let indexWordFind = 0;
    let indexStart = 0;
    let compoundWord = "";
    let fragmentWord = "";
    for (let j = 0; j < longitud; j++) {
        fragmentWord = fragmentWord + texto.charAt(j);
        compoundWord = compoundWord + texto.charAt(j);

        if (fragmentWord.includes("ai")) {
            compoundWord = compoundWord.substring(0, (compoundWord.indexOf("ai"))) + "a";

            fragmentWord = "";
        } else if (fragmentWord.includes("ober")) {
            compoundWord = compoundWord.substring(0, (compoundWord.indexOf("ober"))) + "o";
            fragmentWord = "";
        } else if (fragmentWord.includes("enter")) {
            compoundWord = compoundWord.substring(0, (compoundWord.indexOf("enter"))) + "e";
            fragmentWord = "";
        } else if (fragmentWord.includes("imes")) {
            compoundWord = compoundWord.substring(0, (compoundWord.indexOf("imes"))) + "i";
            fragmentWord = "";
        } else if (fragmentWord.includes("ufat")) {
            compoundWord = compoundWord.substring(0, (compoundWord.indexOf("ufat"))) + "u";
            fragmentWord = "";
        }
    }

    return compoundWord;
}
function encriptar(texto, longitud) {
    let compoundWord = "";
    for (let j = 0; j < longitud; j++) {
        switch (texto.charAt(j)) {
            case "e":
                compoundWord = compoundWord + "enter";
                break;
            case "i":
                compoundWord = compoundWord + "imes";
                break;

            case "a":
                compoundWord = compoundWord + "ai";
                break;

            case "o":
                compoundWord = compoundWord + "ober";
                break;

            case "u":
                compoundWord = compoundWord + "ufat";
                break;
            default:
                compoundWord = compoundWord + texto.charAt(j);
        }

    }
    return compoundWord;
}

function copiar() {
    let textoDesencriptadoparaMostrar = document.getElementById("texto-desencriptadoId").textContent
    let textoCapturadoDesencriptar = document.querySelector(`textarea`);
    document.querySelector(`textarea`).addEventListener('click', () => {
        document.querySelector(`textarea`).value = textoDesencriptadoparaMostrar;
        document.getElementById("texto-desencriptadoId").innerHTML = "";
    });
}

