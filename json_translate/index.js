const fileSystem = require("fs");
const dir = "./tareas.json";

//La funcion traduce los archivos JSON
function leerJson(){
    
    let JsonArchive = fileSystem.readFileSync(dir);
    
    return JSON.parse(JsonArchive);
}

//La función traduce a JSON 
function escribirJson(titulo){

    let archivoJson = leerJson();

    titulo = titulo.charAt(0).toUpperCase() + titulo.slice(1);
    
    let tareaNueva = {
        titulo: titulo,
        estado: "pendiente"
    };
    archivoJson.push(tareaNueva);

    let jsonTranslation = JSON.stringify(archivoJson);
    
    fileSystem.writeFileSync(dir, jsonTranslation);
}

module.exports.leerJson = leerJson;
module.exports.escribirJson = escribirJson;