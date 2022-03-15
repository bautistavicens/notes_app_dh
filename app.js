const jsonTranslate = require("./json_translate");
const arrayPrinter = require("./recorrer_y_mostrar_vec");
const listadorDeTareas = require("./listador_tareas");

//Extrae las tareas del JSON.
let tareas = jsonTranslate.leerJson();

//Opcines de ingreso para el usuario.
const opciones = ["Todas", "Terminadas", "Ejecucion", "Pendientes", "Cargar"];

//Entrada del usuario.
let instruccionParam1 = process.argv[2];
let instruccionParam2 = process.argv[3];

//Pasamos a mayusculas para comparar
instruccionParam1 = instruccionParam1.toUpperCase();

switch (instruccionParam1){
    case "TODAS":
        console.log("Tareas:");
        listadorDeTareas.listar(tareas, instruccionParam1);
         break;
    case "TERMINADAS":
        console.log("Tareas terminadas:");
        listadorDeTareas.listar(tareas, instruccionParam1);
        break;
    case "EJECUCION":
        console.log("Tareas en ejecución:");
        listadorDeTareas.listar(tareas, instruccionParam1);
        break;
    case "PENDIENTES":
        console.log("Tareas pendientes:");
        listadorDeTareas.listar(tareas, instruccionParam1);
        break;
    case "CARGAR":
        jsonTranslate.escribirJson(instruccionParam2);
        break;
    default:
        console.log("\nOpción invalida.\nSeleccione una opción valida de listado:");
        arrayPrinter.mostrarEnumerado(opciones);
        break;
    }



