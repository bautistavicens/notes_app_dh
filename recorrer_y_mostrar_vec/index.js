//Recorre el vector y muestra sus elementos por consola. 
function mostrarSolo(vec){
    for(let i = 0; i < vec.length; i++ ){
        console.log(vec[i]);
    }
}

//Recorre el vector y muestra sus elementos, enumerados, por consola.
function mostrarEnumerado(vec){
    for(let i = 0; i < vec.length; i++ ){
        console.log(i+1 + "- " + vec[i]);
    }
}

module.exports.mostrarSolo = mostrarSolo;
module.exports.mostrarEnumerado = mostrarEnumerado;