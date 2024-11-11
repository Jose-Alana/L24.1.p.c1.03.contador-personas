//Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estosdatos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
//Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
//Cantidad de personas: 12
//Cantidad de hombres: 5
//Cantidad de mujeres: 7

import Cl_persona from "./Cl_persona.js";
import Cl_contador from "./Cl_contador.js";

let contador = new Cl_contador();   
let perso1 = new Cl_persona("Luisa","F");
let perso2 = new Cl_persona("Ana","F");
let perso3 = new Cl_persona("Jose","M");
let perso4 = new Cl_persona("Carmen","F");
let perso5 = new Cl_persona("Rosa","F");    
let perso6 = new Cl_persona("Jose","M");
let perso7 = new Cl_persona("Maria","F");
let perso8 = new Cl_persona("Luz","F");
let perso9 = new Cl_persona("Rafael","M");
let perso10 = new Cl_persona("Liz","F");
let perso11 = new Cl_persona("Marcos","M");
let perso12 = new Cl_persona("Leo","M");

contador.procesarpersona(perso1);
contador.procesarpersona(perso2);
contador.procesarpersona(perso3);
contador.procesarpersona(perso4);
contador.procesarpersona(perso5);
contador.procesarpersona(perso6);
contador.procesarpersona(perso7);
contador.procesarpersona(perso8);
contador.procesarpersona(perso9);
contador.procesarpersona(perso10);
contador.procesarpersona(perso11);
contador.procesarpersona(perso12);

let salida = document.getElementById("salida");

salida.innerHTML = `
Cantidad de personas: ${contador.devolvercontador()}
<br>Cantidad de hombres: ${contador.hombres()}
<br>Cantidad de mujeres: ${contador.mujeres()}
`