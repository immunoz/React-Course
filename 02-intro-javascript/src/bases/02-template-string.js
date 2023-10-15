const nombre = 'Isaac';
const apellido = 'Muñoz';

const nombreCompleto = nombre + ' ' + apellido;

console.log( nombreCompleto );

const nombreCompleto2 = `
Hello 
${nombre} 
${apellido}
${ 1 + 1 }
`;

console.log( nombreCompleto2 );

function getSaludo(nombre) {
    return 'Hello ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo() }` )

/*
Notas
- Tanto la generación de nombreCompleto como la de nombreCompleto2 es correcta.

 */