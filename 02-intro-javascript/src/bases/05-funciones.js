// Functions
function saludar( nombre ) {
    return `Hola ${ nombre }`;
}

console.log( saludar('Pedro') )

console.log( saludar );

saludar = 30;

console.log( saludar )

// According to the author recomendations, this is the way a function should be created.
const saludar2 =  function( nombre ) {
    return `Hola ${ nombre }`;
}

// This would cause an error
//saludar2 = 30;

console.log( saludar2 )

// Lamda functions
const saludar3 = ( nombre ) => {
    return `Hola ${ nombre }`;
};

console.log( saludar3('Vegeta') );

// Task
// 1. Convert it into a lambda function
// 2. It has to return an implicit value
// 3. Testing

function getActiveUser(name) {
    return {
        uid: 'ABC1234',
        username: name,
    }
}

const getActiveUserTask = ( name ) => ({
    uid: 'ABC1234',
    username: name,
});

const user1 = getActiveUserTask('Isaac');
const user2 = getActiveUserTask('Ismael')

console.log( user1 );
console.log( user2 );

user2.username = 'TEST'
console.log( user1 );
console.log( user2 );

/*
Notes:
- It is not recomended to create variables with the function keyword directly, because the name of the function can be reasigned, and thus, the function implementation would be removed. This is more a personal decision.
- In lambda functions it is not needed the keyword return, nor the curly braces if the function only has one statement. If an object is returned, parenthesis should be used.
*/