//import { heroes } from './data/heroes';
// With ctrl + space we can see wich values are exported from libraries
import { heroes } from './data/heroes'

const getHeroById = (id) => {
    return heroes.find(item => item.id === id);
};


let test = getHeroById(2);

// find returns the reference of the object selected.
test.name = 'broma?';
console.log( test.name )
console.log( heroes[1] )

const getHeroesByOwner = ( owner ) => heroes.filter(hero => hero.owner === owner);

console.log( getHeroesByOwner('DC') )

/*
Notes:
- 
*/