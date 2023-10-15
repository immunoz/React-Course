// Arreglos en JS
const arreglo = new Array( 100 );

console.log( arreglo );

arreglo.push(1)

console.log( arreglo );

/*const arreglo2 = [];
arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4);*/
const arreglo2 = [1,2,3,4]

console.log(arreglo2);

const arreglo3 = [ ...arreglo2, 5 ]
console.log( arreglo3 )

const arreglo4 = arreglo2.map( function(numero) {
    return numero * 2;
});

console.log( arreglo4 )


/*
Notas:
- new Array() -> solo hay que usarlo en caso de querer crear un array con posiciones fijas.
- Si la función map no devuelve ningún valor explicito, se evuelve un undefined en el array.
*/