// Destructing / Destructuring assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rank: 'Soldado',
};

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.clave)

// Destructuring values can be renamed using the :. See the example below, where nombre is renamed to nombre 2. Now we have a variable with name nombre 2.
const { nombre:nombre2 } = persona;

console.log( nombre2 );

const { nombre, edad, clave } = persona;

console.log( nombre );
console.log( edad );
console.log( clave );

// Object destructing 1
const retornaPersona = (user) => {
    const { nombre, edad, clave } = user;
    console.log( nombre, edad, clave )
}

retornaPersona(persona);

// Object destructing 2
const retornaPersona2 = ({ nombre, edad, rank='Captain' }) => {
    console.log( nombre, edad, rank )
}

retornaPersona2(persona);

/*
Notes:
- Destructuring assignment can also be applied in nested objects (consult in documentation).
*/