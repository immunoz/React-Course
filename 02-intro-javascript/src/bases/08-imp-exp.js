//import { heroes } from './data/heroes';
// With ctrl + space we can see wich values are exported from libraries
import heroes from '../data/heroes'

export const getHeroById = ( id ) => {
    return heroes.find(item => item.id === id);
};

export const getHeroesByOwner = ( owner ) => heroes.filter(hero => hero.owner === owner);

/*
Notes:
- Default export is used when you only want to export only one file or is it the default export item.
- When you use an export without default, it has to be imported with deconstruction (with curly braces).

*/