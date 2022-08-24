const argv = require('yargs')
    .option('b', {   //alias del file f y file van a ser lo mismo
     alias: 'base',
     type: 'number',
     demandOption: true, //si la info es requerida si o si, y no precisa default
     describe: 'Mando como parámetro la base para las tablas de multiplicar'
    })
    
    .option('l', {   
     alias: 'listar',
     type: 'boolean',
     default: false, 
     describe: 'Muestra la tabla en consola' //app node –help muestra como descripción de la app en ayuda
    })

    .option('h', {   
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Límite de la tabla' //app node –help muestra como descripción de la app en ayuda
       })

    .check( (argv, options) => {  //método q verifica si ciertas condiciones son aplicadas
     if ( isNaN(argv.b) ) { // si el arg no es número
        throw 'La base debe ser un número'  //si lanza el throw desp no ejecuta mas nada
     }
     return true; //si no hay error  
    })
.argv //es lo último q se pone

module.exports= argv;