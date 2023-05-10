

function encriptarInfo(){
    const mensaje= document.getElementById('msj');
    const mennin= mensaje.value.toLowerCase();
    //console.log(mennin.toLowerCase());
    
    console.log(reemplazarLetra());
};

function reemplazarLetra() {
    const mensaje= document.getElementById('msj');
    const palabra= mensaje.value;
    palabra.toLowerCase();
    console.log(palabra.length);
    let nuevaPalabra = "";
    
    
    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i].toLowerCase();
        switch (letra) {
            case 'a':
                nuevaPalabra += "ai";
                break;
            case 'e': 
                nuevaPalabra += "enter";
                break;
            case 'i':
                nuevaPalabra += "imes";
                break;
            case 'o':
                nuevaPalabra += "ober";
                break;
            case 'u':
                nuevaPalabra += "ufat";
                break;
            default:
                nuevaPalabra += letra;
                break;
        }
        }
   console.log(nuevaPalabra);
  }

//let mensaje= document.getElementById('msj');
console.log(reemplazarLetra());