const empleados = [
    {   id: 1,
        nombre: 'Fernando'

},  {   id: 2,
        nombre: 'Bok'

},{     id: 3,
        nombre: 'Karen'
}
];

const salarios= [
  { id: 1,
    salario: 1000
  },
  { id: 2,
    salario: 1500
  }
 ]

const getEmpleado= (id, callback) => {
    const empleado= empleados.find(e => e.id===id) 
       if (empleado) { //si el empleado existe (empleado <> null)
        callback (empleado); 
       }
       else  {
        return `empleado con id ${id} no existe`; 
       }
}

// console.log(getEmpleado(6));

getEmpleado( 3, (empleado) => {

console.log(empleado)
})