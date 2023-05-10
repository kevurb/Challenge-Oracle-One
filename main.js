



function encriptarMsn() {
    const mensaje= document.getElementById('msj');
    const palabra= mensaje.value;
    palabra.toLowerCase();
    //console.log(palabra.length);
    let nuevaPalabra = "";
    const msn=document.getElementById('msnout');
    
    
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
   msn.value = nuevaPalabra;
   msn.style.backgroundImage = 'none';
}
function copyClipboard(){
    const texto= document.getElementById('msnout');
    const msntocopy = texto.value;
    console.log(msntocopy);
    navigator.clipboard.writeText(msntocopy);


}

function desencritarMsn(){
    const mensaje= document.getElementById('msj');
    const palabra= mensaje.value;
    console.log('lapalabra es:',palabra);
    
    const msn = document.getElementById('msnout');
    const nue= palabra.replace(/ai/g,"a");
    const sine=nue.replace(/enter/g,'e');
    const sini=sine.replace(/imes/g,'i');
    const sino=sini.replace(/ober/g,'o');
    const descod=sino.replace(/ufat/g,'u');
    console.log(descod);
    msn.value = descod;
    msn.style.backgroundImage = 'none';
}
//let mensaje= document.getElementById('msj');

//console.log(reemplazarLetra());
