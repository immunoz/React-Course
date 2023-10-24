import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import Heroes from '../../src/data/heroes'

describe('Testing at 08-imp-exp', () => {
  
    test('getHeroeById should return a heroe by ID', () => {
      
        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual( {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        } );
    });

    test('getHeroeById should return undefined if the hero does not exists', () => {
      
        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();
    });

    test('getHeroesByOwner should return only DC heroes', () => {
      
        const owner = 'DC';
        const heroesByOwner = getHeroesByOwner( owner );

        expect( heroesByOwner.length ).toBe( 3 );
        
        /*
        This is also valid
        expect( heroes[0].owner ).toBe( owner );
        expect( heroes[1].owner ).toBe( owner );
        expect( heroes[2].owner ).toBe( owner );
        */

        expect( heroesByOwner ).toEqual( Heroes.filter( hero =>  hero.owner === owner) );

    });

    test('getHeroesByOwner should return only Marvel heroes', () => {
      
        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner( owner );

        /*
        This is also valid
        expect( heroes.length ).toBe( 2 );
        expect( heroes[0].owner ).toBe( owner );
        expect( heroes[1].owner ).toBe( owner );
        */

        expect( heroesByOwner ).toEqual( Heroes.filter( hero =>  hero.owner === owner) );

    });
    
})
