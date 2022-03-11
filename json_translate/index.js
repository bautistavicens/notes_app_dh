const fileSystem = require("fs");


//La funcion traduce los archivos JSON
function translateFromJSON(dir){
    
    let JsonArchive = fileSystem.readFileSync(dir);
    
    return JSON.parse(JsonArchive);
}

//La función traduce a JSON
function translateToJson(data){
   
    return JSON.stringify(data);
}

module.exports.translateFromJSON = translateFromJSON;
module.exports.translateToJson = translateToJson;