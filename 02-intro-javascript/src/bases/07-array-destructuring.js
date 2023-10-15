// Array destructuring

const characters = ['Goku', 'Vegeta', 'Trunks'];

console.log(characters[0])
console.log(characters[1])
console.log(characters[2])

// With desctructing assignment
const [ , , p3 ] = characters;
console.log( p3 )

const returnsArray = () => {
    return ['ABC', 123]
}

const [letters, numbers] = returnsArray();
console.log( letters, numbers );

// TASK
// 1. first value will be name
// 2. Second value will be called setName
const useState = ( valor ) => {
    return [ valor, () => {console.log( 'The value is: ', valor )} ];
}

const arr = useState( 'Goku3' );
const [ name, setName ] = useState( 'Isaac' );
console.log(name);
setName();

/*
Notes:
- Functions can also be returned into arrays, and after they can be destructured.
*/