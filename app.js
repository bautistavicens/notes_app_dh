const jsonTranslate = require("./json_translate");
const arrayPrinter = require("./recorrer_y_mostrar_vec");
const listadorDeTareas = require("./listador_tareas");

//Extrae las tareas del JSON.
let tareas = jsonTranslate.leerJson();

//Opcines de ingreso primer parametro.
const opcionesPrincipales = ["Listar", "Cargar"];

//Opcines de ingreso segundo parametro.
const opcionesDeEstado = ["Todas", "Terminadas", "Ejecucion", "Pendientes"];

//Entrada del usuario.
let instruccionParam1 = process.argv[2];
let instruccionParam2 = process.argv[3];

//Pasamos a mayusculas para comparar
instruccionParam1 = instruccionParam1.toUpperCase();

//MAIN
main();


function main(){
    switch(instruccionParam1){
        case "LISTAR":
            instruccionParam2 = instruccionParam2.toUpperCase();
            leerPorEstados();
            break;
        case "CARGAR":
            jsonTranslate.escribirJson(instruccionParam2);
            break;
        default:
            console.log("\nOpción invalida.\nSeleccione una opción valida de listado:");
            arrayPrinter.mostrarEnumerado(opcionesPrincipales);
            break;

    }
}


function leerPorEstados(){
    switch (instruccionParam2){
        case "TODAS":
            console.log("Tareas:");
            listadorDeTareas.listar(tareas, instruccionParam2);
            break;
        case "TERMINADAS":
            console.log("Tareas terminadas:");
            listadorDeTareas.listar(tareas, instruccionParam2);
            break;
        case "EJECUCION":
            console.log("Tareas en ejecución:");
            listadorDeTareas.listar(tareas, instruccionParam2);
            break;
        case "PENDIENTES":
            console.log("Tareas pendientes:");
            listadorDeTareas.listar(tareas, instruccionParam2);
            break;
        default:
            console.log("\nOpción invalida.\nSeleccione una opción valida de listado:");
            arrayPrinter.mostrarEnumerado(opcionesDeEstado);
            break;
    }
}




