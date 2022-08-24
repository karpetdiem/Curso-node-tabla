const { crearArchivo } = require('./helpers/multiplicarPromis'); //desestructurado entre {}
const colors= require('colors');
const argv= require('./config/yargs');

//console.log(argv);

console.log("rainbowrainbow".random);
console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.yellow, 'creado'))
    .catch(err => console.log (err));

module.exports=argv; 