//Filtra las tareas según su estado y las muestra por consola, enumeradas.
function listar(vec, estado){
    let count = 0;
    for(let i = 0; i <vec.length ;i++){
        switch(estado){
            case "TODAS":
                count++;
                console.log(count + "- " + vec[i].titulo);
                break;
            case "TERMINADAS":
                if(vec[i].estado == "terminada"){
                    count++;
                    console.log(count + "- " + vec[i].titulo);
                }
                 break;
                
            case "EJECUCION":
                if(vec[i].estado == "en ejecucion"){
                    count++;
                    console.log(count + "- " + vec[i].titulo);
                }
                break;
            case "PENDIENTES":
                if(vec[i].estado == "pendiente"){
                    count++;
                    console.log(count + "- " + vec[i].titulo);
                }
                break;
        }
    }
}

module.exports.listar = listar; 