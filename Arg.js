"use strict"

const suma = (...arg) => {
    let resultado = 0;
    for (let i=0; i < arg.length; i++){
        resultado += arg[i];
    }
    console.log("Suma: ", resultado);
    console.log("Hay " +arg.length, "argumentos");
}

suma(12,25,1,10);
