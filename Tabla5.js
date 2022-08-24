'use strict'
const fs = require('fs');

console.clear();
let i= 0;
let base= 17;
let salida= '';
for (i=1; i < 11; i++) {
    salida+= `${base} x ${i} = ${base * i}\n`;
}

console.log(`---------------------------`);
salida+= `\n`;

base= 35;
for (i=1; i < 11; i++) {
    salida+= `${base} x ${i} = ${base * i}\n`;
}
fs.writeFile('tabla17-35.txt', salida, (err) => {  //(nombrearchivo, loqQuieroAgregar, callback de err);
	if (err) throw err;
	console.log('tabla17-35.txt creado');
});

console.log(salida);
