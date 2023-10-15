const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 12345,
        lat: 14.3232,
        lng: 34.923321,
    }
};



console.log( persona );
console.table( persona );

// Forma incorrecta de copiar un objeto
const persona2 = persona;

persona2.nombre = 'test'

console.log( persona )
console.log( persona2 )

// Forma correcta de copiar un objeto con todas sus propiedades
const persona3 = { ...persona }
persona3.nombre = 'Test 2'

console.log( persona )
console.log( persona3 )


/*
Notas:
- La asignación de objetos se hace por referencia, no se hace por valor.
*/