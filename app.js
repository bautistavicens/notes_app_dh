const jsonTranslate = require("./json_translate");
const arrayPrinter = require("./recorrer_y_mostrar_vec");
const listadorDeTareas = require("./listador_tareas");

//Extrae las tareas del JSON.
let tareas = jsonTranslate.translateFromJSON("./tareas.json");

//Opcioens de ingreso para el usuario.
const opciones = ["Todas", "Terminadas", "Ejecucion", "Pendientes"];

//Entrada del usuario.
let instruccion = process.argv[2];

//Pasamos a mayusculas para comparar
instruccion = instruccion.toUpperCase();

switch (instruccion){
    case "TODAS":
        console.log("Tareas:");
        listadorDeTareas.listar(tareas, instruccion);
        break;
    case "TERMINADAS":
        console.log("Tareas terminadas:");
        listadorDeTareas.listar(tareas, instruccion);
        break;
    case "EJECUCION":
        console.log("Tareas en ejecución:");
        listadorDeTareas.listar(tareas, instruccion);
        break;
    case "PENDIENTES":
        console.log("Tareas pendientes:");
        listadorDeTareas.listar(tareas, instruccion);
        break;
    default:
        console.log("\nOpción invalida.\nSeleccione una opción valida de listado:");
        arrayPrinter.mostrarEnumerado(opciones);
        break;
}

