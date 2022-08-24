const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, listar, h) => { 
  return new Promise( (res,rej) => {
   
    let salida= '';
    let consola= '';

    salida = `Tabla del ${base} hasta el ${h} Mannnnnc \n\n`;

    for (let i=1; i <= h; i++) {
        salida+= `${base} x ${i} = ${base * i}\n`;
        consola+= `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
     }

    if (listar){
      console.log('================================='.green)
      console.log('   Tabla del', base, 'hasta el ', h);
      console.log('================================='.green)
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    res(`tabla-${base}.txt`);
  })
   
}
    module.exports= {
        crearArchivo //es como poner crearArchivo: crearArchivo
    }