const fs = require('fs');
const crearArchivo = async(base = 5) => { //al poner async x defecto ya retorna una promesa
  try {
    let salida= '';
    for (let i=1; i < 11; i++) {
        salida+= `${base} x ${i} = ${base * i}\n`;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida, );
    return `tabla-${base}.txt`;
}
  
    catch (err) {
        throw err;
    }
  }
    module.exports= {
        crearArchivo //es como poner crearArchivo: crearArchivo
    }