import { getHeroById } from "./bases/08-imp-exp";
/*
// Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let hero = getHeroById(2);
        reject('No se pudo encontrar el heroe');
    }, 2000);
});

promise.then(( hero ) => {
    console.log('Then of the promise launched')
    console.log(`Hero is `, hero);
}).catch( err => console.warn(err));
*/

const getHeroesByIdAsync = ( id ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let hero = getHeroById(id);
            if (hero) {
                resolve(hero);
            } else {
                reject('No se ha encontrado el heroe')
            }
        }, 2000);
    });
}

// V1
getHeroesByIdAsync(40)
.then(heroe => console.log('Heroe', heroe))
.catch(errorMessage => console.error(errorMessage))

// V2 - simpler version
getHeroesByIdAsync(40)
.then(console.log)
.catch(console.error)

/*
Notes:
- Catch is used to catch the promise errors
- Then is to catch the success item returned by the promise.
- If the argument is sent to another function
*/